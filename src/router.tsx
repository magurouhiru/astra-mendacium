import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);

export default router;
