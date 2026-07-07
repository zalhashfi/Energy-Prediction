import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes';

// Fix for JSON.stringify with BigInt
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import logger from './utils/logger';

const app = express();
const port = process.env.PORT || 4000;

app.use(helmet());
app.use(cors({ 
  origin: process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
}));
app.use(express.json({ limit: '100kb' }));

// Use morgan to log requests to winston
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Energy Prediction API is running.');
});

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`Server is running on port ${port} (0.0.0.0)`);
});

// Global error handler to prevent stack trace leaks
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(`Unhandled Error: ${err.message}`, { stack: err.stack });
  res.status(500).json({ 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { details: err.message })
  });
});
