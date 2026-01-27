import React from "react";

const UsersTable = () => {
  const tableData = [
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "09:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "10:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "11:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "12:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "02:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "03:00",
    },
  ];

  return (
    <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800">
              {[
                "Client Name",
                "Client Phone",
                "Client mail",
                "Device",
                "Repair Type",
                "Date",
                "Slot no",
                "Start Time",
              ].map((header) => (
                <th
                  key={header}
                  className="p-5 text-slate-400 font-medium text-sm"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors"
              >
                <td className="p-5 text-blue-400 text-sm font-medium">
                  {row.name}
                </td>
                <td className="p-5 text-slate-300 text-sm">{row.phone}</td>

                <td className="p-5 text-slate-300 text-sm">{row.mail}</td>

                <td className="p-5 text-slate-300 text-sm">{row.device}</td>

                <td className="p-5 text-slate-300 text-sm">{row.repair}</td>

                <td className="p-5 text-slate-300 text-sm">{row.date}</td>

                <td className="p-5 text-slate-300 text-sm">{row.slot}</td>

                <td className="p-5 text-slate-300 text-sm">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
