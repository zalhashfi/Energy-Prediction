"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSensorData = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const zod_1 = require("zod");
const sensorSchema = zod_1.z.object({
    system_name: zod_1.z.string(),
    waktu_pengukuran: zod_1.z.coerce.date(),
    frek_hpp: zod_1.z.number().optional(),
    frek_intake: zod_1.z.number().optional(),
    deep_run: zod_1.z.number().int().optional(),
    in_mmf_pt1: zod_1.z.number().optional(),
    in_mmf_pt2: zod_1.z.number().optional(),
    out_mmf_pg1: zod_1.z.number().optional(),
    out_mmf_pg2: zod_1.z.number().optional(),
    in_ctf_pt: zod_1.z.number().optional(),
    in_hpp_pt: zod_1.z.number().optional(),
    out_hpp_pt: zod_1.z.number().optional(),
    in_ro_pt: zod_1.z.number().optional(),
    in_ro_pg: zod_1.z.number().optional(),
    out_ro_pt: zod_1.z.number().optional(),
    out_ro_pg: zod_1.z.number().optional(),
    out_tc_pt: zod_1.z.number().optional(),
    out_tc_pg: zod_1.z.number().optional(),
    q_produk: zod_1.z.number().optional(),
    q_feed: zod_1.z.number().optional(),
    flow_reject: zod_1.z.number().optional(),
    tds_raw: zod_1.z.number().optional(),
    tds_produk: zod_1.z.number().optional(),
    ph_produk: zod_1.z.number().optional(),
    wm_saat_ini: zod_1.z.number().optional(),
    wa_sebelum: zod_1.z.number().optional(),
    wm_selisih: zod_1.z.number().optional(),
    kwh_harian: zod_1.z.number().optional(),
    kwh: zod_1.z.number().optional(),
    sec: zod_1.z.number().optional(),
    produksi_harian: zod_1.z.number().optional(),
    wm_sumur: zod_1.z.number().optional(),
    sec_: zod_1.z.number().optional(),
    recovery_rate: zod_1.z.number().optional(),
    salt_rejection: zod_1.z.number().optional(),
    delta_p_ro: zod_1.z.number().optional(),
}).strict();
const createSensorData = async (req, res) => {
    try {
        const parsedData = sensorSchema.safeParse(req.body);
        if (!parsedData.success) {
            res.status(400).json({ error: 'Validation failed', details: parsedData.error.issues });
            return;
        }
        const { system_name, waktu_pengukuran } = parsedData.data;
        // Check for existing data to prevent duplicates
        const existingData = await client_1.default.dataSensorRaw.findFirst({
            where: {
                system_name,
                waktu_pengukuran,
            },
        });
        if (existingData) {
            res.status(409).json({ error: 'Conflict', message: 'Data for this system_name and waktu_pengukuran already exists' });
            return;
        }
        const newSensorData = await client_1.default.dataSensorRaw.create({
            data: parsedData.data,
        });
        res.status(201).json({ message: 'Sensor data created successfully', data: newSensorData });
    }
    catch (error) {
        console.error('Error creating sensor data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.createSensorData = createSensorData;
