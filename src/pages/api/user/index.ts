import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../lib/prisma';
import { isArray } from 'lodash';

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const { name, sessionId } = req.body;

  if (!name || !sessionId) {
    return res.status(400).json({ error: 'Name and sessionId are required' });
  }

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
      sessionId
    }
  });

  res.json(result);
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
