import CallDetails from "../CallDetails/CallDetails";
import CallList from "../CallList/CallList";
import Conversion from "../Conversion/Conversion";

const CallLogs = () => {
  return (
    <div className="grid md:grid-cols-12 gap-6 p-6 min-h-screen bg-dashboard">
      {/* Call List */}
      <CallList />

      {/* Call Details */}
      <div className="md:col-span-7 bg-[#111827] rounded-2xl border border-slate-800">
        <CallDetails />

        <Conversion />
      </div>
    </div>
  );
};

export default CallLogs;
