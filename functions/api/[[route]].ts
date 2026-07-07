import { handle } from 'hono/cloudflare-pages';
import app from '../../server/app';

// Fix for JSON.stringify with BigInt
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const onRequest = handle(app);
