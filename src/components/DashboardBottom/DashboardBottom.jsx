import RecentActivity from "../RecentActivity/RecentActivity";
import TopRepairReq from "../TopRepairReq/TopRepairReq";

const DashboardBottom = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 mb-20">
      {/* Recent Activity */}
      <RecentActivity />

      {/* Top Repair Requests  */}
      <TopRepairReq />
    </div>
  );
};

export default DashboardBottom;
