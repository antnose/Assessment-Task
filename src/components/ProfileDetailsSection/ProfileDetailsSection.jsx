import React from "react";

const ProfileDetailsSection = ({ activeTab, profileData, profileImg }) => {
  return (
    <div>
      {activeTab === "Profile" && (
        <div className="max-w-2xl">
          <div className="mb-12">
            <p className="text-slate-400 text-sm mb-4">Profile Image</p>
            <div className="flex items-end gap-4">
              <div className="relative">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-slate-700 object-cover"
                />
              </div>
              <button className="bg-[#1e293b]/80 border border-blue-500/30 text-white text-xs px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/20 transition-all">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {profileData.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 items-center border-b border-slate-800/30 pb-4"
              >
                <span className="text-slate-400 text-sm">{item.label}</span>
                <span className="text-white text-sm font-medium col-span-2">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetailsSection;
