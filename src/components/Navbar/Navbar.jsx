import { useLocation } from "react-router";
import logo from "../../assets/profile.png";
import noti from "../../assets/notification.png";

const Navbar = () => {
  const location = useLocation();

  const getTitle = (path) => {
    switch (path) {
      case "/":
        return "Dashboard Overview";
      case "/calls":
        return "Call Logs";
      case "/appointments":
        return "Appointments";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex items-center justify-between py-6">
      <h1 className="text-white text-2xl font-semibold tracking-wide">
        {getTitle(location.pathname)}
      </h1>

      <div className="flex items-center gap-4">
        <div className="flex w-full h-10 rounded-full gap-6 items-center">
          <img className="h-7 w-7" src={noti} alt="" />

          <img className="w-full h-full rounded-full " src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
