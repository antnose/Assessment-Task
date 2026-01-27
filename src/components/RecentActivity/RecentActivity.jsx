const RecentActivity = () => {
  const activities = [
    {
      text: "AI booked appointment for iPhone 13 screen repair",
      time: "2 min ago",
      color: "bg-emerald-500",
    },
    {
      text: "Warm transfer to technician - Software issue",
      time: "5 min ago",
      color: "bg-orange-500",
    },
    {
      text: "Quote provided for iPad battery replacement",
      time: "8 min ago",
      color: "bg-emerald-500",
    },
    {
      text: "Call dropped after 12 seconds",
      time: "15 min ago",
      color: "bg-red-500",
    },
  ];
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0b1120]/50 p-3 rounded-xl border border-slate-800/50 flex items-start gap-3"
          >
            <div
              className={`w-2 h-2 rounded-full mt-2 ${item.color} shadow-[0_0_8px_rgba(16,185,129,0.5)]`}
            ></div>
            <div>
              <p className="text-slate-200 text-sm font-medium">{item.text}</p>
              <p className="text-slate-500 text-xs mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
