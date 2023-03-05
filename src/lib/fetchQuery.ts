import { noteSchema } from "@/utlis/schemas";
import { z } from "zod";

export type HTTPMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export async function fetchQuery<T>({
  url,
  method,
  schema,
  body,
}: {
  url: string;
  method: HTTPMethod;
  schema: z.ZodType<T>;
  body?: object;
}) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    throw new Error(`Response with status ${response.status} is not ok.`);
  }

  const data = (await response.json()) as unknown;
  return schema.parse(data);
}
