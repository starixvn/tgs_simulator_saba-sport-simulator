export default function ({ router, logger }: HTTPContext) {
  router.post("/", (req, res) => {
    logger.info("KickUser", req.body);

    res.send({
      error_code: 3,
      message: "User is not online",
    });
  });
}
