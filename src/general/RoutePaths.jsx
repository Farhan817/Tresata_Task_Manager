import Add from "../Pages/Add/Add";
import Edit from "../Pages/Edit/Edit";

import Home from "../Pages/home/Home";

export const RoutePaths = [
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
