// session/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export async function createSession(req: NextApiRequest, res: NextApiResponse) {
  const { startData } = req.body;

  if (!startData) {
    return res.status(400).json({ error: 'startData is required' });
  }

  const result = await prisma.session.create({
    data: {
      startData
    }
  });

  res.json(result);
}

export async function getSessions(req: NextApiRequest, res: NextApiResponse) {
  const sessions = await prisma.session.findMany();
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
