import { useState } from "react";

const RateTable = ({ selectionMode = false }) => {
  const [activeTab] = useState("cc");
  const [filters, setFilters] = useState({
    country: "",
    status: "",
    profile: "",
  });

  const dummyRates = [
    { _id: "1", countryCode: "353", country: "Ireland", qualityDescription: "IVR Mobile, CC Local & International EU Correct Display", profile: "IVR", rate: "0.00", billingCycle: "1/1", status: "Active", type: "cc" },
    { _id: "2", countryCode: "359", country: "Bulgaria", qualityDescription: "Outbound Mobile, CC Local Modified Display", profile: "Outbound", rate: "0.02", billingCycle: "1/1", status: "Inactive", type: "cli" },
    { _id: "3", countryCode: "375", country: "Belarus", qualityDescription: "IVR Mobile, CC Local & International Correct Display", profile: "IVR", rate: "0.5", billingCycle: "1/1", status: "Active", type: "cc" },
    { _id: "4", countryCode: "33", country: "France", qualityDescription: "Outbound Mobile, CC Local Correct Display", profile: "Outbound", rate: "0.01", billingCycle: "1/1", status: "Active", type: "cli" },
    { _id: "5", countryCode: "91", country: "India", qualityDescription: "IVR Mobile, CC Premium Route", profile: "IVR", rate: "0.03", billingCycle: "1/1", status: "Active", type: "cc" },
    { _id: "6", countryCode: "1", country: "USA", qualityDescription: "Outbound Mobile, CLI Standard Route", profile: "Outbound", rate: "0.04", billingCycle: "1/1", status: "Inactive", type: "cli" },
    { _id: "7", countryCode: "44", country: "UK", qualityDescription: "IVR Landline, CC Local Route", profile: "IVR", rate: "0.06", billingCycle: "1/1", status: "Active", type: "cc" },
    { _id: "8", countryCode: "49", country: "Germany", qualityDescription: "Outbound Mobile, CLI Premium Route", profile: "Outbound", rate: "0.05", billingCycle: "1/1", status: "Active", type: "cli" },
    { _id: "9", countryCode: "81", country: "Japan", qualityDescription: "IVR Mobile, CC International Route", profile: "IVR", rate: "0.07", billingCycle: "1/1", status: "Inactive", type: "cc" },
    { _id: "10", countryCode: "61", country: "Australia", qualityDescription: "Outbound Mobile, CLI Standard Route", profile: "Outbound", rate: "0.08", billingCycle: "1/1", status: "Active", type: "cli" },
    { _id: "11", countryCode: "971", country: "UAE", qualityDescription: "IVR Mobile, CC Gulf Route", profile: "IVR", rate: "0.09", billingCycle: "1/1", status: "Active", type: "cc" },
    { _id: "12", countryCode: "966", country: "Saudi Arabia", qualityDescription: "Outbound Mobile, CLI Gulf Route", profile: "Outbound", rate: "0.10", billingCycle: "1/1", status: "Inactive", type: "cli" },
  ];

  const totalRoutes = dummyRates.length;
  const IVR = 5;
  const OutBound = 7;
  const activeRoutes = dummyRates.filter((r) => r.status === "Active").length;

  return (
    <div className="p-10">

      {/* ─── BANNER ─── */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "14px",
          padding: "28px 32px",
          marginBottom: "28px",
          border: "2px solid #436cdc", // blue-900
        }}
      >

        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            
            {/* Icon */}
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#1e3a8a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>

            <div>
              <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>
                Voice Rate Management
              </p>
              <h2 style={{ color: "#d0591e", fontSize: "20px", fontWeight: 600 }}>
                CC Voice Routes
              </h2>
            </div>
          </div>

          {/* Badge */}
          <div style={{
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            padding: "6px 14px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}>
            <span style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#10b619"
            }} />
            <span style={{ color: "#119546", fontSize: "13px" }}>
              Live Rates
            </span>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {[
            { label: "Total Countries", value: totalRoutes },
            { label: "Active Rates", value: activeRoutes },
            { label: "IVR Routes", value: IVR },
            { label: "Outbound Routes", value: OutBound },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#f8fafc",
                borderRadius: "10px",
                padding: "14px",
                border: "1px solid #e5e7eb"
              }}
            >
              <span style={{ color: "#6b7280", fontSize: "11px" }}>
                {stat.label}
              </span>
              <div style={{ color: "#1e3a8a", fontSize: "22px" }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">Rate Table</h2>
<div className="flex flex-wrap justify-between items-center gap-3 mb-4">

  {/* LEFT SIDE (optional button) */}
  <div>
    <button className="bg-blue-900 text-white px-4 py-2 rounded h-[40px]">
      CC Voice Routes
    </button>
  </div>

  {/* RIGHT SIDE (FILTERS) */}
  <div className="flex gap-2 flex-wrap">

    {/* Country Filter */}
    <input
      type="text"
      placeholder="Country"
      className="border px-4 rounded h-[40px]"
      onChange={(e) =>
        setFilters({ ...filters, country: e.target.value })
      }
    />

    {/* Status Filter */}
    <select
      className="border px-4 rounded h-[40px]"
      onChange={(e) =>
        setFilters({ ...filters, status: e.target.value })
      }
    >
      <option value="">Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>

    {/* Profile Filter */}
    <select
      className="border px-4 rounded h-[40px]"
      onChange={(e) =>
        setFilters({ ...filters, profile: e.target.value })
      }
    >
      <option value="">Profile</option>
      <option value="IVR">IVR</option>
      <option value="Outbound">Outbound</option>
    </select>

  </div>
</div>
      {/* Table */}
      <table className="min-w-full border rounded overflow-hidden">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Country Code</th>
            <th className="px-4 py-3 text-left">Country Name</th>
            <th className="px-4 py-3 text-left">Rate Quality Description</th>
            <th className="px-4 py-3 text-center">Profile</th>
            <th className="px-4 py-3 text-center">Rate</th>
            <th className="px-4 py-3 text-center">Billing Cycle</th>
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>

<tbody>
  {dummyRates
    .filter((item) => item.type === activeTab)
    .filter((item) =>
      filters.country
        ? item.country.toLowerCase().includes(filters.country.toLowerCase())
        : true
    )
    .filter((item) =>
      filters.status ? item.status === filters.status : true
    )
    .filter((item) =>
      filters.profile ? item.profile === filters.profile : true
    )
    .map((rate, index) => (
      <tr key={rate._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
        <td className="px-4 py-2">{rate.countryCode}</td>
        <td className="px-4 py-2">{rate.country}</td>
        <td className="px-4 py-2">{rate.qualityDescription}</td>
        <td className="px-4 py-2 text-center">{rate.profile}</td>
        <td className="px-4 py-2 text-center">{rate.rate}</td>
        <td className="px-4 py-2 text-center">{rate.billingCycle}</td>
        <td className={`px-4 py-2 font-semibold ${
          rate.status === "Active" ? "text-green-600" : "text-red-600"
        }`}>
          {rate.status}
        </td>
      </tr>
    ))}
</tbody>
      </table>
    </div>
  );
};

export default RateTable;