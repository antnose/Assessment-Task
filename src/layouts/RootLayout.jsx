import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <Sidebar />
      </div>

      <div className="col-span-8">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
