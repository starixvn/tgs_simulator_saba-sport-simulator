export default function ({ router, logger }: HTTPContext) {
  router.post("/", (req, res) => {
    logger.info(req.body);

    res.send({
      error_code: 0,
      message: "",
      Data: [
        {
          vendor_member_id: "vendor_member_id",
          is_online: false,
        },
      ],
    });
  });
}
