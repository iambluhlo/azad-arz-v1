# azad-arz-bluhlo

This repository is organized as a small monorepo that contains both the frontend React app and a lightweight Node backend for authentication.

## Monorepo layout
- Frontend (Vite + React): root workspace
- Backend (Node HTTP server): `apps/backend`

## Backend authentication
The backend uses a local SQLite database by default, so you can run it without creating a `.env` file. If you want to point to a different database, set the `DATABASE_URL` environment variable before starting the server.

Before starting the backend, create the SQLite database and seed the demo user with:

```bash
pnpm --filter backend db:setup
```

Start the backend locally with:

```bash
npm run backend:dev
```

The server exposes `/api/auth/login`, `/api/auth/verify-2fa`, and `/api/auth/me` endpoints. A demo user is seeded for quick testing:

- Email: `demo@example.com`
- Password: `password123`

Two-factor codes are generated on login; in non-production environments the generated code is included in the response for easier testing.
