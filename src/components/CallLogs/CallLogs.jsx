import CallList from "../CallList/CallList";

const CallLogs = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-6 min-h-screen bg-dashboard">
      {/* Call List */}
      <CallList />
    </div>
  );
};

export default CallLogs;
