import { Hono } from 'hono';
import type { PrismaClient } from '@prisma/client';
import { dailyReportSchema } from '../schemas';
import { authenticateApiKey } from '../middlewares/auth';

export const dailyReportRouter = new Hono();

dailyReportRouter.post('/', authenticateApiKey, async (c) => {
  const prisma: PrismaClient = c.get('prisma');
  try {
    const body = await c.req.json();
    const parsedData = dailyReportSchema.safeParse(body);
    if (!parsedData.success) {
      return c.json({ error: 'Validation failed', details: parsedData.error.issues }, 400);
    }

    const { system_name, hari_pengukuran, kwh_meter_kumulatif, ...restData } = parsedData.data;

    const existingData = await prisma.dailyReportRaw.findFirst({
      where: { system_name, hari_pengukuran },
    });

    if (existingData) {
      return c.json({ error: 'Conflict', message: 'Data for this system_name and hari_pengukuran already exists' }, 409);
    }

    const newDailyReport = await prisma.dailyReportRaw.create({
      data: {
        system_name,
        hari_pengukuran,
        ...restData,
        ...(kwh_meter_kumulatif !== undefined ? { kwh_meter_kumulatif: BigInt(kwh_meter_kumulatif) } : {}),
      }
    });

    return c.json({ message: 'Daily report created successfully', data: newDailyReport }, 201);
  } catch (error) {
    console.error('Error creating daily report:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});
