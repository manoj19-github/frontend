import {
  getJWTAccessToken,
  getJWTRefreshToken,
} from "@/_config/nextAuth.config";
import { BASEURL } from "@/environment";

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
export const serverAction = async ({
  type,
  url,
  headers,
  revalidate,
}: {
  type: "ssg" | "ssr" | "isr";
  revalidate?: number;
  url: string;
  headers?: any;
}) => {
  const tokens = await getToken();
  const responseHeaders = new Headers();
  if (!!headers)
    Object.entries(headers)?.map(([key, val]: any) =>
      responseHeaders.append(key, val)
    );
  if (!!tokens && tokens?.accessToken)
    responseHeaders.append("Authorization", `Bearer ${tokens.accessToken}`);
  if (!!tokens && tokens?.refreshToken)
    responseHeaders.append("refreshToken", `Bearer ${tokens.refreshToken}`);
  const cachedType: any =
    type === "ssg"
      ? { cache: "force-cache" }
      : type === "ssr"
      ? { cache: "no-store" }
      : { next: { revalidate: revalidate } };

  const response = await fetch(`${BASEURL}${url}`, {
    headers: responseHeaders,
    ...cachedType,
  });
  if (!response.ok) throw new Error("failed to fetch");
  return await response.json();
};
