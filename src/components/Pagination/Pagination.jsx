import React from "react";
import next from "../../assets/next.png";
import prev from "../../assets/previous.png";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-8 mb-10">
      <div className="flex items-center  rounded-lg overflow-hidden bg-[#111827]/50 shadow-[0_0_15px_rgba(173,70,255,0.1)]">
        <button className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-300 transition-colors">
          <img src={prev} alt="" />
          <span className="text-sm">Previous</span>
        </button>

        <div className="flex items-center">
          <button className="px-4 py-2 text-blue-500 hover:bg-blue-500/10 border-r border-dotted border-[#AD46FF]/50 text-sm">
            1
          </button>

          <button className="px-4 py-2 bg-[#A5C9FF] text-[#0B1120] font-bold border-r border-dotted border-[#AD46FF]/50 text-sm">
            2
          </button>

          <button className="px-4 py-2 text-blue-500 hover:bg-blue-500/10 border-r border-dotted border-[#AD46FF]/50 text-sm">
            3
          </button>
          <button className="px-4 py-2 text-blue-500 hover:bg-blue-500/10 border-r border-dotted border-[#AD46FF]/50 text-sm">
            4
          </button>
          <button className="px-4 py-2 text-blue-500 hover:bg-blue-500/10 border-r border-dotted border-[#AD46FF]/50 text-sm">
            5
          </button>

          <span className="px-4 py-2 text-blue-500 border-r border-dotted border-[#AD46FF]/50 text-sm">
            ...
          </span>

          <button className="px-4 py-2 text-blue-500 hover:bg-blue-500/10 border-r border-dotted border-[#AD46FF]/50 text-sm">
            11
          </button>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:text-blue-400 transition-colors">
          <span className="text-sm font-medium">Next</span>
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
