import React from "react";
import AppointmentCard from "../components/AppointmentCard/AppointmentCard";
import CopySection from "../components/CopySection/CopySection";
import UsersTable from "../components/UsersTable/UsersTable";
import Pagination from "../components/Pagination/Pagination";

const Appointment = () => {
  return (
    <div>
      <AppointmentCard />

      <div>
        <CopySection />
      </div>

      <div>
        <UsersTable />
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Appointment;
