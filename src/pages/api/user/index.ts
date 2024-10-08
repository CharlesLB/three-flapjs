import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../lib/prisma';
import { isArray } from 'lodash';

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  try {
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

      const result = await prisma.user.create({
        data: {
          name,
          sessionId: sessionId
        },
        include: {
          Session: true
        }
      });

      return res.json(result);
    }

    const result = await prisma.user.create({
      data: {
        name,
        Session: {
          create: {
            startData: '[]'
          }
        }
      },
      include: {
        Session: true
      }
    });

    return res.json(result);
  } catch (e) {
    return res.status(500).json({ error: 'Internal Server Error' + e });
  }
}

export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  const { sessionId } = req.query;

  if (!sessionId) {
    const users = await prisma.user.findMany();
    return res.json(users);
  }

  if (isArray(sessionId)) {
    return res.status(400).json({ error: 'Only one sessionId is allowed' });
  }

  const users = await prisma.user.findMany({
    where: {
      sessionId
    },
    include: {
      Session: true
    }
  });

  res.json(users);
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return createUser(req, res);
  }

  if (req.method === 'GET') {
    return getUsers(req, res);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
