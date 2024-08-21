export default function ({ router }: HTTPContext) {
  router.post("/", (_, res) =>
    res.send({
      error_code: 3,
      message: "User is not online",
    }),
  );
}
