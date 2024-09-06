import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { isArray } from 'lodash';

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  if (isArray(id)) {
    return res.status(400).json({ error: 'Only one ID is allowed' });
  }

  const session = await prisma.session.findUnique({
    where: {
      id: id as string
    },
    include: {
      User: true
    }
  });

  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }

  res.json(session);
}

export async function updateSession(req: NextApiRequest, res: NextApiResponse) {
  const { startData } = req.body;
  const { id } = req.query;

  if (!id || !startData) {
    return res.status(400).json({ error: 'ID and startData are required' });
  }

  const session = await prisma.session.update({
    where: {
      id: id as string
    },
    data: {
      startData
    },
    include: {
      User: true
    }
  });

  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }

  res.json(session);
}

export async function removeSession(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  if (isArray(id)) {
    return res.status(400).json({ error: 'Only one ID is allowed' });
  }

  const session = await prisma.session
    .delete({
      where: {
        id: id as string
      },
      include: {
        User: true
      }
    })
    .catch((_: Error) => {
      return res.status(404).json({ error: 'Session not found' });
    });

  return res.json(session);
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    return updateSession(req, res);
  }

  if (req.method === 'DELETE') {
    return removeSession(req, res);
  }

  if (req.method === 'GET') {
    return getSession(req, res);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
