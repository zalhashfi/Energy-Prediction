import { Request, Response } from 'express';
import prisma from '../prisma/client';
import { z } from 'zod';

const dailyReportSchema = z.object({
  system_name: z.string(),
  hari_pengukuran: z.coerce.date(),
  kwh_meter_kumulatif: z.number().or(z.bigint()).optional(),
  kwh_harian: z.number().int().optional(),
  produksi_harian: z.number().int().optional(),
  wm_harian: z.number().int().optional(),
  sec: z.number().optional(),
  sec_rekap: z.number().optional(),
}).strict();

export const createDailyReport = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsedData = dailyReportSchema.safeParse(req.body);
    if (!parsedData.success) {
      res.status(400).json({ error: 'Validation failed', details: parsedData.error.issues });
      return;
    }

    const { system_name, hari_pengukuran, kwh_meter_kumulatif, ...restData } = parsedData.data;

    // Check for existing data to prevent duplicates
    const existingData = await prisma.dailyReportRaw.findFirst({
      where: {
        system_name,
        hari_pengukuran,
      },
    });

    if (existingData) {
      res.status(409).json({ error: 'Conflict', message: 'Data for this system_name and hari_pengukuran already exists' });
      return;
    }

    const newDailyReport = await prisma.dailyReportRaw.create({
      data: {
        system_name,
        hari_pengukuran,
        ...restData,
        ...(kwh_meter_kumulatif !== undefined ? { kwh_meter_kumulatif: BigInt(kwh_meter_kumulatif) } : {}),
      }
    });

    res.status(201).json({ message: 'Daily report created successfully', data: newDailyReport });
  } catch (error) {
    console.error('Error creating daily report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
