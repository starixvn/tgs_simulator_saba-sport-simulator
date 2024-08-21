export default function ({ router }: HTTPContext) {
  router.post("/", (_, res) =>
    res.send({
      error_code: 0,
      message: "",
      Data: [
        {
          vendor_member_id: "14a86din8i_001_test",
          balance: 1753.24,
          outstanding: 0,
          currency: 20,
          error_code: 0,
        },
      ],
    }),
  );
}
