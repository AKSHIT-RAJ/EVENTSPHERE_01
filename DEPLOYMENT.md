# EventSphere Deployment Guide

## Project Structure

- **frontend/** - React + Vite application
- **backend/** - Spring Boot REST API (Java)

## Frontend Deployment (Vercel)

The frontend is automatically configured for Vercel deployment through `vercel.json`.

### Deploy Steps:
1. Push changes to the `main` branch
2. Vercel automatically deploys the frontend to production
3. The `vercel.json` file handles the build and output directories

## Backend Deployment

The Spring Boot backend requires separate hosting. Options include:

### Option 1: Deploy to Railway, Render, or Heroku
```bash
cd backend
# Build the JAR
mvn clean package
```

### Option 2: Deploy to Azure App Service
```bash
cd backend
mvn clean package
# Use Azure CLI or Azure Portal to deploy
```

### Environment Configuration

Update the frontend API base URL in `frontend/src/api.js` to point to your backend:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
```

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
mvn spring-boot:run
```

The frontend will be available at `http://localhost:5173`
The backend will be available at `http://localhost:8080`

## Production Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to hosting service
- [ ] Backend API URL configured in frontend environment
- [ ] CORS properly configured in Spring Boot backend
- [ ] Database configured (if applicable)
- [ ] Environment variables set in Vercel dashboard
