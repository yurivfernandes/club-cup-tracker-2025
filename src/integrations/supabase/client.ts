// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://akolcmlksqmjqafitoqw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrb2xjbWxrc3FtanFhZml0b3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5Mzc4NzAsImV4cCI6MjA2NTUxMzg3MH0.xr_YIIFcUczbHPjrdLBFq14XnV45g_HVtKc0PP5K1c0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);