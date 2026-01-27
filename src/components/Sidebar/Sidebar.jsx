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
    <div className="border-r h-full">
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

      <div className="flex items-end h-[67%]">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-medium text-sm">
          {/* Add a logout icon here if you have one */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
