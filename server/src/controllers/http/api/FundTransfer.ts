export default function ({ router, logger }: HTTPContext) {
  router.post("/", (req, res) => {
    logger.info(req.body);

    res.send({
      error_code: 0,
      message: "Success",
      Data: {
        trans_id: 61,
        before_amount: 1753.24,
        after_amount: 2753,
        system_id: "StarixWLUUS01S037",
        status: 0,
      },
    });
  });
}
