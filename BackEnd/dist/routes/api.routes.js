"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const system_controller_1 = require("../controllers/system.controller");
const sensor_controller_1 = require("../controllers/sensor.controller");
const daily_report_controller_1 = require("../controllers/daily-report.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post('/systems', system_controller_1.createSystem);
router.post('/system', system_controller_1.createSystem); // Added alias for singular 'system'
router.post('/sensor', auth_middleware_1.authenticateApiKey, sensor_controller_1.createSensorData);
router.post('/daily-report', auth_middleware_1.authenticateApiKey, daily_report_controller_1.createDailyReport);
exports.default = router;
