import React, { useState } from "react";

const CopySection = () => {
  const [copied, setCopied] = useState(false);
  const link = "https://techstore.com/book?id=store123";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 mt-6">
      <h2 className="text-white text-lg font-medium mb-4 text-left">
        Booking Link
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            readOnly
            value={link}
            className="w-full bg-[#0b1120] border border-emerald-500/30 rounded-xl py-3 px-4 text-slate-300 text-sm focus:outline-none"
          />
        </div>

        <button
          onClick={handleCopy}
          className="bg-[#1e293b]/50 border border-slate-700 hover:border-blue-500/50 backdrop-blur-md rounded-xl px-6 py-3 flex items-center gap-2 transition-all duration-300 group shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
        >
          <span
            className={`text-sm font-medium transition-colors ${copied ? "text-emerald-400" : "text-white"}`}
          >
            {copied ? "Copied!" : "Copy Link"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CopySection;
