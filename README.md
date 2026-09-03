# TeamFlow Command Center (SaaS)

TeamFlow is a comprehensive workforce and project management SaaS application. It features a complete Node.js backend (with PostgreSQL) and a React/TypeScript frontend.

## Installation
1. Clone the repository
2. Install frontend dependencies: `npm install`
3. Install backend dependencies: `cd backend && npm install`

## Building
To build the frontend for production, run:
`npm run build`

## Running Locally
1. Start the backend server: `cd backend && node index.js` (runs on port 5000)
2. Start the frontend: `npm run dev` (runs on port 5173)

## Environment Variables
Copy `backend/example.env` to `backend/.env` and update the PostgreSQL connection string.

