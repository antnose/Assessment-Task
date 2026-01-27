import React from "react";

const ChartDropDown = () => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h2 className="text-white text-lg font-semibold">
          Call Trends - This Week
        </h2>
        <p className="text-slate-400 text-sm">Total: 472 calls</p>
      </div>
      <select className="bg-[#1f2937] text-white text-sm border border-slate-700 rounded-md px-3 py-1 outline-none">
        <option>This Week</option>
      </select>
    </div>
  );
};

export default ChartDropDown;
