# 🚀 Supabase Connection Guide - Step by Step

## Overview
This guide will help you connect your AFC La Cisterna website to Supabase database. Follow these steps in order to get everything working.

---

## 📋 Prerequisites
- A Supabase account (free tier is fine)
- Your project files ready
- Basic understanding of environment variables

---

## 🔧 Step 1: Create Supabase Project

1. **Go to Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Sign in or create an account

2. **Create New Project**
   - Click "New Project"
   - Choose your organization
   - Fill in project details:
     - **Project Name**: `afc-la-cisterna` (or your preferred name)
     - **Database Password**: Create a strong password (save this!)
     - **Region**: Choose closest to your location
   - Click "Create new project"
   - Wait 2-3 minutes for setup to complete

---

## 🔑 Step 2: Get Your Credentials

1. **Navigate to Project Settings**
   - In your Supabase dashboard, go to **Settings** → **API**

2. **Copy These Values** (you'll need them later):
   ```
   Project URL: https://YOUR-PROJECT-ID.supabase.co
   Anon/Public Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   Service Role Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **Save Credentials Securely**
   - Keep these in a safe place
   - Never share the Service Role Key publicly

---

## 🗄️ Step 3: Set Up Database Schema

1. **Go to SQL Editor**
   - In Supabase dashboard: **SQL Editor** → **New Query**

2. **Run the Migration**
   - Copy the entire content from `supabase/migrations/20250723143458_navy_desert.sql`
   - Paste it in the SQL Editor
   - Click **Run** button
   - Wait for "Success" message

3. **Verify Tables Created**
   - Go to **Table Editor**
   - You should see these tables:
     - `clubs` (with 12 clubs already inserted)
     - `news`
     - `matches` 
     - `citations`

---

## 🔐 Step 4: Configure Environment Variables

1. **Create Environment File**
   - In your project root, create `.env.local`
   - Copy from `.env.example` if it exists

2. **Add Your Credentials**
   ```env
   # Replace with YOUR actual values from Step 2
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-ID.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **Important Notes**
   - Replace `YOUR-PROJECT-ID` with your actual project ID
   - Replace the anon key with your actual anon key
   - Never commit `.env.local` to git
   - Make sure `.env.local` is in your `.gitignore`

---

## 🧪 Step 5: Test the Connection

1. **Restart Your Development Server**
   ```bash
   npm run dev
   ```

2. **Check Browser Console**
   - Open your website
   - Press F12 → Console tab
   - Look for any Supabase connection errors

3. **Test Data Loading**
   - Go to `/clubes` page
   - You should see the 12 clubs loaded from database
   - If you see placeholder data, connection isn't working

---

## 📝 Step 6: Enable Admin Forms (Optional)

1. **Set Up Authentication** (for admin panel security)
   - In Supabase: **Authentication** → **Settings**
   - Configure email/password authentication
   - Add your admin email

2. **Test Admin Panel**
   - Go to `/admin` in your website
   - Try creating a test match or news article
   - Check if data appears in Supabase Table Editor

---

## 🔒 Step 7: Security Configuration

1. **Row Level Security (RLS)**
   - Already enabled by the migration
   - Public can read all data
   - Only authenticated users can modify data

2. **API Settings**
   - In Supabase: **Settings** → **API**
   - Add your domain to "Site URL" when deploying
   - For local development: `http://localhost:3000`

---

## 🚀 Step 8: Deploy Configuration

### For Netlify:
1. **Add Environment Variables**
   - In Netlify dashboard: **Site settings** → **Environment variables**
   - Add the same variables from your `.env.local`:
     ```
     NEXT_PUBLIC_SUPABASE_URL = https://YOUR-PROJECT-ID.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key-here
     ```

### For Vercel:
1. **Add Environment Variables**
   - In Vercel dashboard: **Settings** → **Environment Variables**
   - Add the same variables

---

## 🔍 Troubleshooting

### ❌ "Failed to fetch" errors
- Check if your environment variables are correct
- Verify Supabase project is active (not paused)
- Check browser network tab for 401/403 errors

### ❌ No data showing
- Verify the migration ran successfully
- Check Table Editor in Supabase for data
- Look for JavaScript console errors

### ❌ CORS errors
- Add your domain to Supabase allowed origins
- For local development, add `http://localhost:3000`

### ❌ RLS policy errors
- Check if RLS policies are properly set
- Verify you're using the correct API key (anon key for public access)

---

## 📚 Quick Reference

### Your Credentials Template:
```env
# Replace these with YOUR actual values
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Useful Supabase URLs:
- **Dashboard**: https://supabase.com/dashboard
- **Documentation**: https://supabase.com/docs
- **SQL Reference**: https://supabase.com/docs/guides/database

---

## ✅ Success Checklist

- [ ] Supabase project created
- [ ] Database migration completed successfully
- [ ] Environment variables configured
- [ ] Website loads without errors
- [ ] Club data displays correctly
- [ ] Admin forms work (if implemented)
- [ ] Deployment environment variables set

---

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all environment variables are correct
3. Ensure Supabase project is active
4. Check the troubleshooting section above
5. Review Supabase documentation

---

**🎉 Once completed, your website will be fully connected to Supabase and ready for production use!**