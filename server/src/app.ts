import express from "express";
import loadExpress from "./loaders/express";
import loadLogger from "./loaders/logger";
import loadServices from "./loaders/services";

export default async function () {
  const logger = loadLogger();
  const app = express();
  const port = Number(process.env.PORT || 5000);
  const context = { logger };
  const services = await loadServices(context);

  await loadExpress({ ...context, router: app, services });

  const server = app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
  });

  process.on("SIGTERM", async () => {
    server.close();
  });
}
