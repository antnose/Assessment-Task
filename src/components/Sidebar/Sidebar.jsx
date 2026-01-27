const Sidebar = () => {
  const options = [
    "Dashboard Overview",
    "Call Logs",
    "Appointments",
    "Settings",
  ];

  return (
    <div>
      {options.map((option) => (
        <div className="px-3 font-semibold text-xl py-3 ">{option}</div>
      ))}
    </div>
  );
};

export default Sidebar;
