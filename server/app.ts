import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';
import { cors } from 'hono/cors';

import { injectPrisma } from './middlewares/prisma';
import { systemRouter } from './routes/system';
import { sensorRouter } from './routes/sensor';
import { dailyReportRouter } from './routes/daily-report';

type Bindings = {
  DB: any; // D1Database
};

const app = new Hono<{ Bindings: Bindings }>().basePath('/api');

// Global Middlewares
app.use('*', secureHeaders());
app.use('*', cors({
  origin: '*', // You can restrict this to your domain later
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'x-api-key']
}));

// Setup Prisma Context Middleware
app.use('*', injectPrisma);

// Health Check
app.get('/', (c) => {
  return c.text('Energy Prediction API is running modularly on Cloudflare Pages.');
});

// Register Routers
app.route('/systems', systemRouter);
app.route('/system', systemRouter); // Alias if needed
app.route('/sensor', sensorRouter);
app.route('/daily-report', dailyReportRouter);

// Fallbacks
app.notFound((c) => {
  return c.json({ error: 'Endpoint not found' }, 404);
});

app.onError((err, c) => {
  console.error(`Unhandled Error: ${err.message}`, err.stack);
  return c.json({ error: 'Internal server error', details: err.message }, 500);
});

export default app;
