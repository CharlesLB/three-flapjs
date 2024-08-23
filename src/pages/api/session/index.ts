import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export async function createSession(req: NextApiRequest, res: NextApiResponse) {
  const { startData, userId } = req.body;

  if (!startData) {
    return res.status(400).json({ error: 'startData is required' });
  }

  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  if (userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  }

  const result = await prisma.session.create({
    data: {
      startData,
      User: {
        connect: {
          id: userId
        }
      }
    },
    include: {
      User: true
    }
  });

  res.json(result);
}

export async function getSessions(_: NextApiRequest, res: NextApiResponse) {
  const sessions = await prisma.session.findMany({
    include: {
      User: true
    }
  });
  res.json(sessions);
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return createSession(req, res);
  }

  if (req.method === 'GET') {
    return getSessions(req, res);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
