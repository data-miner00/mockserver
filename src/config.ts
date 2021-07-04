import { config } from "https://deno.land/x/dotenv/mod.ts";

export const port: number = Number(config().DENO_APP_PORT);
