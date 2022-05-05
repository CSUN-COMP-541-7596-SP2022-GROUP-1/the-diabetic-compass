# The Diabetic Compass

# Getting started

1. Install Docker onto your machine
2. Run `docker-compose up -d` to create these services in the background:
   - database service; connect via `postgres://admin:password@localhost:5432/tdc-dev`
   - adminer service; open on http://localhost:8080 and login with:
     - System: `PostgreSQL`
     - Server: `db`
     - Username: `admin`
     - Password: `password`
     - Database: `tdc-dev`
   - rambler service; applies any migrations found in `rambler/migrations`
   - ml service; use machine learning to predict whether or not you are at risk / have diabetes
3. Run `npm install` in `web` to install dependencies for `web` and run `npm run dev` to spin up web app locally on http://localhost:4200
4. Run `npm install` in `api` to install dependeices for `api` and run `npm run dev` to spin up api server locally on http://localhost:3000
