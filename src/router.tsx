import { createBrowserRouter } from "react-router";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "test",
    element: <div>Test Page</div>,
  },
]);

export default router;
