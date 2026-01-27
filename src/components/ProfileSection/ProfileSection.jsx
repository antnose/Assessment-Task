import React from "react";

const ProfileSection = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-10 border-b border-slate-800/50 mb-10">
      {["Profile", "Password Settings"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-4 text-lg transition-all relative ${
            activeTab === tab
              ? "text-white font-medium"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProfileSection;
