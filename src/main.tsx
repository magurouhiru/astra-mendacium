import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "@/router.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
} else {
  throw new Error("Root element not found");
}
