import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/home";

export const ROUTES = {
  HOME: "/",
} as const;

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: App,
    children: [
      {
        path: ROUTES.HOME,
        Component: Home,
      },
    ],
  },
]);
