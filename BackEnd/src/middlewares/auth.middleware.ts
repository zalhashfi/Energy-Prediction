import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authenticateApiKey = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || typeof apiKey !== 'string') {
    res.status(401).json({ error: 'Unauthorized: Missing or invalid x-api-key header' });
    return;
  }

  try {
    const system = await prisma.system.findUnique({
      where: { api_key: apiKey },
    });

    if (!system) {
      res.status(403).json({ error: 'Forbidden: Invalid API Key' });
      return;
    }

    // Attach system to request for later use if needed
    (req as any).system = system;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
