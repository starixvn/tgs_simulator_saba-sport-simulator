import multer from "multer";

export default function (context: MiddlewareContext) {
  context.router.use(multer().any());
}
