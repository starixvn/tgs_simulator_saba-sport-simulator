export default function ({ router, logger }: HTTPContext) {
  router.post("/", (req, res) => {
    logger.info("CheckFundTransfer");
    logger.info(req.body);

    res.send({
      error_code: 0,
      message: "Check is successful, Success",
      Data: {
        trans_id: 47,
        transfer_date: "2024-08-21T04:45:59.347",
        vender_member_id: "14a86din8i_001_test",
        amount: 1000.0,
        currency: 20,
        before_amount: 0.0,
        after_amount: 1000,
        status: 0,
      },
    });
  });
}
