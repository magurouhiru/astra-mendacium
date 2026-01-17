import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "ja",
  locales: ["ja"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
});
