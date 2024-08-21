declare interface Service {
  <Output>(): Promise<Output>;
  <Payload, Output>(payload: Payload): Promise<Output>;
  <Payload1, Payload2, Output>(
    payload1: Payload1,
    payload2: Payload2,
  ): Promise<Output>;
}

declare type Services = Record<string, Record<string, Service>>;

declare interface Context {
  logger: import("pino").Logger;
}

declare interface HTTPContext extends Context {
  router: import("express").Router;
  services: Services;
}

declare interface ServiceContext extends Context {
  services: Services;
}

declare interface MiddlewareContext extends HTTPContext {}
