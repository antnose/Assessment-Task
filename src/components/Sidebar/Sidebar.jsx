import { Link, NavLink } from "react-router";

import logo from "../../assets/sidebar/logo.png";
import dashboardIcon from "../../assets/sidebar/home.png";
import callIcon from "../../assets/sidebar/call.png";
import appointmentIcon from "../../assets/sidebar/Appointments.png";
import settingsIcon from "../../assets/sidebar/Settings.png";

const Sidebar = () => {
  const options = [
    {
      name: "Dashboard Overview",
      path: "/",
      icon: dashboardIcon,
    },
    {
      name: "Call Logs",
      path: "/calls",
      icon: callIcon,
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: appointmentIcon,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: settingsIcon,
    },
  ];

  return (
    <div className="h-screen border-r-2 border-red-500">
      {/* Logo */}
      <div className="flex w-full items-center justify-center h-24">
        <img src={logo} alt="" />
      </div>

      {options.map((option) => (
        <NavLink
          key={option.path}
          to={option.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-3 rounded-md
       ${isActive ? "flex items-center rounded-full text-white transition-all duration-300" : "text-gray-600"}`
          }
        >
          <img src={option.icon} alt="" />
          {option.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
