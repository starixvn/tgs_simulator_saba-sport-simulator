export default function ({ router, logger }: HTTPContext) {
  router.post("/:action", (req, res) => {
    logger.info(req.params.action);
    logger.info(req.body);

    res.send({
      error_code: 0,
      message: "",
    });
  });
}
