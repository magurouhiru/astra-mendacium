import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "@/router.tsx";
// biome-ignore lint/suspicious/noTsIgnore: vita でビルド時に作成されるので無視する
// @ts-ignore
import { messages } from "./locales/ja/messages";

i18n.load("ja", messages);
i18n.activate("ja");

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <I18nProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nProvider>,
  );
} else {
  throw new Error("Root element not found");
}
