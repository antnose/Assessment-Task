import React from "react";

import confirm from "../../assets/confirm.png";

import Appointments from "../../assets/sidebar/Appointments.png";
import pending from "../../assets/pending.png";

const AppointmentCard = () => {
  const data = [
    {
      title: "Total Booked",
      count: "34",
      subtext: "+8 this week",
      subtextColor: "text-emerald-400",
      icon: Appointments,
    },
    {
      title: "AI Booked",
      count: "28",
      subtext: "82% of total",
      subtextColor: "text-slate-500",
      isActive: false,
      icon: confirm,
    },
    {
      title: "Pending",
      count: "3",
      subtext: "Awaiting confirmation",
      subtextColor: "text-slate-500",
      icon: pending,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`bg-[#111827] p-6 rounded-2xl border transition-all ${
            item.isActive ? "border-[#00A3FF]" : "border-slate-800"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <img width={20} src={item.icon} alt="" />
            <span className="text-slate-400 text-sm font-medium">
              {item.title}
            </span>
          </div>
          <div className="space-y-1">
            <h3 className="text-white text-3xl font-bold">{item.count}</h3>
            <p className={`text-xs ${item.subtextColor}`}>{item.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCard;
