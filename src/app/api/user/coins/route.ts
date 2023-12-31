import { SessionData, sessionOptions } from "@/libs/iron";
import { strapi } from "@/libs/strapi";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const res = await strapi.axios.get("/coins?id=" + session.user.id);
  return Response.json(res.data);
}
