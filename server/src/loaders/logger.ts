import pino from "pino";

export default function () {
  return pino({ level: "debug" });
}
