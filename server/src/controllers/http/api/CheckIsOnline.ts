export default function ({ router }: HTTPContext) {
  router.post("/", (_, res) =>
    res.send({
      error_code: 0,
      message: "",
      Data: [
        {
          vendor_member_id: "vendor_member_id",
          is_online: false,
        },
      ],
    }),
  );
}
