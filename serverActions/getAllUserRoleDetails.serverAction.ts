import { urlsConfig } from "@/environment";
import { serverAction } from ".";

export const getAllUserRoleDetails = () => {
  return serverAction({
    url: `${urlsConfig.urls.getAllUserRole}`,
    type: "ssg",
  });
};
