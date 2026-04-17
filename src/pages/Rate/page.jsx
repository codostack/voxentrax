import { useState } from "react";

const RateTable = ({ selectionMode = false }) => {
  const [activeTab, setActiveTab] = useState("cc");
    const [filters, setFilters] = useState({
        country: "",
        status: "",
        profile: "",
    });
    // ✅ Dummy Data
const dummyRates = [
  {
    _id: "1",
    countryCode: "353",
    country: "Ireland",
    qualityDescription: "IVR Mobile, CC Local & International EU Correct Display",
    profile: "IVR",
    rate: "0.00",
    billingCycle: "1/1",
    status: "Active",
    type: "cc",
  },
  {
    _id: "2",
    countryCode: "359",
    country: "Bulgaria",
    qualityDescription: "Outbound Mobile, CC Local Modified Display",
    profile: "Outbound",
    rate: "0.02",
    billingCycle: "1/1",
    status: "Inactive",
    type: "cli",
  },
  {
    _id: "3",
    countryCode: "375",
    country: "Belarus",
    qualityDescription: "IVR Mobile, CC Local & International Correct Display",
    profile: "IVR",
    rate: "0.5",
    billingCycle: "1/1",
    status: "Active",
    type: "cc",
  },
  {
    _id: "4",
    countryCode: "33",
    country: "France",
    qualityDescription: "Outbound Mobile, CC Local Correct Display",
    profile: "Outbound",
    rate: "0.01",
    billingCycle: "1/1",
    status: "Active",
    type: "cli",
  },
  {
    _id: "5",
    countryCode: "91",
    country: "India",
    qualityDescription: "IVR Mobile, CC Premium Route",
    profile: "IVR",
    rate: "0.03",
    billingCycle: "1/1",
    status: "Active",
    type: "cc",
  },
  {
    _id: "6",
    countryCode: "1",
    country: "USA",
    qualityDescription: "Outbound Mobile, CLI Standard Route",
    profile: "Outbound",
    rate: "0.04",
    billingCycle: "1/1",
    status: "Inactive",
    type: "cli",
  },
  {
    _id: "7",
    countryCode: "44",
    country: "UK",
    qualityDescription: "IVR Landline, CC Local Route",
    profile: "IVR",
    rate: "0.06",
    billingCycle: "1/1",
    status: "Active",
    type: "cc",
  },
  {
    _id: "8",
    countryCode: "49",
    country: "Germany",
    qualityDescription: "Outbound Mobile, CLI Premium Route",
    profile: "Outbound",
    rate: "0.05",
    billingCycle: "1/1",
    status: "Active",
    type: "cli",
  },
  {
    _id: "9",
    countryCode: "81",
    country: "Japan",
    qualityDescription: "IVR Mobile, CC International Route",
    profile: "IVR",
    rate: "0.07",
    billingCycle: "1/1",
    status: "Inactive",
    type: "cc",
  },
  {
    _id: "10",
    countryCode: "61",
    country: "Australia",
    qualityDescription: "Outbound Mobile, CLI Standard Route",
    profile: "Outbound",
    rate: "0.08",
    billingCycle: "1/1",
    status: "Active",
    type: "cli",
  },
  {
    _id: "11",
    countryCode: "971",
    country: "UAE",
    qualityDescription: "IVR Mobile, CC Gulf Route",
    profile: "IVR",
    rate: "0.09",
    billingCycle: "1/1",
    status: "Active",
    type: "cc",
  },
  {
    _id: "12",
    countryCode: "966",
    country: "Saudi Arabia",
    qualityDescription: "Outbound Mobile, CLI Gulf Route",
    profile: "Outbound",
    rate: "0.1",
    billingCycle: "1/1",
    status: "Inactive",
    type: "cli",
  },
];

    return (
        <div className="p-4">
            {/* 🔹 Top Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Rate Table</h2>
            </div>

            {/* 🔹 Tabs */}
            <div className="flex justify-between items-center mb-4">
                {/* 🔹 Tabs (LEFT - unchanged) */}
                <div className="flex gap-2">

<div className="flex gap-2">
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded h-[40px]"
  >
    CLI Voice Routes
  </button>
</div>
                </div>

                {/* 🔹 Filters (RIGHT - new) */}
<div className="flex gap-2">
  <input
    type="text"
    placeholder="Country"
    className="border px-4 rounded h-[40px]"
    onChange={(e) =>
      setFilters({ ...filters, country: e.target.value })
    }
  />

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
            {/* 🔹 Table */}
            <table className="min-w-full border rounded overflow-hidden">
                <thead className="bg-blue-500 text-white">
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
  .filter((item) =>
    filters.status ? item.status === filters.status : true
  )
  .filter((item) =>
    filters.profile ? item.profile === filters.profile : true
  )
  .map((rate, index) => (
                        <tr
                            key={rate._id}
                            className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                        >
                            <td className="px-4 py-2">{rate.countryCode}</td>
                            <td className="px-4 py-2">{rate.country}</td>
                            <td className="px-4 py-2">{rate.qualityDescription}</td>
                            <td className="px-4 py-2 text-center">{rate.profile}</td>
                            <td className="px-4 py-2 text-center">{rate.rate}</td>
                            <td className="px-4 py-2 text-center">{rate.billingCycle}</td>

                            <td
                                className={`px-4 py-2 font-semibold ${rate.status === "Active"
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                            >
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