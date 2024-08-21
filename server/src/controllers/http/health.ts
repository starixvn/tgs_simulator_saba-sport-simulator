export default function ({ router, services }: HTTPContext) {
  router.get("/", (_, res) => res.send(services.health.check()));
}
