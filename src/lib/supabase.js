import { createClient } from '@supabase/supabase-js';

console.log('Initializing Supabase clients');
console.log('SUPABASE URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Has service role key:', Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY));

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: { persistSession: false }
  }
);

console.log('Supabase clients initialized');
