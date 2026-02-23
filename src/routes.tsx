import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Methodology } from "./components/Methodology";
import { Technology } from "./components/Technology";
import { Results } from "./components/Results";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "methodology", Component: Methodology },
      { path: "technology", Component: Technology },
      { path: "results", Component: Results },
    ],
  },
]);
