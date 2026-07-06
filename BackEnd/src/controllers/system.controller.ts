import { Request, Response } from 'express';
import prisma from '../prisma/client';
import { z } from 'zod';

const systemSchema = z.object({
  system_name: z.string().min(1, 'system_name is required').max(255),
}).strict();

export const createSystem = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsedData = systemSchema.safeParse(req.body);
    if (!parsedData.success) {
      res.status(400).json({ error: 'Validation failed', details: parsedData.error.issues });
      return;
    }

    const { system_name } = parsedData.data;

    const system = await prisma.system.create({
      data: {
        system_name,
      },
    });

    res.status(201).json({ 
      message: 'System created successfully. PLEASE SAVE YOUR API KEY: ' + system.api_key, 
      data: {
        system_name: system.system_name,
        api_key: system.api_key,
        id: system.id
      } 
    });
  } catch (error: any) {
    console.error('Error creating system:', error);
    if (error.code === 'P2002') {
      res.status(409).json({ error: 'System with this name already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
