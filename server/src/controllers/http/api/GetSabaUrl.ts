export default function ({ router }: HTTPContext) {
  router.post("/", (_, res) =>
    res.send({
      error_code: 0,
      message: "",
      Data: "https://google.com",
    }),
  );
}
