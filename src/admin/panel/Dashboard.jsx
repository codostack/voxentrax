import { useState, useEffect } from "react";
import AdminNavbar from "../components/Navbar";
import api from "../../api/axios";

const RateTable = () => {
  const [filters] = useState({
    country: "",
    status: "",
    profile: "",
  });

  const [rates, setRates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [form, setForm] = useState({
    countryCode: "",
    country: "",
    qualityDescription: "",
    profile: "IVR",
    rate: "",
    billingCycle: "",
    status: "Active",
    specialRate: false,
    hide: false,
  });
  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/rates", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setRates(res.data);

    } catch (err) {
      console.log("Unauthorized:", err.response?.data);
    }
  };

  /* ---------------- FILTER (CLI ONLY) ---------------- */
  const filteredRates = rates
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
    );

  /* ---------------- ADD / UPDATE ---------------- */
  const handleSubmit = async () => {
    try {
      if (editData) {
        await api.put(
          `/rates/${editData.id}`,
          form
        );
      } else {
        await api.post("/rates", form);
      }

      setShowModal(false);
      setEditData(null);
      resetForm();
      fetchRates();
    } catch (err) {
      console.log(err);
    }
  };

  const resetForm = () => {
    setForm({
      countryCode: "",
      country: "",
      qualityDescription: "",
      profile: "IVR",
      rate: "",
      billingCycle: "",
      status: "Active",
      specialRate: false,
      hide: false,
    });
  };
  /* ---------------- EDIT ---------------- */
  const handleEdit = (item) => {
    setEditData(item);
    setForm({
      ...item,
      specialRate: item.specialRate === "Yes" || item.specialRate === true,
      hide: item.hide === "Yes" || item.hide === true,
    });
    setShowModal(true);
  };
  /* ---------------- DELETE ---------------- */
  const handleDelete = async () => {
    await api.delete(`/rates/${deleteId}`);
    setDeleteId(null);
    fetchRates();
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-4">
        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">CLI Rate Table</h2>

          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            + Add Rate
          </button>
        </div>

        {/* TABLE */}
        <table className="min-w-full border rounded overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-3 py-2 text-left">Code</th>
              <th className="px-3 py-2 text-left">Country</th>
              <th className="px-3 py-2 text-left">Quality</th>
              <th className="px-3 py-2 text-center">Profile</th>
              <th className="px-3 py-2 text-center">Rate</th>
              <th className="px-3 py-2 text-center">Billing</th>
              <th className="px-3 py-2 text-center">Special</th>
              <th className="px-3 py-2 text-center">Hide</th>
              <th className="px-3 py-2 text-center">Status</th>
              <th className="px-3 py-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRates.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {/* Code */}
                <td className="px-3 py-2 font-mono text-xs text-gray-500">
                  +{item.countryCode}
                </td>

                {/* Country */}
                <td className="px-3 py-2 font-medium">
                  {item.country}
                </td>

                {/* Quality */}
                <td className="px-3 py-2 text-xs text-gray-600 max-w-[250px] truncate">
                  {item.qualityDescription}
                </td>

                {/* Profile */}
                <td className="px-3 py-2 text-center">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 text-xs rounded">
                    {item.profile}
                  </span>
                </td>

                {/* Rate */}
                <td className="px-3 py-2 text-center font-semibold">
                  ${Number(item.rate).toFixed(2)}
                </td>

                {/* Billing */}
                <td className="px-3 py-2 text-center text-xs">
                  {item.billingCycle}
                </td>
                {/* Special Rate */}
                <td className="px-3 py-2 text-center">
                  {item.specialRate ? (
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">
                      Special
                    </span>
                  ) : (
                    <span className="text-gray-400 text-xs">Normal</span>
                  )}
                </td>
                {/* Hide */}
                <td className="px-3 py-2 text-center">
                  {item.hide ? (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                      Hidden
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                      Visible
                    </span>
                  )}
                </td>
                {/* Status */}
                <td className="px-3 py-2 text-center">
                  <span
                    className={`px-2 py-1 rounded text-xs ${item.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                      }`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-3 py-2 flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-400 px-2 py-1 rounded text-xs"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setDeleteId(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ---------------- MODAL ---------------- */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div className="bg-white p-6 rounded w-[450px]">

              <h3 className="mb-4 font-semibold text-lg">
                {editData ? "Edit Rate" : "Add Rate"}
              </h3>

              <div className="grid grid-cols-1 gap-3">

                {/* CODE */}
                <input
                  placeholder="Code"
                  value={form.countryCode}
                  onChange={(e) =>
                    setForm({ ...form, countryCode: e.target.value })
                  }
                  className="border p-2 rounded"
                />

                {/* COUNTRY */}
                <input
                  placeholder="Country Name"
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  className="border p-2 rounded"
                />

                {/* QUALITY */}
                <input
                  placeholder="Quality Description"
                  value={form.qualityDescription}
                  onChange={(e) =>
                    setForm({ ...form, qualityDescription: e.target.value })
                  }
                  className="border p-2 rounded"
                />

                {/* BILLING */}
                <input
                  placeholder="Billing Cycle"
                  value={form.billingCycle}
                  onChange={(e) =>
                    setForm({ ...form, billingCycle: e.target.value })
                  }
                  className="border p-2 rounded"
                />

                {/* RATE */}
                <input
                  placeholder="Rate"
                  value={form.rate}
                  onChange={(e) =>
                    setForm({ ...form, rate: e.target.value })
                  }
                  className="border p-2 rounded"
                />

                {/* PROFILE */}
                <select
                  value={form.profile}
                  onChange={(e) =>
                    setForm({ ...form, profile: e.target.value })
                  }
                  className="border p-2 rounded"
                >
                  <option>IVR</option>
                  <option>Outbound</option>
                </select>

                {/* STATUS */}
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({ ...form, status: e.target.value })
                  }
                  className="border p-2 rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>

                {/* SPECIAL RATE CHECKBOX */}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.specialRate}
                    onChange={(e) =>
                      setForm({ ...form, specialRate: e.target.checked })
                    }
                  />
                  Special Rate
                </label>

                {/* HIDE CHECKBOX */}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.hide}
                    onChange={(e) =>
                      setForm({ ...form, hide: e.target.checked })
                    }
                  />
                  Hide Rate
                </label>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 border rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  {editData ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DELETE CONFIRM */}
        {deleteId && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <div className="bg-white p-5 rounded w-[300px] text-center">
              <p className="mb-4">Are you sure you want to delete?</p>

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="px-3 py-1 border rounded"
                >
                  No
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </>

  );
};

export default RateTable;