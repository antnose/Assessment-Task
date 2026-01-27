import callLogo from "../../assets/callLogo.png";
import clockLogo from "../../assets/clock.png";
import confirmLogo from "../../assets/confirm.png";

const CallList = () => {
  const calls = [
    {
      id: 1,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "AI Resolved",
      outcome: "Quote Provided",
      tag: "Screen",

      active: true,
    },
    {
      id: 2,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Warm Transfer",
      outcome: "Escalated to technician",
      tag: "Software",
    },
    {
      id: 3,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "Appointment",
      outcome: "Appointment Booked",
      tag: "Battery",
    },
    {
      id: 4,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "0:20",
      status: "Dropped",
      outcome: "Call Dropped",
      tag: "Unknown",
    },
    {
      id: 5,
      phone: "+1 (555) 345-6789",
      date: "2025-12-16",
      time: "09:42 AM",
      duration: "5:23",
      status: "AI Resolved",
      outcome: "Quote Provided",
      tag: "Screen",
      active: false,
    },
  ];

  return (
    <div className="col-span-5 bg-[#111827] rounded-2xl border border-slate-800 flex flex-col overflow-hidden">
      <h2 className="p-5 text-white text-lg font-semibold border-b border-slate-800">
        Call List
      </h2>
      <div className="flex-1 overflow-y-auto">
        {calls.map((call) => (
          <div
            key={call.id}
            className={`p-4 border-b border-slate-800/50 cursor-pointer hover:bg-slate-800/30 transition-all ${call.active ? "bg-blue-600/10 border-b-4 border-b-blue-500" : ""}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <div>
                  <img src={callLogo} alt="" />
                </div>

                <div>
                  <p className="text-white font-medium text-sm">{call.phone}</p>
                  <p className="text-slate-500 text-[10px]">
                    {call.date} • {call.time}
                  </p>
                </div>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${call.status === "AI Resolved" ? "text-emerald-400 bg-emerald-400/10" : call.status === "Dropped" ? "text-red-400 bg-red-400/10" : "text-orange-400 bg-orange-400/10"}`}
              >
                {call.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-xs pl-11">
              <span className="flex items-center gap-1">
                <img
                  src={clockLogo}
                  alt="clock"
                  className="w-3 h-3 opacity-70"
                />
                {call.duration}
              </span>

              <span className="flex items-center gap-1">
                <img src={confirmLogo} alt="outcome" className="w-3 h-3" />
                {call.outcome}
              </span>

              <span className="bg-slate-800 text-blue-400 px-2 py-0.5 rounded text-[10px]">
                {call.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallList;
