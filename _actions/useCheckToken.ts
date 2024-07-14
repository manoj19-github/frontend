import { loginFormSchema } from "@/_formSchema/loginForm.formSchema";
import useRestService from "./useRestService";
import * as Zod from "zod";
import { urlsConfig } from "@/environment";
import { AxiosResponse } from "axios";
type checkTokenActionType = () => Promise<AxiosResponse<any, any>>;
const useCheckToken = (): checkTokenActionType => {
  const restClient = useRestService();
  const checkTokenAction = async () => {
    return await restClient.get(urlsConfig.urls.checkToken);
  };
  return checkTokenAction;
};
export default useCheckToken;
