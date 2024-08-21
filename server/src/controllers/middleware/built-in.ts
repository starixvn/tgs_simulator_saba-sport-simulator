import { json, static as serveStatic, urlencoded } from "express";

export default function (context: MiddlewareContext) {
  context.router.use(json());
  context.router.use(urlencoded({ extended: false }));
  context.router.use(serveStatic("public"));
}
