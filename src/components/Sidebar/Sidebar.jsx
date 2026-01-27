import { Link } from "react-router";
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
    <div>
      {options.map((option) => (
        <Link
          key={option.path}
          to={option.path}
          className="flex items-center gap-3 px-3 font-semibold text-xl py-3"
        >
          <img src={option.icon} alt="" />
          {option.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
