import { Router } from "express";
import { loadModules, Module } from "./helper";

function buildPath({ loader }: Module) {
  const parent = `/${loader.path.join("/")}`;

  if (loader.name === "default") {
    return parent;
  }

  return parent === "/" ? `/${loader.name}` : `${parent}/${loader.name}`;
}

async function loadAPI(path: string, context: HTTPContext) {
  const modules = await loadModules(path);

  modules.sort((a, b) => a.loader.priority - b.loader.priority);

  for (const module of modules) {
    const path = buildPath(module);

    context.logger.debug(`API: loading ${path}`);

    const router = Router();
    const moduleContext = { ...context, router };

    module.default(moduleContext);
    context.router.use(path, router);
  }
}

async function loadMiddleware(path: string, context: HTTPContext) {
  const modules = await loadModules(path);

  for (const module of modules) {
    context.logger.debug(`Middleware: loading ${module.loader.name}`);

    module.default(context);
  }
}

export default async function (context: HTTPContext) {
  await loadMiddleware("src/controllers/middleware", context);
  await loadAPI("src/controllers/http", context);
}
