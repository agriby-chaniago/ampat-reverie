"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SupabaseContext = createContext(undefined);

export function SupabaseProvider({ children }) {
  const [supabase] = useState(() => {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      "https://jigzhqodcafuckmfdlbs.supabase.co";
    const supabaseAnonKey =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZ3pocW9kY2FmdWNrbWZkbGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNTQzMzksImV4cCI6MjA2NjgzMDMzOX0.4uHQ6TUo6uMo31HTyL8s98fzW1PDMKd9zBYjT4JQSbw";

    return createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: "sb-auth-token",
      },
    });
  });

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
}
