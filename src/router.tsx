import { createBrowserRouter, type RouteObject } from "react-router";
import App from "@/App";
import Home from "@/pages/home";
import Setting from "@/pages/setting";
import Test1 from "@/pages/test1";
import Test2 from "@/pages/test2";
import Test2_1 from "@/pages/test2_1";
import Test2_2 from "@/pages/test2_2";
import Test2_3 from "@/pages/test2_3";

export const SEGMENTS = {
  home: "",
  setting: "setting",
  test1: "test1",
  test2: "test2",
  test2_1: "test2_1",
  test2_2: "test2_2",
  test2_3: ":id",
} as const;

export const ROUTES: RouteObject = {
  path: "/",
  Component: App,
  children: [
    {
      path: SEGMENTS.home,
      Component: Home,
    },
    {
      path: SEGMENTS.setting,
      Component: Setting,
    },
    {
      path: SEGMENTS.test1,
      Component: Test1,
    },
    {
      path: SEGMENTS.test2,
      Component: Test2,
      children: [
        {
          path: SEGMENTS.test2_1,
          Component: Test2_1,
        },
        {
          path: SEGMENTS.test2_2,
          Component: Test2_2,
        },
        {
          path: SEGMENTS.test2_3,
          Component: Test2_3,
        },
      ],
    },
  ],
};

export const PATHS = {
  home: {
    label: "Home",
    path: "/",
  },
  setting: {
    label: "Setting",
    path: `/${SEGMENTS.setting}`,
  },
  test1: {
    label: "Test1",
    path: `/${SEGMENTS.test1}`,
  },
  test2_1: {
    label: "Test2_1",
    path: `/${SEGMENTS.test2}/${SEGMENTS.test2_1}`,
  },
  test2_2: {
    label: "Test2_2",
    path: `/${SEGMENTS.test2}/${SEGMENTS.test2_2}`,
  },
  test2_3: {
    label: "Test2_3",
    pathWithParam: (id: string) => `/${SEGMENTS.test2}/${id}`,
  },
} as const;

export const router = createBrowserRouter([ROUTES]);
