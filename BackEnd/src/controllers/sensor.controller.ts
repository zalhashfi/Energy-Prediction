import { Request, Response } from 'express';
import prisma from '../prisma/client';
import { z } from 'zod';

const sensorSchema = z.object({
  system_name: z.string(),
  waktu_pengukuran: z.coerce.date(),
  frek_hpp: z.number().optional(),
  frek_intake: z.number().optional(),
  deep_run: z.number().int().optional(),
  in_mmf_pt1: z.number().optional(),
  in_mmf_pt2: z.number().optional(),
  out_mmf_pg1: z.number().optional(),
  out_mmf_pg2: z.number().optional(),
  in_ctf_pt: z.number().optional(),
  in_hpp_pt: z.number().optional(),
  out_hpp_pt: z.number().optional(),
  in_ro_pt: z.number().optional(),
  in_ro_pg: z.number().optional(),
  out_ro_pt: z.number().optional(),
  out_ro_pg: z.number().optional(),
  out_tc_pt: z.number().optional(),
  out_tc_pg: z.number().optional(),
  q_produk: z.number().optional(),
  q_feed: z.number().optional(),
  flow_reject: z.number().optional(),
  tds_raw: z.number().optional(),
  tds_produk: z.number().optional(),
  ph_produk: z.number().optional(),
  wm_saat_ini: z.number().optional(),
  wa_sebelum: z.number().optional(),
  wm_selisih: z.number().optional(),
  kwh_harian: z.number().optional(),
  kwh: z.number().optional(),
  sec: z.number().optional(),
  produksi_harian: z.number().optional(),
  wm_sumur: z.number().optional(),
  sec_: z.number().optional(),
  recovery_rate: z.number().optional(),
  salt_rejection: z.number().optional(),
  delta_p_ro: z.number().optional(),
}).strict();

export const createSensorData = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsedData = sensorSchema.safeParse(req.body);
    if (!parsedData.success) {
      res.status(400).json({ error: 'Validation failed', details: parsedData.error.issues });
      return;
    }

    const { system_name, waktu_pengukuran } = parsedData.data;
    
    // Check for existing data to prevent duplicates
    const existingData = await prisma.dataSensorRaw.findFirst({
      where: {
        system_name,
        waktu_pengukuran,
      },
    });

    if (existingData) {
      res.status(409).json({ error: 'Conflict', message: 'Data for this system_name and waktu_pengukuran already exists' });
      return;
    }

    const newSensorData = await prisma.dataSensorRaw.create({
      data: parsedData.data,
    });

    res.status(201).json({ message: 'Sensor data created successfully', data: newSensorData });
  } catch (error) {
    console.error('Error creating sensor data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
