import { loginFormSchema } from "@/_formSchema/loginForm.formSchema";
import { BASEURL, urlsConfig } from "@/environment";
import type { NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { signOut } from "@/auth";
const JWTSecret = process.env.NEXT_PUBLIC_JWT_SECRET;
const key = new TextEncoder().encode(JWTSecret);
// *********************  JWT Encrypt  Method  ********************************
export const JWTEncryptMethod = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day from now")
    .sign(key);
};
// ******************** JWT Decrypt method ***************************************//
export const JWTDecrypt = async (input: any) => {
  const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
  return payload;
};
export const logoutUser = () => {
  cookies().set("gurukul-access-token", "", { expires: new Date(0) });
  cookies().set("gurukul-refresh-token", "", { expires: new Date(0) });
  cookies().set("gurukul-login-user", "", { expires: new Date(0) });
};
export const getSession = async () => {
  const userSession = cookies().get("gurukul-login-user")?.value;
  if (!userSession) return null;
  return await JWTDecrypt(userSession);
};
export const getJWTAccessToken = async () => {
  const userJWTAccessToken = cookies().get("gurukul-access-token")?.value;
  if (!userJWTAccessToken) return null;
  return await JWTDecrypt(userJWTAccessToken);
};
export const getJWTRefreshToken = async () => {
  const userJWTRefreshToken = cookies().get("gurukul-refresh-token")?.value;
  if (!userJWTRefreshToken) return null;
  return await JWTDecrypt(userJWTRefreshToken);
};
export default {
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email_id: {},
        password: {},
        role_id: {},
      },
      async authorize(credentials) {
        const validatedFields = loginFormSchema.safeParse(credentials);
        if (!validatedFields.success) return null;
        const { email_id, password, role_id } = validatedFields.data;
        console.log(
          "validated fields ::::::::::::::::::::::: ",
          validatedFields.data
        );
        const response = await fetch(`${BASEURL}${urlsConfig.urls.userLogin}`, {
          method: "POST",
          body: JSON.stringify({ email_id, password, role_id }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) return null;
        const userDetails = await response.json();
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
        return userDetails;
      },
    }),
  ],
} satisfies NextAuthConfig;
