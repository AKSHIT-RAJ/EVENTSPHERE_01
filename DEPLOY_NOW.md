# EventSphere - Deploy Now! 🚀

Your project is **ready to deploy**. Follow these steps to get EventSphere online:

---

## 📱 Frontend Deployment (Vercel) - **DONE!**

Your frontend is **already configured for automatic deployment** to Vercel.

### Next Steps:
1. Open Vercel Dashboard: https://vercel.com/dashboard
2. If not connected, import your repository: `AKSHIT-RAJ/EVENTSPHERE_01`
3. Vercel will automatically detect and deploy the frontend
4. You'll get a URL like: `https://eventsphere-*.vercel.app`

**That's it for the frontend!** Every push to `main` auto-deploys.

---

## 🔧 Backend Deployment - Choose One Option

### 🚄 **EASIEST: Railway** (Recommended)

Railway is the fastest way to deploy your Spring Boot backend:

1. Go to https://railway.app
2. Click "Start a New Project"
3. Select "Deploy from GitHub"
4. Choose `AKSHIT-RAJ/EVENTSPHERE_01`
5. Railway automatically detects `pom.xml` and deploys!
6. Get your backend URL (looks like: `https://eventsphere-prod-up.railway.app`)

**Cost**: Free trial, then $5/month  
**Time**: ~2 minutes

---

### 🎨 **ALTERNATIVE: Render**

1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Select Repository: `AKSHIT-RAJ/EVENTSPHERE_01`
5. Runtime: **Java**
6. Build Command: `mvn clean install`
7. Start Command: `java -jar target/*.jar`
8. Deploy!

**Cost**: $7/month  
**Time**: ~3 minutes

---

### ☁️ **ALTERNATIVE: Azure App Service**

1. Go to https://portal.azure.com
2. Create new Resource → App Service
3. Select Java runtime
4. Deploy via ZIP upload or GitHub integration
5. Configure application settings

**Cost**: Free tier or pay-as-you-go  
**Time**: ~5 minutes

---

## 🔗 Connecting Frontend & Backend

After you have both URLs:

### In Vercel Dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add new variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-url/api` (replace with actual URL)
   - Example: `https://eventsphere-prod-up.railway.app/api`

3. Click Save
4. Redeploy frontend (or push new commit)

---

## ✅ Testing Your Deployment

1. **Test Frontend**:
   - Visit `https://your-vercel-url.vercel.app`
   - You should see the EventSphere homepage

2. **Test Backend**:
   - Visit `https://your-backend-url/api/events`
   - You should get JSON with event data

3. **Test Connection**:
   - Click "Events" in the frontend
   - Events should load from your backend
   - Try login/booking flow

---

## 📊 What Was Set Up For You

✅ **Vercel Configuration** (`vercel.json`)
- Automatic build from `/frontend`
- Automatic deployment on push to main
- Environment variables support

✅ **Docker Support**
- Backend Dockerfile for any container platform
- Frontend Dockerfile
- docker-compose.yml for local full-stack development

✅ **Environment Variables**
- `.env.example` templates created
- `VITE_API_URL` configured for production

✅ **API Configuration**
- Frontend already configured to use environment variables
- Backend ready for Railway/Render/Azure deployment

---

## 🐛 Troubleshooting

### "Frontend won't connect to backend"
- Check `VITE_API_URL` is set correctly in Vercel
- Add `/api` to the end of backend URL
- Wait 2-3 minutes after updating env vars (Vercel redeploy)

### "Backend deployment failed"
- Railway: Check build logs in dashboard
- Render: Scroll down to view deploy logs
- Usually due to missing environment or Java version issue

### "CORS errors in browser"
- This is expected if CORS not configured
- The provided Spring Boot app has CORS enabled by default
- If issues persist, check `CorsConfig.java` in backend

### "Port already in use locally"
- Frontend: Kill process on port 5173 or change in `vite.config.js`
- Backend: Kill process on port 8080 or set `PORT=8081`

---

## 📚 Complete Guides

- **SETUP.md** - Detailed step-by-step guide (read this if stuck)
- **DEPLOYMENT.md** - Technical deployment details
- **DOCKERFILE** - For local Docker testing

---

## 🎯 Quick Checklist

- [ ] Frontend URL received from Vercel
- [ ] Backend deployed to Railway/Render/Azure
- [ ] Backend URL noted
- [ ] `VITE_API_URL` set in Vercel
- [ ] Frontend redeployed after setting env var
- [ ] Tested Events page loads data
- [ ] Tested login functionality
- [ ] Tested booking flow

---

## 🎉 Done!

Your EventSphere is now live! Share your URLs:

- **Frontend**: `https://your-vercel-domain.vercel.app`
- **Backend**: `https://your-railway-backend.up.railway.app`

---

## 💡 Next Steps

After deployment, you might want to:

1. **Add a Custom Domain** (Vercel Settings → Domains)
2. **Monitor Performance** (Vercel Analytics tab)
3. **Set Up Email Notifications** (Vercel Settings → Alerts)
4. **Database Integration** (Backend will need a database later)
5. **User Authentication** (Currently basic, can enhance later)

---

**Need Help?**
- Check SETUP.md for detailed troubleshooting
- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs

**Questions?** See the complete guides in this repository!
