import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

/* ✅ Your Data Structure */
const mockData = [
  {
    _id: "1",
    country: "Ireland",
    qualityDescription:
      "IVR Mobile, CC Local & International EU Correct Display",
    profile: "IVR",
    rate: 0.02,
    billingCycle: "1/1",
  },
  {
    _id: "2",
    country: "India",
    qualityDescription: "High Quality CLI Routes",
    profile: "CLI",
    rate: 0.05,
    billingCycle: "60/60",
  },
  {
    _id: "3",
    country: "USA",
    qualityDescription: "Standard CC Routes",
    profile: "CC",
    rate: 0.03,
    billingCycle: "30/6",
  },
  {
    _id: "4",
    country: "UK",
    qualityDescription: "Premium CLI Routes",
    profile: "CLI",
    rate: 0.06,
    billingCycle: "60/60",
  },
];

export default function PopupRateTable() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  /* ✅ Filter */
  const filtered = useMemo(() => {
    return mockData.filter((r) =>
      r.country.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  /* ✅ Graph Data */
  const chartData = filtered.map((item) => ({
    name: item.country,
    rate: item.rate,
  }));

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow-lg"
      >
        View Rates
      </button>

      {/* Drawer Popup */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex justify-end">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Right Panel */}
          <div className="relative w-full max-w-xl h-full bg-white shadow-2xl flex flex-col animate-slideIn">

            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Rate Table
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-red-500 text-lg"
              >
                ✕
              </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>

            {/* Table */}
            <div className="flex-1 overflow-y-auto px-4">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-gray-400">
                      Country
                    </th>
                    <th className="px-3 py-2 text-left text-gray-400">
                      Quality
                    </th>
                    <th className="px-3 py-2 text-left text-gray-400">
                      Profile
                    </th>
                    <th className="px-3 py-2 text-left text-gray-400">
                      Rate
                    </th>
                    <th className="px-3 py-2 text-left text-gray-400">
                      Billing
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="px-3 py-2 font-medium">
                        {item.country}
                      </td>

                      <td className="px-3 py-2 text-gray-500 text-xs leading-snug">
                        {item.qualityDescription}
                      </td>

                      <td className="px-3 py-2">
                        <span className="px-2 py-1 text-xs rounded bg-blue-50 text-blue-600">
                          {item.profile}
                        </span>
                      </td>

                      <td className="px-3 py-2 font-semibold text-gray-800">
                        ${item.rate.toFixed(2)}
                      </td>

                      <td className="px-3 py-2 text-gray-500">
                        {item.billingCycle}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filtered.length === 0 && (
                <p className="text-center py-6 text-gray-400 text-sm">
                  No data found
                </p>
              )}
            </div>

            {/* Graph */}
            <div className="p-5 border-t bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Rate Analytics
              </h3>

              <div className="w-full h-44 bg-white rounded-xl p-3 shadow-sm">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#2563eb"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        `}
      </style>
    </>
  );
}