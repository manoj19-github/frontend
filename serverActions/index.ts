import { BASEURL } from "@/environment";

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
  const responseHeaders = new Headers();
  if (!!headers)
    Object.entries(headers)?.map(([key, val]: any) =>
      responseHeaders.append(key, val)
    );
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
