import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-9 px-6   ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
