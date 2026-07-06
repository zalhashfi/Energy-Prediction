"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSystem = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const zod_1 = require("zod");
const systemSchema = zod_1.z.object({
    system_name: zod_1.z.string().min(1, 'system_name is required').max(255),
}).strict();
const createSystem = async (req, res) => {
    try {
        const parsedData = systemSchema.safeParse(req.body);
        if (!parsedData.success) {
            res.status(400).json({ error: 'Validation failed', details: parsedData.error.issues });
            return;
        }
        const { system_name } = parsedData.data;
        const system = await client_1.default.system.create({
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
    }
    catch (error) {
        console.error('Error creating system:', error);
        if (error.code === 'P2002') {
            res.status(409).json({ error: 'System with this name already exists' });
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};
exports.createSystem = createSystem;
