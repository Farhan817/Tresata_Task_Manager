import React from "react";
import Add from "../Pages/Add/Add";
import Edit from "../Pages/Edit/Edit";
import Home from "../Pages/Home/Home";
import { RouteConfig } from "../utils/Types";

export const RoutePaths: RouteConfig[] = [
  {
    path: "/",
    comp: <Home />,
    title: "To DO App",
  },
  {
    path: "/add",
    comp: <Add />,
    title: "Add",
    isBack: true,
  },
  {
    path: "/edit",
    comp: <Edit />,
    title: "Edit",
    isBack: true,
  },
];
