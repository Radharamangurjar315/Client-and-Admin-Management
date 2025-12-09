# Deployment Guide

## Backend Deployment (Render/Railway/Vercel)

### Environment Variables
Set the following environment variables in your deployment platform:
- `PORT` - Port number (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - production

### Deployment Steps for Render:
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `node server.js`
4. Add environment variables
5. Deploy

### Deployment Steps for Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the Backend directory
3. Follow the prompts
4. Add environment variables in Vercel dashboard

## Frontend Deployment (Vercel/Netlify)

### Environment Variables
Set the following environment variable:
- `VITE_API_URL` - Your backend API URL (e.g., https://your-backend.onrender.com)

### Deployment Steps for Vercel:
1. Connect your GitHub repository
2. Set framework preset: Vite
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variable: `VITE_API_URL`
6. Deploy

### Deployment Steps for Netlify:
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variable: `VITE_API_URL`
5. Deploy

## CORS Configuration

Make sure to update the CORS origin in `Backend/server.js` with your deployed frontend URL:

```javascript
app.use(cors({
  origin: [
    'https://your-frontend-domain.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true
}));
```

## Testing Connectivity

1. After deployment, test the backend health endpoint:
   ```
   GET https://your-backend-url.com/api/health
   ```

2. Check browser console for any CORS errors

3. Verify API calls are working from the frontend

## Common Issues

### Issue: CORS errors
**Solution**: Ensure the frontend URL is added to the CORS origin list in backend

### Issue: API calls failing
**Solution**: Verify `VITE_API_URL` is set correctly without trailing slash

### Issue: MongoDB connection errors
**Solution**: Check MongoDB connection string and whitelist your deployment platform's IP

### Issue: 404 on page refresh
**Solution**: The `vercel.json` and `_redirects` files handle SPA routing
