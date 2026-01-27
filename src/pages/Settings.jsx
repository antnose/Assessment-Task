import React, { useState } from "react";
import profileImg from "../assets/profile.png";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import ProfileDetailsSection from "../components/ProfileDetailsSection/ProfileDetailsSection";
import ProfilePasswordSection from "../components/ProfilePasswordSection/ProfilePasswordSection";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const profileData = [
    { label: "Full Name:", value: "Jane D." },
    { label: "Email:", value: "jane@gmail.com" },
    { label: "Store Name:", value: "Ubreakfix Store" },
    { label: "Store Address:", value: "123 Main Street, New York, NY 10001" },
  ];

  return (
    <div className="p-8 min-h-screen bg-transparent">
      <ProfileSection activeTab={activeTab} setActiveTab={setActiveTab} />

      <ProfileDetailsSection
        profileData={profileData}
        activeTab={activeTab}
        profileImg={profileImg}
      />

      <ProfilePasswordSection activeTab={activeTab} />
    </div>
  );
};

export default Settings;
