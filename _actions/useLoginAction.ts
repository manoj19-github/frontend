import { loginFormSchema } from "@/_formSchema/loginForm.formSchema";
import useRestService from "./useRestService";
import * as Zod from "zod";
import { urlsConfig } from "@/environment";
import { AxiosResponse } from "axios";
type LoginActionType = (
  payload: Zod.infer<typeof loginFormSchema>
) => Promise<AxiosResponse<any, any>>;
const useLoginAction = (): LoginActionType => {
  const restClient = useRestService();
  const loginAction = async (payload: Zod.infer<typeof loginFormSchema>) => {
    return await restClient.post(urlsConfig.urls.userLogin, payload);
  };
  return loginAction;
};
export default useLoginAction;
