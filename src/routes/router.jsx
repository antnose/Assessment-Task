import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import CallLogsAndHistory from "../pages/CallLogsAndHistory";
import Appointment from "../pages/Appointment";

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
        Component: CallLogsAndHistory,
      },

      {
        path: "/appointments",
        Component: Appointment,
      },

      {
        path: "/Settings",
        Component: Home,
      },
    ],
  },
]);

export default router;
