import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Currrole } from "./_models/userLogin.models";
export type ExtendedUser = DefaultSession["user"] & {
  curr_role: Currrole;
  _id: string;
  user_name: string;
  role_id: string;
  email_id: string;
  is_email_verified: boolean;
  avatar: string;
  reset_password_verification?: any;
  email_verification?: any;
  reset_email_verification?: any;
  is_registered: boolean;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
  interface User {
    curr_role?: Currrole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    curr_role?: Currrole;
  }
}
