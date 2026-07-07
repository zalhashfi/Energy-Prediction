import { Hono } from 'hono';
import type { PrismaClient } from '@prisma/client';
import { systemSchema } from '../schemas';

export const systemRouter = new Hono();

systemRouter.post('/', async (c) => {
  const prisma: PrismaClient = c.get('prisma');
  try {
    const body = await c.req.json();
    const parsedData = systemSchema.safeParse(body);
    if (!parsedData.success) {
      return c.json({ error: 'Validation failed', details: parsedData.error.issues }, 400);
    }

    const { system_name } = parsedData.data;

    const system = await prisma.system.create({
      data: { system_name },
    });

    return c.json({ 
      message: 'System created successfully. PLEASE SAVE YOUR API KEY: ' + system.api_key, 
      data: {
        system_name: system.system_name,
        api_key: system.api_key,
        id: system.id
      } 
    }, 201);
  } catch (error: any) {
    console.error('Error creating system:', error);
    if (error.code === 'P2002') {
      return c.json({ error: 'System with this name already exists' }, 409);
    }
    return c.json({ error: 'Internal server error' }, 500);
  }
});
