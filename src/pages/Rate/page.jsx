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
          background: "linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #2563eb 100%)",
          borderRadius: "14px",
          padding: "28px 32px",
          marginBottom: "28px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: "-50px", right: "120px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", top: "10px", right: "200px", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        {/* Top row: title + badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Icon */}
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: 0, letterSpacing: "0.08em", textTransform: "uppercase" }}>Voice Rate Management</p>
              <h2 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 600, margin: 0 }}>CC Voice Routes</h2>
            </div>
          </div>

          {/* Live badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "6px 14px", border: "1px solid rgba(255,255,255,0.2)" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 0 3px rgba(74,222,128,0.3)" }} />
            <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: 500 }}>Live Rates</span>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {[
            { label: "Total Countries", value: totalRoutes, suffix: "", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { label: "Active Rates", value: activeRoutes, suffix: "", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: "IVR Routes ", value: IVR, suffix: "", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
            { label: "OutBound Routes ", value: OutBound, suffix: "", icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ background: "rgba(255,255,255,0.12)", borderRadius: "10px", padding: "14px 16px", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={stat.icon} />
                </svg>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.07em" }}>{stat.label}</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700 }}>{stat.value}</span>
                {stat.suffix && <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px" }}>{stat.suffix}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ─── END BANNER ─── */}

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Rate Table</h2>
      </div>

      {/* Tabs + Filters */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="bg-blue-900 text-white px-4 py-2 rounded h-[40px]">
            CLI Voice Routes
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Country"
            className="border px-4 rounded h-[40px]"
            onChange={(e) => setFilters({ ...filters, country: e.target.value })}
          />
          <select
            className="border px-4 rounded h-[40px]"
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <select
            className="border px-4 rounded h-[40px]"
            onChange={(e) => setFilters({ ...filters, profile: e.target.value })}
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
            {selectionMode && <th className="px-4 py-3"></th>}
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
            .filter((item) => (filters.status ? item.status === filters.status : true))
            .filter((item) => (filters.profile ? item.profile === filters.profile : true))
            .map((rate, index) => (
              <tr key={rate._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="px-4 py-2">{rate.countryCode}</td>
                <td className="px-4 py-2">{rate.country}</td>
                <td className="px-4 py-2">{rate.qualityDescription}</td>
                <td className="px-4 py-2 text-center">{rate.profile}</td>
                <td className="px-4 py-2 text-center">{rate.rate}</td>
                <td className="px-4 py-2 text-center">{rate.billingCycle}</td>
                <td className={`px-4 py-2 font-semibold ${rate.status === "Active" ? "text-green-600" : "text-red-600"}`}>
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