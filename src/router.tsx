import { createBrowserRouter, type RouteObject } from "react-router";
import App from "@/App";
import Home from "@/pages/home";
import Setting from "@/pages/setting";
import Test1 from "@/pages/test1";
import Test2 from "@/pages/test2";
import Test2_1 from "@/pages/test2_1";
import Test2_2 from "@/pages/test2_2";
import Test2_3 from "@/pages/test2_3";
import SampleAnswer from "./pages/sample-answer";
import SampleEnd from "./pages/sample-end";
import SampleHome from "./pages/sample-home";
import SampleQuestion from "./pages/sample-question";

export const SEGMENTS = {
  home: "",
  setting: "setting",
  sample: "sample",
  sampleHome: "",
  sampleEnd: "end",
  sampleId: ":id",
  sampleQuestion: "",
  sampleAnswer: "answer",
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
      path: SEGMENTS.sample,
      children: [
        {
          path: SEGMENTS.sampleHome,
          Component: SampleHome,
        },
        {
          path: SEGMENTS.sampleEnd,
          Component: SampleEnd,
        },
        {
          path: SEGMENTS.sampleId,
          children: [
            {
              path: SEGMENTS.sampleQuestion,
              Component: SampleQuestion,
            },
            {
              path: SEGMENTS.sampleAnswer,
              Component: SampleAnswer,
            },
          ],
        },
      ],
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
  sampleHome: {
    label: "Sample Home",
    path: `/${SEGMENTS.sample}/${SEGMENTS.sampleHome}`,
  },
  sampleEnd: {
    label: "Sample End",
    path: `/${SEGMENTS.sample}/${SEGMENTS.sampleEnd}`,
  },
  sampleQuestion: {
    label: "Sample Question",
    pathWithParam: (id: string) =>
      `/${SEGMENTS.sample}/${id}/${SEGMENTS.sampleQuestion}`,
  },
  sampleAnswer: {
    label: "Sample Answer",
    pathWithParam: (id: string) =>
      `/${SEGMENTS.sample}/${id}/${SEGMENTS.sampleAnswer}`,
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
