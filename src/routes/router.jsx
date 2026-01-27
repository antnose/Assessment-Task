import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/calls",
        Component: Home,
      },
      {
        path: "/appointments",
        Component: Home,
      },
      {
        path: "/Settings",
        Component: Home,
      },
    ],
  },
]);

export default router;
