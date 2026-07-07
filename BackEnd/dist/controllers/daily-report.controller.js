"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDailyReport = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const zod_1 = require("zod");
const dailyReportSchema = zod_1.z.object({
    system_name: zod_1.z.string(),
    hari_pengukuran: zod_1.z.coerce.date(),
    kwh_meter_kumulatif: zod_1.z.number().or(zod_1.z.bigint()).optional(),
    kwh_harian: zod_1.z.number().int().optional(),
    produksi_harian: zod_1.z.number().int().optional(),
    wm_harian: zod_1.z.number().int().optional(),
    sec: zod_1.z.number().optional(),
    sec_rekap: zod_1.z.number().optional(),
}).strict();
const createDailyReport = async (req, res) => {
    try {
        const parsedData = dailyReportSchema.safeParse(req.body);
        if (!parsedData.success) {
            res.status(400).json({ error: 'Validation failed', details: parsedData.error.issues });
            return;
        }
        const { system_name, hari_pengukuran, kwh_meter_kumulatif, ...restData } = parsedData.data;
        // Check for existing data to prevent duplicates
        const existingData = await client_1.default.dailyReportRaw.findFirst({
            where: {
                system_name,
                hari_pengukuran,
            },
        });
        if (existingData) {
            res.status(409).json({ error: 'Conflict', message: 'Data for this system_name and hari_pengukuran already exists' });
            return;
        }
        const newDailyReport = await client_1.default.dailyReportRaw.create({
            data: {
                system_name,
                hari_pengukuran,
                ...restData,
                ...(kwh_meter_kumulatif !== undefined ? { kwh_meter_kumulatif: BigInt(kwh_meter_kumulatif) } : {}),
            }
        });
        res.status(201).json({ message: 'Daily report created successfully', data: newDailyReport });
    }
    catch (error) {
        console.error('Error creating daily report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.createDailyReport = createDailyReport;
