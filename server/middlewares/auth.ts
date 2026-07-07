import type { PrismaClient } from '@prisma/client';

export const authenticateApiKey = async (c: any, next: any) => {
  const apiKey = c.req.header('x-api-key');
  if (!apiKey) {
    return c.json({ error: 'Unauthorized: Missing or invalid x-api-key header' }, 401);
  }

  const prisma: PrismaClient = c.get('prisma');
  
  try {
    const system = await prisma.system.findUnique({
      where: { api_key: apiKey },
    });

    if (!system) {
      return c.json({ error: 'Forbidden: Invalid API Key' }, 403);
    }

    c.set('system', system);
    await next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
};
