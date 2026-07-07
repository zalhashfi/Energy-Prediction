import { Router } from 'express';
import { createSystem } from '../controllers/system.controller';
import { createSensorData } from '../controllers/sensor.controller';
import { createDailyReport } from '../controllers/daily-report.controller';
import { authenticateApiKey } from '../middlewares/auth.middleware';

const router = Router();

router.post('/systems', createSystem);
router.post('/system', createSystem); // Added alias for singular 'system'
router.post('/sensor', authenticateApiKey, createSensorData);
router.post('/daily-report', authenticateApiKey, createDailyReport);

export default router;
