const TopRepairReq = () => {
  const repairs = [
    { name: "Screen Repair", count: 156, width: "85%" },
    { name: "Battery Replacement", count: 89, width: "50%" },
    { name: "Back Glass Repair", count: 67, width: "35%" },
    { name: "Software Issues", count: 45, width: "25%" },
  ];
  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
      <h2 className="text-white text-lg font-semibold mb-4">
        Top Repair Requests
      </h2>
      <div className="space-y-6">
        {repairs.map((repair, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300">{repair.name}</span>
              <span className="text-slate-400">{repair.count} requests</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-[linear-gradient(90deg,#00A3FF_0%,#00D1FF_100%)] shadow-[0_0_10px_rgba(0,163,255,0.3)]"
                style={{ width: repair.width }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRepairReq;
