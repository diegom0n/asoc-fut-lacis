# Deployment Guide

## 🚀 Deploy to Netlify with GitHub Integration

### Step 1: Connect GitHub Repository
1. **Push your code** to GitHub (see GitHub connection guide)
2. Go to [Netlify Dashboard](https://netlify.com)
3. Click **"New site from Git"**
4. Choose **GitHub** as your Git provider
5. Select your repository

### Step 2: Configure Build Settings
Set these build settings in Netlify:
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: `18` (in Environment variables)

### Step 3: Add Environment Variables
In Netlify dashboard → Site settings → Environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

### Step 4: Deploy
1. Click **"Deploy site"**
2. Netlify will automatically build and deploy your site
3. You'll get a live URL like: `https://your-site-name.netlify.app`

## 🔄 Automatic Deployments
Once connected:
- **Every push** to your main branch will trigger a new deployment
- **Pull requests** can create preview deployments
- **Build logs** help you debug any issues

## 🌐 Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

## 📊 Current Deployment
Your current Bolt deployment: https://creative-pavlova-320209.netlify.app
You can claim this deployment or create a new one with GitHub integration.