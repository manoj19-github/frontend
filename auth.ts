import NextAuth, { type DefaultSession } from "next-auth";
import nextAuthConfig, { JWTEncryptMethod } from "./_config/nextAuth.config";
import { Currrole } from "@/_models/userLogin.models";
import { BASEURL, urlsConfig } from "./environment";
import { cookies } from "next/headers";

const applyToken = async (token: any) => {
  try {
    const { email, sub } = token;
    const response = await fetch(
      `${BASEURL}${urlsConfig.urls.userLoginByGoogle}`,
      {
        method: "POST",
        body: JSON.stringify({ email_id: email, soToken: sub }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) return null;
    const userDetails = await response.json();
    console.log("userDetails: ", userDetails);
    const datetime = Date.now() + 1000 * 60 * 60 * 24;
    const expires = new Date(datetime);
    const userSession = await JWTEncryptMethod({
      user: userDetails.user,
      expires,
    });
    const encodedAccessToken = await JWTEncryptMethod({
      accessToken: userDetails.token.accessToken,
      expires,
    });
    const encodedRefreshToken = await JWTEncryptMethod({
      refreshToken: userDetails.token.refreshToken,
      expires,
    });

    cookies().set("gurukul-access-token", encodedAccessToken, {
      expires,
      httpOnly: true,
    });
    cookies().set("gurukul-refresh-token", encodedRefreshToken, {
      expires,
      httpOnly: true,
    });
    cookies().set("gurukul-login-user", userSession, {
      expires,
      httpOnly: true,
    });
  } catch (error: any) {}
};
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
      await applyToken(token);
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
