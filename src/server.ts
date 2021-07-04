import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import * as path from "https://deno.land/std@0.100.0/path/mod.ts";
import { walkSync } from "https://deno.land/std@0.100.0/fs/mod.ts";

import { port } from "./config.ts";

const app: Application = new Application();

const staticPath: string = path.join("./", "static");
const apiPath: string = path.join("./", "api");

type Entry = {
  path: string;
  name: string;
  isFile: boolean;
  isDirectory: boolean;
  isSymlink: boolean;
};

const entries: Entry[] = [];

for (const entry of walkSync(apiPath)) {
  entries.push(entry);
}

const filenames: string[][] = entries
  .filter((entry: Entry): boolean => !entry.isDirectory)
  .map((entry: Entry): string => entry.name)
  .map((filename: string) => filename.split("."));

console.log(filenames);

filenames.forEach((filename) => {
  const fileData: any = JSON.parse(
    Deno.readTextFileSync(`./api/${filename[0]}.${filename[1]}`)
  );

  app.get(`/${filename[0]}`, (context) => fileData);
});

app.static("/", staticPath).start({ port });
