import { NextFunction, Request, Response } from "express";

export default function (context: MiddlewareContext) {
  context.router.use(
    (error: Error, _: Request, __: Response, next: NextFunction) => {
      context.logger.error(error);

      next(error);
    },
  );
}
