import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

// Create a simple in-memory user store instead of importing
// This avoids circular dependencies between API routes
const users = [];

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // First, check for the hard-coded admin user
        if (credentials.email === "admin@example.com" && credentials.password === "password") {
          return {
            id: "admin-1",
            name: "Admin User",
            email: "admin@example.com",
          };
        }

        // Then check registered users
        const user = users.find(user => user.email === credentials.email);
        if (!user) {
          return null;
        }

        // Verify password
        const passwordMatches = await compare(credentials.password, user.password);
        if (!passwordMatches) {
          return null;
        }

        // Return user without password
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      }
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});

// Export the users array for use in the register route
export { users };
export { handler as GET, handler as POST };