import { camelCase, set } from "lodash";
import { loadModules } from "./helper";

export async function loadService(path: string, context: Context) {
  const modules = await loadModules(path);
  const services = {};

  for (const module of modules) {
    const path = [...module.loader.path, module.loader.name].map((x) =>
      camelCase(x),
    );

    context.logger.debug(`Service: loading ${path.join(".")}`);

    set(services, path, module.default(context));
  }

  return services;
}

export default async function (context: Context) {
  return loadService("src/services", context);
}
