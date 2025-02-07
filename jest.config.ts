import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  // verbose: show more info in console
  verbose: true,
};

export default config;
