import { readdirSync, statSync } from "node:fs";
import { parse, resolve } from "node:path";
import { defaultsDeep } from "lodash";

export type Module = {
  default?: Function;
  loader: {
    name: string;
    path: string[];
    priority: number;
  };
};

export function isModule(path: string) {
  return (
    (path.endsWith(".ts") && !path.endsWith(".d.ts")) || path.endsWith(".js")
  );
}

export async function loadModules<T extends Module>(
  path: string,
  context: string[] = [],
) {
  const result: T[] = [];

  for (const filename of readdirSync(path)) {
    const fullPath = resolve(path, filename);
    const stat = statSync(resolve(fullPath));
    const { name } = parse(fullPath);

    if (stat.isDirectory()) {
      const modules = await loadModules<T>(fullPath, [...context, name]);

      result.push(...modules);
    }

    if (stat.isFile() && isModule(fullPath)) {
      const module = await import(fullPath);

      defaultsDeep(module, {
        loader: {
          priority: 0,
          name,
          path: context,
        },
      });

      result.push(module);
    }
  }

  return result;
}
