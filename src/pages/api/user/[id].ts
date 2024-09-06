import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../lib/prisma';
import { isArray } from 'lodash';

export async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  if (isArray(id)) {
    return res.status(400).json({ error: 'Only one ID is allowed' });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: id
    },
    include: {
      Session: true
    }
  });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
}

export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  const { name, sessionId } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (sessionId) {
    const session = await prisma.session.findUnique({
      where: {
        id: sessionId
      }
    });

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
  }

  const result = await prisma.user.create({
    data: {
      name,
      sessionId
    },
    include: {
      Session: true
    }
  });

  res.json(result);
}

export async function removeUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  if (isArray(id)) {
    return res.status(400).json({ error: 'Only one ID is allowed' });
  }

  const user = await prisma.user
    .delete({
      where: {
        id: id
      }
    })
    .catch((_: Error) => {
      return res.status(500).json({ error: 'User not found' });
    });

  return res.json(user);
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    return updateUser(req, res);
  }

  if (req.method === 'DELETE') {
    return removeUser(req, res);
  }

  if (req.method === 'GET') {
    return getUser(req, res);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
