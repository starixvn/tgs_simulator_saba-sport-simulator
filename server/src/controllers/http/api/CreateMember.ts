export default function ({ router, logger }: HTTPContext) {
  router.post("/", (req, res) => {
    logger.info("CreateMember", req.body);

    res.send({
      error_code: 0,
      message: "",
    });
  });
}
