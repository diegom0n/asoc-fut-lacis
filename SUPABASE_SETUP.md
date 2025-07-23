# Supabase Connection Guide

## 🚀 Connect to Your Existing Supabase Project

### Step 1: Get Your Supabase Credentials
1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your existing project
3. Go to **Settings** → **API**
4. Copy these values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **Anon/Public Key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

### Step 2: Update Environment Variables
Replace the placeholder values in `.env.local` with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

### Step 3: Run Database Migration
1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Create a new query
4. Copy and paste the content from `supabase/migrations/create_initial_schema.sql`
5. Click **Run** to execute the migration

### Step 4: Verify Connection
After updating the environment variables and running the migration:
1. Restart your development server: `npm run dev`
2. Check the browser console for any connection errors
3. The app should now be connected to your Supabase database!

## 🔧 Database Schema Created

The migration will create these tables:
- **`clubs`** - All 12 football clubs with their data
- **`news`** - News articles and updates  
- **`matches`** - Match fixtures and results
- **`citations`** - Training citations and announcements

## 🛡️ Security Features
- **Row Level Security (RLS)** enabled on all tables
- **Public read access** for website visitors
- **Admin access** for authenticated users (when you add auth)

## 📊 Sample Data
The migration automatically populates the `clubs` table with all 12 clubs:
- América, C.D American, Carlos Muñoz, Cachavacha
- Cultural Renacer, Cultural Uruguay, FC La Burgueño
- Gremio, Gremio 2010, Juventud Brasil
- Real Lo Espejo, Unión Salas

## 🔄 Next Steps
1. **Test the connection** by checking if data loads properly
2. **Add authentication** if you want admin features
3. **Customize the data** through Supabase dashboard
4. **Set up real-time subscriptions** for live updates

## 🆘 Troubleshooting
- **Connection errors**: Double-check your URL and API key
- **CORS issues**: Make sure your domain is added to Supabase allowed origins
- **Migration errors**: Ensure you have the correct permissions in Supabase