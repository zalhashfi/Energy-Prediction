# Energy Prediction System (SWRO Desalination)

A full-stack web application designed to predict energy consumption for Seawater Reverse Osmosis (SWRO) desalination systems. This platform provides real-time monitoring, daily reports, and sensor data integration, all served from a unified Cloudflare Pages deployment.

## Key Features

- **Energy Prediction**: Calculates estimated Power (kW) and Specific Energy Consumption (SEC) for SWRO systems.
- **Sensor Data Management**: Records and visualizes real-time metrics (pressure, flow, TDS) from high-pressure pumps and RO membranes.
- **Daily Reporting**: Generates cumulative daily reports for water production and energy usage.
- **Unified Deployment**: A single monolithic repository hosting both the React frontend and Hono backend on Cloudflare Pages.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Backend API**: Hono (running on Cloudflare Pages Functions)
- **Database**: Cloudflare D1 (Serverless SQLite)
- **ORM**: Prisma (with `@prisma/adapter-d1`)
- **Deployment**: Cloudflare Pages

## Prerequisites

- Node.js 18 or higher (20+ recommended)
- `npm` or `pnpm`
- A Cloudflare account (for D1 Database and Pages deployment)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed globally or locally

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Energy-Prediction
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Setup (Local)

To run the application locally, you need a local SQLite instance of the D1 database.
First, run Prisma migrations to build your local schema:

```bash
npx wrangler d1 migrations apply energy_prediction_db --local
```

*(Note: We use Wrangler to apply migrations locally instead of `prisma db push` to simulate the D1 environment accurately).*

### 4. Start Development Server

Run both the frontend (Vite) and backend (Wrangler/Hono) simultaneously:

```bash
npm run dev
```

- **Frontend** will be available at `http://localhost:5173`
- **Backend API** will be mapped locally under `/api` via Wrangler.

## Architecture

### Directory Structure

```text
Energy-Prediction/
├── functions/
│   └── api/
│       └── [[route]].ts    # Cloudflare Pages Function entrypoint (Hono App)
├── server/                 # Backend Business Logic
│   ├── app.ts              # Hono application setup & routing
│   ├── middlewares/        # Auth, Prisma adapter injection
│   ├── routes/             # API Endpoint handlers (system, sensor, daily-report)
│   └── schemas/            # Zod validation schemas
├── prisma/                 
│   ├── schema.prisma       # Database models
│   └── migrations/         # SQL migration history
├── src/                    # Frontend (React + Vite)
│   ├── components/         # UI Components (shadcn, charts, forms)
│   ├── styles/             # Tailwind & CSS
│   ├── App.tsx             # Main React Application
│   └── main.tsx            # React Entrypoint
├── public/                 # Static assets
└── wrangler.toml           # Cloudflare deployment & D1 binding configuration
```

### Request Lifecycle

1. A request hits the Cloudflare Pages domain (e.g., `https://energy-prediction.biru-langit.com/api/sensor`).
2. Cloudflare intercepts the `/api/*` path and routes it to `functions/api/[[route]].ts`.
3. The Hono router (`server/app.ts`) takes over, applies middlewares (CORS, Prisma Adapter).
4. The specific route handler executes the business logic, interacting with the D1 Database via Prisma.
5. The response is returned as JSON.
6. For non-`/api` routes, Cloudflare Pages serves the static React frontend built by Vite.

## Environment Variables

| Variable | Description | Where it is used |
| -------- | ----------- | ---------------- |
| `JWT_SECRET` | Secret key for JWT authentication | Cloudflare Pages (set via Dashboard or `wrangler secret put`) |

*Database configuration is handled entirely via `wrangler.toml` bindings, not standard environment variables.*

## Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Starts the local development environment using Vite and Wrangler |
| `npm run build` | Builds the React frontend for production (`tsc && vite build`) |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build locally using Wrangler Pages |
| `npm run db:generate` | Generates the Prisma Client based on `schema.prisma` |

## Deployment

This project is deployed to **Cloudflare Pages** utilizing **Cloudflare D1** as the database.

### 1. Create the D1 Database (First Time Only)

```bash
npx wrangler d1 create energy_prediction_db
```
*Copy the `database_id` output from this command.*

### 2. Update `wrangler.toml`

Paste the `database_id` into your `wrangler.toml` file:
```toml
[[d1_databases]]
binding = "energy_prediction_db"
database_name = "energy_prediction_db"
database_id = "<YOUR_DATABASE_ID>"
```

### 3. Apply Migrations to Production

```bash
npx wrangler d1 migrations apply energy_prediction_db --remote
```

### 4. Deploy to Cloudflare Pages

```bash
npx wrangler pages deploy
```

Once complete, Wrangler will provide your production URL. 
(Optional: You can configure a Custom Domain like `energy-prediction.biru-langit.com` in the Cloudflare Dashboard via the Pages Custom Domains tab).

## Troubleshooting

### Deployment Fails with "Invalid database UUID"
**Error:** `Error 8000022: Invalid database UUID`
**Solution:** You forgot to replace the placeholder `database_id` in `wrangler.toml` with the actual UUID generated from `wrangler d1 create`.

### Prisma Client Not Found
**Error:** `Cannot find module '@prisma/client'`
**Solution:** Run `npm run db:generate` to rebuild the Prisma client.

### API Routes Returning 404
**Error:** Fetching `/api/system` returns a Cloudflare HTML 404 page.
**Solution:** Ensure that your Hono app is correctly exported in `functions/api/[[route]].ts` using `handle(app)` and that the path matches the route structure.
