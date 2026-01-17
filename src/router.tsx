import {
  createBrowserRouter,
  type IndexRouteObject,
  type NonIndexRouteObject,
  type RouteObject,
} from "react-router";
import App from "@/App";
import Home from "@/pages/home";
import Test1 from "@/pages/test1";
import Test2 from "@/pages/test2";
import Test2_1 from "@/pages/test2_1";
import Test2_2 from "@/pages/test2_2";
import Test2_3 from "@/pages/test2_3";
import { never } from "valibot";

export const ROUTES_ID = {
  HOME: "Home",
  TEST1: "Test1",
  TEST2_1: "Test2_1",
  TEST2_2: "Test2_2",
  TEST2_3: "Test2_3",
} as const;

type RoutesId = (typeof ROUTES_ID)[keyof typeof ROUTES_ID];

interface CustomIndexRouteObject extends IndexRouteObject {
  routesId: RoutesId;
}

interface CustomNonIndexRouteObjectWithId
  extends Omit<NonIndexRouteObject, "children"> {
  routesId: RoutesId;
  children?: undefined;
}

interface CustomNonIndexRouteObjectWithChildren
  extends Omit<NonIndexRouteObject, "id" | "children"> {
  routesId?: undefined;
  children: CustomRouteObject[];
}

type CustomRouteObject =
  | CustomIndexRouteObject
  | CustomNonIndexRouteObjectWithId
  | CustomNonIndexRouteObjectWithChildren;

export const ROUTES: CustomRouteObject = {
  path: "",
  Component: App,
  children: [
    {
      routesId: ROUTES_ID.HOME,
      path: "",
      Component: Home,
    },
    {
      routesId: ROUTES_ID.TEST1,
      path: "test1",
      Component: Test1,
    },
    {
      path: "test2",
      Component: Test2,
      children: [
        {
          routesId: ROUTES_ID.TEST2_1,
          path: "test2_1",
          Component: Test2_1,
        },
        {
          routesId: ROUTES_ID.TEST2_2,
          path: "test2_2",
          Component: Test2_2,
        },
        {
          routesId: ROUTES_ID.TEST2_3,
          path: ":id",
          Component: Test2_3,
        },
      ],
    },
  ],
};

function toMap(route: CustomRouteObject): Map<RoutesId, string[]> {
  const id = route.routesId;
  const path = route.path;
  const children = route.children;
  if (id && path !== undefined) {
    return new Map([[id, [path]]]);
  }

  if (children) {
    const childMaps = children.map(toMap);
    const merged = new Map<RoutesId, string[]>();
    for (const childMap of childMaps) {
      for (const [childId, childPathSegments] of childMap.entries()) {
        merged.set(
          childId,
          path ? [path, ...childPathSegments] : childPathSegments,
        );
      }
    }
    return merged;
  }
  throw new Error(
    `Route must have either an id and path, or children: ${JSON.stringify(route)}`,
  );
}

export const ROUTES_MAP: Record<RoutesId, string> = toMap(ROUTES)
  .entries()
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value.join("/");
      return acc;
    },
    {} as Record<RoutesId, string>,
  );

export const router = createBrowserRouter([ROUTES]);
