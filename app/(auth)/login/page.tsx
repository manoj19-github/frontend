import React, { FC, Fragment } from "react";
import LoginContainer from "./_components/LoginContainer";
import { getAllUserRoleDetails } from "@/serverActions/getAllUserRoleDetails.serverAction";
import { UserRoleTypes } from "@/_models/master.models";

type LoginPageProps = {};
const LoginPage: FC<LoginPageProps> = async (): Promise<JSX.Element> => {
  const userRoles: Array<UserRoleTypes> =
    (await getAllUserRoleDetails()) as Array<UserRoleTypes>;
  return (
    <Fragment>
      <LoginContainer userRoles={userRoles} />
    </Fragment>
  );
};

export default LoginPage;
