import React from "react";

const ProfilePasswordSection = ({ activeTab }) => {
  return (
    <div>
      {activeTab === "Password Settings" && (
        <div className="max-w-4xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="flex flex-col gap-3">
              <label className="text-white text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[#111827] border border-slate-800 rounded-xl py-3 px-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-white text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-[#111827] border border-slate-800 rounded-xl py-3 px-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-white text-sm font-medium">
                Store Name
              </label>
              <input
                type="text"
                placeholder="Ubreakfix Store"
                className="w-full bg-[#111827] border border-slate-800 rounded-xl py-3 px-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-white text-sm font-medium">
                Store Address{" "}
              </label>
              <input
                type="text"
                placeholder="123 Main Street, New York"
                className="w-full bg-[#111827] border border-slate-800 rounded-xl py-3 px-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>

            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="w-full md:w-1/2 bg-[#00D26A] hover:bg-[#00B85C] text-[#ffffff] font-bold py-3.5 rounded-2xl transition-all shadow-[0_0_20px_rgba(0,210,106,0.2)] text-xl"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilePasswordSection;
