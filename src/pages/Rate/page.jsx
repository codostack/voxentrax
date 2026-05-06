import { useState, useEffect } from "react";
import api from "../../api/axios";

const RateTable = ({ selectionMode = false }) => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    country: "",
    status: "",
    profile: "",
  });

  // ✅ Fetch API data
  const fetchRates = async () => {
    try {
      const res = await api.get("/rates");

      // adjust based on backend response
      const data = res.data;
console.log(data);

      setRates(data);
    } catch (err) {
      console.log("Error fetching rates:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  // ✅ Stats
  const totalRoutes = rates.length;
  const IVR = rates.filter(r => r.profile === "IVR").length;
  const OutBound = rates.filter(r => r.profile === "Outbound").length;
  const activeRoutes = rates.filter(r => r.status === "Active").length;

  // ✅ Filtering (hide rate 0 & 1)
const filtered = rates
  .filter(item => !item.hide) // hide = false only
  .filter(item => Number(item.rate) !== 0 && Number(item.rate) !== 1)
  .filter(item =>
    filters.country
      ? item.country.toLowerCase().includes(filters.country.toLowerCase())
      : true
  )
  .filter(item =>
    filters.status
      ? item.status === filters.status
      : true
  )
  .filter(item =>
    filters.profile
      ? item.profile === filters.profile
      : true
  );

  return (
    <>
      {/* Wrapper */}
      <div style={{ padding: "40px" }}>

        {/* Banner */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "28px 32px",
            marginBottom: "28px",
            border: "2px solid #436cdc",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "#1e3a8a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#fff" }}>₹</span>
              </div>

              <div>
                <p style={{ color: "#6b7280", fontSize: 12, margin: 0 }}>
                  Voice Rate Management
                </p>
                <h2 style={{ color: "#d0591e", fontSize: 20, fontWeight: 600, margin: 0 }}>
                  CC Voice Routes
                </h2>
              </div>
            </div>

            <div
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                padding: "6px 14px",
                borderRadius: 20,
              }}
            >
              <span style={{ color: "#119546", fontSize: 13 }}>
                ● Live Rates
              </span>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
            {[
              { label: "Total Countries", value: totalRoutes },
              { label: "Active Rates", value: activeRoutes },
              { label: "IVR Routes", value: IVR },
              { label: "Outbound Routes", value: OutBound },
            ].map(stat => (
              <div
                key={stat.label}
                style={{
                  background: "#f8fafc",
                  borderRadius: 10,
                  padding: 14,
                  border: "1px solid #e5e7eb",
                }}
              >
                <span style={{ color: "#6b7280", fontSize: 11 }}>
                  {stat.label}
                </span>
                <div style={{ color: "#1e3a8a", fontSize: 22 }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
          <button className="bg-blue-900 text-white px-4 py-2 rounded h-[40px]">
            CC Voice Routes
          </button>

          <div className="flex gap-2 flex-wrap">
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

        {/* Table */}
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "#1e3a8a", color: "#fff" }}>
              <tr>
                <th className="px-4 py-3 text-left">Country Code</th>
                <th className="px-4 py-3 text-left">Country</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-center">Profile</th>
                <th className="px-4 py-3 text-center">Rate</th>
                <th className="px-4 py-3 text-center">Billing</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-6">
                    Loading...
                  </td>
                </tr>
              ) : filtered.length > 0 ? (
                filtered.map((rate, index) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">
                    No results found
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