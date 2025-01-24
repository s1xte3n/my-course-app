// lib/supabase.js

import { createClient } from '@supabase/supabase-js';

// Your Supabase URL and public API key
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
