import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { supabaseAdmin } from "@/lib/supabase";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // First, check for the hard-coded admin user
        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "password"
        ) {
          return {
            id: "admin-1",
            name: "Admin User",
            email: "admin@example.com",
          };
        }

        try {
          // Find user in Supabase
          const { data: user, error } = await supabaseAdmin
            .from("users")
            .select("*")
            .eq("email", credentials.email)
            .single();

          if (error || !user) {
            console.log(`User not found: ${credentials.email}`);
            return null;
          }

          // Verify password
          const passwordMatches = await compare(
            credentials.password,
            user.password
          );
          if (!passwordMatches) {
            console.log(`Password incorrect for: ${credentials.email}`);
            return null;
          }

          // Return user without password
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Handle sign in from OAuth providers
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          // Check if user exists in our database
          const { data: existingUser } = await supabaseAdmin
            .from("users")
            .select("id")
            .eq("email", user.email)
            .maybeSingle();

          // If not, create a new user
          if (!existingUser) {
            const { data: newUser, error } = await supabaseAdmin
              .from("users")
              .insert({
                email: user.email,
                name: user.name,
                // No password needed for OAuth sign-ins
              })
              .select("id")
              .single();

            if (error) {
              console.error("Error creating user from Google sign in:", error);
              return false;
            }

            // Update user id to match our database
            user.id = newUser.id;
          } else {
            // Update user id to match our database
            user.id = existingUser.id;
          }
        } catch (error) {
          console.error("Error in OAuth sign in:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      // Include user ID in the token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Make user ID available in the session
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
