"use server";
import * as zod from "zod";
import { loginFormSchema } from "@/_formSchema/loginForm.formSchema";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/environment";

export const loginAction = async ({
  formState,
  finallyCallback,
}: {
  formState: any;
  finallyCallback?: any;
}) => {
  try {
    const validatedFields = loginFormSchema.safeParse(formState);
    if (!validatedFields.success)
      return { message: `something went wrong`, status: false };

    const response = await signIn("credentials", {
      ...validatedFields.data,
      redirectTo: "/success",
    });
    console.log("response: ", response);
    console.log("formstate ?> ", formState);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: `Invalid credentials`, status: false };
        default:
          return { message: `something went wrong`, status: false };
      }
    }
    return { message: `something went wrong`, status: false };
  } finally {
    finallyCallback?.();
  }
};
