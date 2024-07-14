import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

import { useLoginDetails } from "@/_store/useLoginDetails";
import { JWTTokenInterface } from "@/_models/userLogin.models";
import { BASEURL } from "@/environment";
import {
  getJWTAccessToken,
  getJWTRefreshToken,
  JWTEncryptMethod,
  logoutUser,
} from "@/_config/nextAuth.config";
import useSetCookie from "@/app/_utils/useSetCookie";

// import {
//   ApiCallErrorAction,
//   SetTokenAction,
//   TokenExpaired,
// } from "../redux/actions/apiStatusActions";
// import { LogoutSuccessAction } from "../redux/actions/userAction";

declare global {
  var restClient: RestServiceInterface | undefined;
}
interface RestServiceInterface {
  get(endpoint: string): Promise<AxiosResponse<any, any>>;
  post(endpoint: string, payload: any): Promise<AxiosResponse<any, any>>;
  put(endpoint: string, payload: any): Promise<AxiosResponse<any, any>>;
  delete(endpoint: string, payload?: any): Promise<AxiosResponse<any, any>>;
}

const useRestService = (): RestServiceInterface => {
  const setCookie = useSetCookie();

  class RestService implements RestServiceInterface {
    private client: AxiosInstance;
    constructor(config: AxiosRequestConfig) {
      this.client = axios.create(config);
      this.client.interceptors.request.use(
        async (config) => {
          const token = await getToken();
          if (token && token?.accessToken && !!config.headers) {
            config.headers["Authorization"] = `Bearer ${token.accessToken}`;
          }
          if (token && token?.refreshToken && !!config.headers) {
            config.headers["refreshJWTToken"] = `Bearer ${token.refreshToken}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      this.client.interceptors.response.use(
        async (response) => {
          if (response?.data?.token) {
            await setToken(response?.data?.token);
            this.client.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response?.data?.token.accessToken}`;
            this.client.defaults.headers.common[
              "refreshJWTToken"
            ] = `Bearer ${response?.data?.token.refreshToken}`;
          }
          return response;
        },
        async (error) => {
          const originalRequest = error?.config;
          if (error?.response?.status === 403 && !originalRequest?._retry) {
            originalRequest._retry = true;
            await new Promise((resolve) => setTimeout(resolve, 1000));
            await logOut();
            return this.client(originalRequest);
          } else if (
            error?.response?.status === 408 &&
            !originalRequest?._retry
          ) {
            originalRequest._retry = true;
            console.log("error response token : ", error.response);
            if (error?.response?.data?.token) {
              await setToken(error.response?.data?.token);
              this.client.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${error.response?.data?.token.accessToken}`;
              this.client.defaults.headers.common[
                "refreshJWTToken"
              ] = `Bearer ${error.response?.data?.token.refreshToken}`;
              await new Promise((resolve) => setTimeout(resolve, 500));
              return this.client(originalRequest);
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return this.client(originalRequest);
          }

          return Promise.reject(error);
        }
      );
    }

    get(endpoint: string) {
      return this.client.get<any>(endpoint);
    }

    post(endpoint: string, payload: any) {
      return this.client.post<any>(endpoint, payload);
    }
    put(endpoint: string, payload: any) {
      return this.client.put<any>(endpoint, payload);
    }
    delete(endpoint: string, payload?: any) {
      return this.client.delete(endpoint, payload);
    }
  }
  // ***********  logout current user  (just clear all token and login user details from store ) *********//
  const logOut = async () => {
    logoutUser();
  };
  // ***********  get logged in user jwt token  *********//
  const getToken = async (): Promise<any> => {
    const payloadForAccessToken: any = await getJWTAccessToken();
    const payloadForRefreshToken: any = await getJWTRefreshToken();
    const payload: any = {};
    if (!!payloadForAccessToken && payloadForAccessToken?.accessToken)
      payload["accessToken"] = payloadForAccessToken.accessToken;
    if (!!payloadForRefreshToken && payloadForRefreshToken?.refreshToken)
      payload["refreshToken"] = payloadForRefreshToken.refreshToken;
    return payload;
  };

  // ***********  set logged in user jwt token  *********//
  const setToken = async (token: JWTTokenInterface) => {
    const datetime = Date.now() + 1000 * 60 * 60 * 24;
    const expires = new Date(datetime);
    const encodedAccessToken = await JWTEncryptMethod({
      accessToken: token.accessToken,
      expires,
    });
    const encodedRefreshToken = await JWTEncryptMethod({
      refreshToken: token.refreshToken,
      expires,
    });
    setCookie({
      cname: "gurukul-access-token",
      cvalue: encodedAccessToken,
      noOfDays: 1,
    });
    setCookie({
      cname: "gurukul-refresh-token",
      cvalue: encodedRefreshToken,
      noOfDays: 1,
    });
  };

  const restClient =
    globalThis.restClient ||
    new RestService({
      baseURL: BASEURL,
    });

  // this is for in development mode nextjs hot reload not initialize
  // to avoid so many rest client
  if (process.env.NODE_ENV !== "production") globalThis.restClient = restClient;
  return restClient;
};

export default useRestService;
// 408=> refresh
// 403=> expaired
// 500=> system exception
// 200=> succes and business error
