# EventSphere - Complete Setup & Deployment Guide

## Quick Overview

EventSphere is a full-stack event ticket booking platform with:
- **Frontend**: React + Vite (deployed on Vercel)
- **Backend**: Spring Boot REST API (requires separate hosting)

---

## 🚀 Frontend Deployment (Vercel)

### Automatic Deployment
Your project is already configured for automatic Vercel deployment:

1. **Visit Vercel Dashboard**: https://vercel.com/dashboard
2. **Connect Your Repository**: If not already connected, import your GitHub repository
3. **Configure Environment Variables** (optional but recommended):
   - Go to **Settings > Environment Variables**
   - Add `VITE_API_URL` pointing to your backend API
   - Example: `https://your-backend.onrender.com/api`

4. **Deployment**:
   - Push to `main` branch → Automatic deployment
   - Push to other branches → Preview deployments
   - The `vercel.json` file handles all build configuration

### Environment Variables for Production

In your Vercel dashboard, set:
```
VITE_API_URL=https://your-deployed-backend.com/api
```

---

## 🔧 Backend Deployment Options

The Spring Boot backend requires external hosting. Here are recommended options:

### Option 1: **Railway** (Recommended - Easiest)
1. Go to https://railway.app
2. Create a new project → "Deploy from GitHub"
3. Select your repository
4. Railway automatically detects `pom.xml` and builds with Maven
5. Get your backend URL from Railway dashboard
6. Update `VITE_API_URL` in Vercel with this URL

**Railway Cost**: Free tier available, $5/month after

### Option 2: **Render**
1. Go to https://render.com
2. Create New → Web Service
3. Connect GitHub repository
4. Select Java/Maven build environment
5. Configure environment and deploy

**Render Cost**: $7/month minimum

### Option 3: **Azure App Service**
1. Create Azure account (free credits available)
2. Create Java App Service
3. Deploy via Maven or GitHub Actions
4. Get your service URL

### Option 4: **Heroku** (Note: Free tier discontinued)
- Can still deploy using paid plans
- Similar setup to Railway

---

## 📋 Step-by-Step Deployment

### 1. Deploy Frontend to Vercel

```bash
# Your code is already connected to Vercel
# Just ensure vercel.json is in your root directory (✓ Already done)
git push origin main
# Vercel automatically deploys!
```

### 2. Deploy Backend to Railway (Example)

```bash
# In your railway.app dashboard:
# 1. Create new project
# 2. Select "Deploy from GitHub"
# 3. Connect to AKSHIT-RAJ/EVENTSPHERE_01
# 4. Railway detects backend/pom.xml automatically
# 5. Set environment port (Railway uses $PORT environment variable)
```

**Backend Configuration** (Spring Boot should use PORT env var):

Edit `backend/src/main/resources/application.properties`:
```properties
server.port=${PORT:8080}
```

### 3. Configure Frontend API URL

After backend deployment, update Vercel environment:

```bash
# In Vercel Dashboard:
# Settings > Environment Variables
# Add: VITE_API_URL = https://your-railway-backend.up.railway.app/api
```

The frontend will automatically use this URL in production.

---

## 🔌 CORS Configuration

Your Spring Boot backend has CORS enabled (see `backend/src/main/java/com/eventsphere/backend/service/CorsConfig.java`).

For production, update CORS to allow your Vercel domain:
```java
// In CorsConfig.java
"https://your-domain.vercel.app"
```

---

## 🏗️ Project Structure

```
EVENTSPHERE_01/
├── frontend/                    # React + Vite app
│   ├── src/
│   │   ├── pages/              # Login, Events, Booking pages
│   │   ├── components/         # Reusable components
│   │   ├── context/            # State management
│   │   ├── api.js              # API configuration
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
│
├── backend/                     # Spring Boot REST API
│   ├── src/
│   │   ├── controller/         # API endpoints
│   │   ├── service/            # Business logic
│   │   ├── model/              # Data models
│   │   └── exception/          # Error handling
│   └── pom.xml
│
├── vercel.json                 # Vercel configuration
├── DEPLOYMENT.md               # Detailed deployment guide
├── SETUP.md                    # This file
└── README.md
```

---

## 🔍 API Endpoints

Base URL: `${VITE_API_URL}` (e.g., `https://backend.onrender.com/api`)

### Authentication
- `POST /auth/login` - Login with email/password

### Events
- `GET /events` - List all events
- `GET /events/{id}` - Get event details

### Bookings
- `POST /bookings` - Create new booking
- `GET /bookings?email={email}` - Get bookings for user

---

## 🧪 Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
# Runs on http://localhost:8080
```

Both will work together automatically during local development.

---

## 📊 Monitoring & Debugging

### Vercel
- View deployment logs: Vercel Dashboard → Deployments → View Details
- Check build errors: Build section shows detailed logs
- Monitor performance: Analytics tab

### Backend (Railway/Render)
- View logs in provider dashboard
- Use `mvn clean package` locally to test build process

---

## ✅ Production Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway/Render/Azure
- [ ] `VITE_API_URL` environment variable set in Vercel
- [ ] CORS configured in Spring Boot for production domain
- [ ] Test login functionality
- [ ] Test event listing
- [ ] Test booking flow end-to-end
- [ ] Check performance in Vercel Analytics
- [ ] Set up monitoring/alerts if needed

---

## 🆘 Common Issues & Fixes

### "Cannot connect to backend"
- Check `VITE_API_URL` is set in Vercel
- Ensure backend is running and accessible
- Check CORS headers in browser DevTools
- Verify backend URL doesn't have trailing slash

### "Build fails on Vercel"
- Check `vercel.json` exists in root
- Ensure `frontend/package.json` has build script
- Check for missing dependencies: `npm install`

### "Backend won't start on Railway"
- Check `PORT` environment variable is used
- Verify Java 21 is available
- Check `pom.xml` has correct dependencies

### "Port already in use locally"
- Frontend: Change in `frontend/vite.config.js`
- Backend: Set `PORT=8081` environment variable

---

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
- [Spring Boot Docs](https://spring.io/projects/spring-boot)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)

---

**Questions?** Check the individual service documentation or see DEPLOYMENT.md for more details.
