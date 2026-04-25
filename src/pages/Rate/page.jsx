import { useState } from "react";

const RateTable = ({ selectionMode = false }) => {
  const [activeTab] = useState("cc");
  const [filters, setFilters] = useState({
    country: "",
    status: "",
    profile: "",
  });

  const dummyRates = [
    { _id: "1",  countryCode: "353", country: "Ireland",      qualityDescription: "IVR Mobile, CC Local & International EU Correct Display",  profile: "IVR",      rate: "0.00", billingCycle: "1/1", status: "Active",   type: "cc"  },
    { _id: "2",  countryCode: "359", country: "Bulgaria",     qualityDescription: "Outbound Mobile, CC Local Modified Display",                profile: "Outbound", rate: "0.02", billingCycle: "1/1", status: "Inactive", type: "cli" },
    { _id: "3",  countryCode: "375", country: "Belarus",      qualityDescription: "IVR Mobile, CC Local & International Correct Display",      profile: "IVR",      rate: "0.5",  billingCycle: "1/1", status: "Active",   type: "cc"  },
    { _id: "4",  countryCode: "33",  country: "France",       qualityDescription: "Outbound Mobile, CC Local Correct Display",                 profile: "Outbound", rate: "0.01", billingCycle: "1/1", status: "Active",   type: "cli" },
    { _id: "5",  countryCode: "91",  country: "India",        qualityDescription: "IVR Mobile, CC Premium Route",                              profile: "IVR",      rate: "0.03", billingCycle: "1/1", status: "Active",   type: "cc"  },
    { _id: "6",  countryCode: "1",   country: "USA",          qualityDescription: "Outbound Mobile, CLI Standard Route",                       profile: "Outbound", rate: "0.04", billingCycle: "1/1", status: "Inactive", type: "cli" },
    { _id: "7",  countryCode: "44",  country: "UK",           qualityDescription: "IVR Landline, CC Local Route",                              profile: "IVR",      rate: "0.06", billingCycle: "1/1", status: "Active",   type: "cc"  },
    { _id: "8",  countryCode: "49",  country: "Germany",      qualityDescription: "Outbound Mobile, CLI Premium Route",                        profile: "Outbound", rate: "0.05", billingCycle: "1/1", status: "Active",   type: "cli" },
    { _id: "9",  countryCode: "81",  country: "Japan",        qualityDescription: "IVR Mobile, CC International Route",                        profile: "IVR",      rate: "0.07", billingCycle: "1/1", status: "Inactive", type: "cc"  },
    { _id: "10", countryCode: "61",  country: "Australia",    qualityDescription: "Outbound Mobile, CLI Standard Route",                       profile: "Outbound", rate: "0.08", billingCycle: "1/1", status: "Active",   type: "cli" },
    { _id: "11", countryCode: "971", country: "UAE",          qualityDescription: "IVR Mobile, CC Gulf Route",                                 profile: "IVR",      rate: "0.09", billingCycle: "1/1", status: "Active",   type: "cc"  },
    { _id: "12", countryCode: "966", country: "Saudi Arabia", qualityDescription: "Outbound Mobile, CLI Gulf Route",                           profile: "Outbound", rate: "0.10", billingCycle: "1/1", status: "Inactive", type: "cli" },
  ];

  const totalRoutes  = dummyRates.length;
  const IVR          = 5;
  const OutBound     = 7;
  const activeRoutes = dummyRates.filter(r => r.status === "Active").length;

  const filtered = dummyRates
    .filter(item => item.type === activeTab)
    .filter(item => filters.country ? item.country.toLowerCase().includes(filters.country.toLowerCase()) : true)
    .filter(item => filters.status  ? item.status  === filters.status  : true)
    .filter(item => filters.profile ? item.profile === filters.profile : true);

  return (
    <>
      {/* ── Responsive styles ── */}
      <style>{`
        /* ── TABLET (≤1023px) ── */
        @media (max-width: 1023px) {
          .rt-wrapper { padding: 24px 16px !important; }

          .rt-banner { padding: 20px 18px !important; }
          .rt-banner-top { flex-wrap: wrap; gap: 12px; }
          .rt-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }

          .rt-toolbar { flex-direction: column !important; align-items: stretch !important; }
          .rt-toolbar-left  { width: 100%; }
          .rt-toolbar-right { width: 100%; display: flex; flex-wrap: wrap; gap: 8px; }
          .rt-toolbar-right input,
          .rt-toolbar-right select { flex: 1 1 140px; min-width: 120px; }

          .rt-table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; border-radius: 8px; }
          .rt-table { min-width: 680px; }
        }

        /* ── MOBILE (≤639px) ── */
        @media (max-width: 639px) {
          .rt-wrapper { padding: 16px 12px !important; }

          .rt-banner { padding: 16px 14px !important; margin-bottom: 18px !important; border-radius: 10px !important; }
          .rt-banner-icon { width: 36px !important; height: 36px !important; border-radius: 8px !important; }
          .rt-banner-icon svg { width: 18px !important; height: 18px !important; }
          .rt-banner-subtitle { font-size: 11px !important; }
          .rt-banner-title    { font-size: 17px !important; }
          .rt-badge { padding: 4px 10px !important; font-size: 11px !important; }
          .rt-badge-dot { width: 6px !important; height: 6px !important; }

          .rt-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .rt-stat-card  { padding: 10px !important; border-radius: 8px !important; }
          .rt-stat-label { font-size: 10px !important; }
          .rt-stat-value { font-size: 18px !important; }

          .rt-section-title { font-size: 16px !important; margin-bottom: 12px !important; }

          .rt-toolbar { gap: 10px !important; }
          .rt-toolbar-left button { width: 100%; font-size: 13px !important; height: 36px !important; }
          .rt-toolbar-right input,
          .rt-toolbar-right select { height: 36px !important; font-size: 13px !important; padding: 0 10px !important; }

          .rt-table th { font-size: 11px !important; padding: 10px 10px !important; white-space: nowrap; }
          .rt-table td { font-size: 11px !important; padding: 8px 10px !important; }
        }

        /* ── TINY (≤380px) ── */
        @media (max-width: 380px) {
          .rt-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .rt-stat-value { font-size: 16px !important; }
          .rt-table th, .rt-table td { font-size: 10px !important; padding: 7px 8px !important; }
        }

        /* Scrollbar styling for table */
        .rt-table-scroll::-webkit-scrollbar { height: 5px; }
        .rt-table-scroll::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
        .rt-table-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
      `}</style>

      <div className="rt-wrapper" style={{ padding: "40px" }}>

        {/* ── BANNER ── */}
        <div
          className="rt-banner"
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "28px 32px",
            marginBottom: "28px",
            border: "2px solid #436cdc",
          }}
        >
          {/* Top row */}
          <div className="rt-banner-top" style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              {/* Icon */}
              <div
                className="rt-banner-icon"
                style={{ width: 44, height: 44, borderRadius: 10, background: "#1e3a8a", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>

              <div>
                <p className="rt-banner-subtitle" style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                  Voice Rate Management
                </p>
                <h2 className="rt-banner-title" style={{ color: "#d0591e", fontSize: 20, fontWeight: 600, margin: 0 }}>
                  CC Voice Routes
                </h2>
              </div>
            </div>

            {/* Badge */}
            <div
              className="rt-badge"
              style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "6px 14px", borderRadius: 20, display: "flex", alignItems: "center", gap: 6, alignSelf: "flex-start" }}
            >
              <span className="rt-badge-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b619", flexShrink: 0 }} />
              <span style={{ color: "#119546", fontSize: 13 }}>Live Rates</span>
            </div>
          </div>

          {/* Stats */}
          <div className="rt-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { label: "Total Countries",  value: totalRoutes  },
              { label: "Active Rates",     value: activeRoutes },
              { label: "IVR Routes",       value: IVR          },
              { label: "Outbound Routes",  value: OutBound     },
            ].map(stat => (
              <div
                key={stat.label}
                className="rt-stat-card"
                style={{ background: "#f8fafc", borderRadius: 10, padding: 14, border: "1px solid #e5e7eb" }}
              >
                <span className="rt-stat-label" style={{ color: "#6b7280", fontSize: 11 }}>{stat.label}</span>
                <div  className="rt-stat-value" style={{ color: "#1e3a8a", fontSize: 22 }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section title ── */}
        <h2 className="rt-section-title text-xl font-semibold mb-4">Rate Table</h2>

        {/* ── Toolbar ── */}
        <div className="rt-toolbar flex flex-wrap justify-between items-center gap-3 mb-4">

          {/* Left */}
          <div className="rt-toolbar-left">
            <button className="bg-blue-900 text-white px-4 py-2 rounded h-[40px]">
              CC Voice Routes
            </button>
          </div>

          {/* Right — filters */}
          <div className="rt-toolbar-right flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Country"
              className="border px-4 rounded h-[40px]"
              onChange={e => setFilters({ ...filters, country: e.target.value })}
            />
            <select
              className="border px-4 rounded h-[40px]"
              onChange={e => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <select
              className="border px-4 rounded h-[40px]"
              onChange={e => setFilters({ ...filters, profile: e.target.value })}
            >
              <option value="">Profile</option>
              <option value="IVR">IVR</option>
              <option value="Outbound">Outbound</option>
            </select>
          </div>
        </div>

        {/* ── Table (horizontal scroll on small screens) ── */}
        <div className="rt-table-scroll" style={{ borderRadius: 8, border: "1px solid #e5e7eb" }}>
          <table className="rt-table min-w-full overflow-hidden" style={{ borderCollapse: "collapse", width: "100%" }}>
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
              {filtered.length > 0 ? (
                filtered.map((rate, index) => (
                  <tr key={rate._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2">{rate.countryCode}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{rate.country}</td>
                    <td className="px-4 py-2">{rate.qualityDescription}</td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">{rate.profile}</td>
                    <td className="px-4 py-2 text-center">{rate.rate}</td>
                    <td className="px-4 py-2 text-center">{rate.billingCycle}</td>
                    <td className={`px-4 py-2 font-semibold whitespace-nowrap ${rate.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                      {rate.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-gray-400 text-sm">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
};

export default RateTable;