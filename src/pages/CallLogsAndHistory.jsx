import React from "react";
import SearchSort from "../components/SearchSort/SearchSort";
import CallLogs from "../components/CallLogs/CallLogs";

const CallLogsAndHistory = () => {
  return (
    <div>
      <div className="mt-4">
        <SearchSort />
      </div>

      <div>
        <CallLogs />
      </div>
    </div>
  );
};

export default CallLogsAndHistory;
