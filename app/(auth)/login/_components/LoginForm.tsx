"use client";
import * as Zod from "zod";
import { UserRoleTypes } from "@/_models/master.models";
import { useLoginDetails } from "@/_store/useLoginDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, Fragment, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "@/_formSchema/loginForm.formSchema";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { redirect, useRouter } from "next/navigation";
import { loginAction } from "@/serverActions/loginAction.serverAction";
import { signIn } from "next-auth/react";

type LoginFormProps = {
  userRoles: Array<UserRoleTypes>;
  userType: "STUDENT" | "TEACHER" | "ADMIN";
};
const LoginForm: FC<LoginFormProps> = ({
  userRoles,
  userType = "STUDENT",
}): JSX.Element => {
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const currUserRole = userRoles.find(
    (self) => self.role_name.toLowerCase() === userType.toLowerCase()
  );
  const { logoutUser, token, user, updateJWTToken, updateLoginUser } =
    useLoginDetails();
  console.log("user: ", user);
  console.log("token: ", token);

  const router = useRouter();
  const loginForm = useForm<Zod.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      role_id: currUserRole?._id ?? undefined,
      email_id: "",
      password: "",
    },
  });
  //    *************************   on Login form Submit Handler Action ******************//
  const onLoginSubmit = async (
    formState: Zod.infer<typeof loginFormSchema>
  ) => {
    try {
      if (formLoading) return;
      setFormLoading(true);
      await signIn("credentials", { ...formState, callbackUrl: "/" });

      // if (response.data.token) updateJWTToken(response.data.token);
      // if (response.data.user) updateLoginUser(response.data.user);
      toast.success("Logged in successfully");
      // router.refresh();
      // loginForm.reset();
    } catch (error: any) {
      console.log("error: ", error);
      toast.error(error.message);
    } finally {
      setFormLoading(false);
    }
  };
  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
        <FormField
          control={loginForm.control}
          name="email_id"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Fragment>
                  <Label htmlFor="Email">Email</Label>
                  <Input
                    type="email"
                    placeholder="john@domain.com"
                    disabled={formLoading}
                    className=" py-6 border-0 border-none text-[17px] px-3 bg-zinc-100/90 dark:bg-zinc-700/75 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200 "
                    {...field}
                  />
                </Fragment>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <div className="my-5"></div>
        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Fragment>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    placeholder="********"
                    type="password"
                    disabled={formLoading}
                    className=" py-6 border-0 border-none text-[17px] px-3 bg-zinc-100/90 dark:bg-zinc-700/75 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200 "
                    {...field}
                  />
                </Fragment>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <div className="flex items-center space-x-2 mt-5">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <button
            type="submit"
            disabled={formLoading}
            className="w-full py-2 rounded-md bg-[#553CDE] text-white text-xl mt-5 hover:bg-white hover:text-[#553CDE] border border-transparent hover:border-[#553CDE] transition-all ease-in duration-300 hover:bg-white hover:text-[#553CDE] "
          >
            {formLoading ? `Processing please wait ....` : `Submit`}
          </button>
        </div>
        <p className="text-center text-zinc-600 my-2">OR</p>
        <button
          disabled={formLoading}
          className="w-full py-2 rounded-md border hover:border-[#553CDE] transition-all ease-in duration-150  text-zinc-600 text-xl flex items-center justify-center gap-x-4 "
        >
          <p>Login with Google</p>
          <FcGoogle size={30} />
        </button>
        <div className="flex items-center justify-center text-zinc-600 mt-4 gap-x-2 group cursor-pointer">
          <p>{`Don't Have an account? `}</p>
          <p className="text-[#553CDE] group-hover:underline underline-offset-2">
            Registration
          </p>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
