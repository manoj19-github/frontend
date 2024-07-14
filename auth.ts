import NextAuth, { type DefaultSession } from "next-auth";
import nextAuthConfig from "./_config/nextAuth.config";
import { Currrole } from "@/_models/userLogin.models";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async session({ token, session, user }) {
      console.log("user: session ", user);
      console.log("session: session ", session);
      console.log("token:  saession", token);
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.curr_role && session.user)
        session.user.curr_role = token.curr_role as Currrole;
      return session;
    },
    async jwt({ token }) {
      console.log("token in jwt ::::::::::::: ", token);
      return token;
    },
  },
  session: { strategy: "jwt" },
  ...nextAuthConfig,
});
