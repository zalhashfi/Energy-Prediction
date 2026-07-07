import { Hono } from 'hono';
import type { PrismaClient } from '@prisma/client';
import { sensorSchema } from '../schemas';
import { authenticateApiKey } from '../middlewares/auth';

export const sensorRouter = new Hono();

sensorRouter.post('/', authenticateApiKey, async (c) => {
  const prisma: PrismaClient = c.get('prisma');
  try {
    const body = await c.req.json();
    const parsedData = sensorSchema.safeParse(body);
    if (!parsedData.success) {
      return c.json({ error: 'Validation failed', details: parsedData.error.issues }, 400);
    }

    const { system_name, waktu_pengukuran } = parsedData.data;
    
    const existingData = await prisma.dataSensorRaw.findFirst({
      where: { system_name, waktu_pengukuran },
    });

    if (existingData) {
      return c.json({ error: 'Conflict', message: 'Data for this system_name and waktu_pengukuran already exists' }, 409);
    }

    const newSensorData = await prisma.dataSensorRaw.create({
      data: parsedData.data,
    });

    return c.json({ message: 'Sensor data created successfully', data: newSensorData }, 201);
  } catch (error) {
    console.error('Error creating sensor data:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});
