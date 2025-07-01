import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://jigzhqodcafuckmfdlbs.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZ3pocW9kY2FmdWNrbWZkbGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNTQzMzksImV4cCI6MjA2NjgzMDMzOX0.4uHQ6TUo6uMo31HTyL8s98fzW1PDMKd9zBYjT4JQSbw";
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZ3pocW9kY2FmdWNrbWZkbGJzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTI1NDMzOSwiZXhwIjoyMDY2ODMwMzM5fQ.BqGZGwPXuzFIGhK4fgXkBaGDrVBRxXp_8sSHuE9qiDU";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

// Legacy export for backward compatibility - DEPRECATED: use useSupabase() hook instead
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side admin instance - only for API routes
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
});
