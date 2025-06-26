import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// Use this in server components to get the session
export async function getSession() {
  return await getServerSession();
}

// Use this in server components to protect routes
export async function requireAuth() {
  const session = await getSession();
  
  if (!session) {
    redirect("/auth/signin");
  }
  
  return session;
}

// Check if user is authenticated (for server components)
export async function isAuthenticated() {
  const session = await getSession();
  return !!session;
}