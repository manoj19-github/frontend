"use client";
import React, { FC } from "react";

type ErrorBoundaryProps = {
  error: Error;
};
const ErrorBoundary: FC<ErrorBoundaryProps> = ({ error }) => {
  return <div>{error.message}</div>;
};

export default ErrorBoundary;
