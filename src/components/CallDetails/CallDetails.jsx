import playBtn from "../../assets/playButton.png";
import Conversion from "../Conversion/Conversion";

const CallDetails = () => {
  return (
    <div>
      <h2 className="p-5 text-white text-lg font-semibold border-b border-slate-800">
        Call Details
      </h2>

      <div className="p-5">
        <div className="grid md:grid-cols-2 gap-y-6 mb-8 ">
          <div>
            <p className="text-slate-500 text-xs mb-1">Phone Number</p>
            <p className="text-white font-medium">+1 (555) 123-4567</p>
          </div>

          <div>
            <p className="text-slate-500 text-xs mb-1">Duration</p>
            <p className="text-white font-medium">4:32</p>
          </div>

          <div>
            <p className="text-slate-500 text-xs mb-1">Date & Time</p>
            <p className="text-white font-medium">2025-12-16 10:45 AM</p>
          </div>

          <div>
            <p className="text-slate-500 text-xs mb-1">Issue Type</p>
            <p className="text-white font-medium">Screen</p>
          </div>

          <div>
            <p className="text-slate-500 text-xs mb-1">Call Type</p>
            <span className="text-emerald-400 bg-emerald-400/10 text-[11px] px-3 py-1 rounded-lg">
              AI Resolved
            </span>
          </div>

          <br />
          <div className="w-full">
            <p className="text-slate-500 text-xs mb-1">Outcome</p>
            <p className="text-white font-medium">Quote provided</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full border-t border-[#AD46FF]/30 bg-linear-to-r from-[#2e1a4a] via-[#3b1c5a] to-[#2e1a4a] text-[#C084FC] hover:brightness-110 transition-all shadow-inner">
          <img src={playBtn} alt="" />
          <span className="font-medium text-[14px] md:text-lg">
            Play Audio Recording
          </span>
        </button>
      </div>
    </div>
  );
};

export default CallDetails;
