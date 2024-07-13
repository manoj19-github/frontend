import React, { FC } from "react";
import LoginImage from "../../../../_assets/book-monitor-low-poly-wireframe-600nw-1364073284.png";
import Image from "next/image";
import LogoText from "@/app/_components/LogoText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoleTypes } from "@/_models/master.models";
import LoginForm from "./LoginForm";

type LoginContainerProps = {
  userRoles: Array<UserRoleTypes>;
};
const LoginContainer: FC<LoginContainerProps> = ({
  userRoles,
}): JSX.Element => {
  return (
    <div className="w-full lg:w-[90%] xl:w-[85%] px-2 lg:px-0 mx-auto rounded-md overflow-hidden lg:border h-auto  lg:h-[90vh] mt-[5vh] flex items-center justify-between">
      <div className="w-full lg:w-1/2 h-full lg:px-5 px-1">
        <div className="flex items-center justify-center">
          <LogoText />
        </div>
        <Card className="">
          <CardHeader>
            <CardTitle className="text-center">Login to Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-full ">
              <LoginForm userRoles={userRoles} userType={"STUDENT"} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/2 h-full relative hidden lg:flex ">
        <Image src={LoginImage} alt="loginimage" fill objectFit="fill" />
      </div>
    </div>
  );
};

export default LoginContainer;
