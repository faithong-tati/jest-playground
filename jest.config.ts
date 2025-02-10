import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/pass_checker";
const baseTestDir = "<rootDir>/src/test/pass_checker";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  // verbose: show more info in console
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;
