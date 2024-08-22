export default function ({ router, logger }: HTTPContext) {
  router.post("/", (req, res) => {
    logger.info("GetSabaUrl", req.body);

    res.send({
      error_code: 0,
      message: "",
      Data: "https://google.com",
    });
  });
}
