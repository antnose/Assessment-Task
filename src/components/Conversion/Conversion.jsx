import React from "react";
import conversionTranscriptBtn from "../../assets/conversionTranscriptBtn.png";

const Conversion = () => {
  return (
    <div>
      <div className="flex items-center text-blue-400 font-medium text-sm md:px-5 md:py-2">
        <img src={conversionTranscriptBtn} alt="" /> Conversation Transcript
      </div>

      <div className="space-y-4 text-sm bg-[#0b1120] rounded-xl p-5 m-3 border border-slate-800/50">
        <p>
          <span className="text-emerald-400 block mb-1">AI Assistant:</span>{" "}
          <span className="text-slate-300">
            Thank you for calling UBreakiFix! How can I help you today?
          </span>
        </p>

        <p>
          <span className="text-blue-400 block mb-1">Customer:</span>{" "}
          <span className="text-slate-300">
            Hi, my iPhone 13 screen is cracked. How much would it cost to
            repair?
          </span>
        </p>

        <p>
          <span className="text-emerald-400 block mb-1">AI Assistant:</span>{" "}
          <span className="text-slate-300">
            I can help you with that! For an iPhone 13 screen repair, our price
            is $199. This includes parts, labor, and comes with a 90-day
            warranty. Would you like to book an appointment?
          </span>
        </p>

        <p>
          <span className="text-blue-400 block mb-1">Customer:</span>{" "}
          <span className="text-slate-300">
            Yes, please! When are you available?
          </span>
        </p>

        <p>
          <span className="text-emerald-400 block mb-1">AI Assistant:</span>{" "}
          <span className="text-slate-300">
            Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM.
            Which works better for you?
          </span>
        </p>
      </div>
    </div>
  );
};

export default Conversion;
