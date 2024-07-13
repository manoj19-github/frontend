import React, { FC, Fragment, ReactNode } from "react";
type AuthLayoutProps = {
  children: ReactNode;
};
const AuthLayout: FC<AuthLayoutProps> = ({ children }): JSX.Element => {
  return <Fragment>{children}</Fragment>;
};

export default AuthLayout;
