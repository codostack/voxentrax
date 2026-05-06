import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function RatePopupTable() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(false);

  const rowsPerPage = 8;

  // ✅ FETCH API
  const fetchRates = async () => {
    try {
      setLoading(true);
      const res = await api.get("/rates");

      const data = res.data;

      setRates(data);
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  /* OPEN POPUP */
  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setAnimate(true), 10);
  };

  /* CLOSE POPUP */
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setOpen(false), 250);
  };

  // ✅ FILTER SPECIAL RATES
  const filteredData = useMemo(() => {
    return rates
      .filter(item => !item.hide) // ❌ hide true remove
      .filter(item => item.specialRate === true || item.specialRate === 1) // ✅ only special
      .filter(item =>
        item.country.toLowerCase().includes(search.toLowerCase())
      );
  }, [rates, search]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [currentPage, filteredData]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 z-[9998]">
        <button
          onClick={handleOpen}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg transition-all duration-200 flex items-center justify-center px-2 py-4 md:py-5 md:px-3 text-xs md:text-sm"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            minHeight: "100px",
          }}
        >
          Special Rates
        </button>
      </div>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex justify-end items-center md:pr-6">
          {/* OVERLAY */}
          <div
            onClick={handleClose}
            className={`absolute inset-0 bg-black/40 transition-opacity ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* PANEL */}
          <div
            className={`relative w-full md:max-w-xl h-full md:h-[80vh]
            bg-white flex flex-col p-4 md:p-5
            md:rounded-xl shadow-2xl transition-all duration-300
            ${animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-base md:text-lg text-orange-500 font-semibold">
                Special Rates
              </h2>

              <div className="flex items-center gap-2 md:gap-3">
                <button
                  onClick={() => {
                    handleClose();
                    setTimeout(() => navigate("/rate"), 200);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white text-xs md:text-sm px-2 md:px-3 py-1.5 rounded"
                >
                  View Rate
                </button>

                <button
                  onClick={handleClose}
                  className="text-red-500 text-lg md:text-xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* SEARCH */}
            <div className="my-3">
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border px-3 py-2 rounded text-sm"
              />
            </div>

            {/* TABLE */}
            <div className="flex-1 overflow-auto">
              <table className="w-full text-xs md:text-sm">
                <thead className="bg-blue-600 text-white sticky top-0 hidden md:table-header-group">
                  <tr>
                    <th className="p-2 text-left">Country</th>
                    <th className="p-2 text-left">Quality</th>
                    <th className="p-2 text-left">Profile</th>
                    <th className="p-2 text-left">Rate</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="text-center py-6">
                        Loading...
                      </td>
                    </tr>
                  ) : paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b hover:bg-gray-50 block md:table-row mb-3 md:mb-0 p-2 md:p-0 rounded bg-gray-50 md:bg-transparent"
                      >
                        <td className="p-2 block md:table-cell">
                          <span className="font-semibold md:hidden">Country: </span>
                          {item.country}
                        </td>

                        <td className="p-2 block md:table-cell text-gray-500 text-xs">
                          <span className="font-semibold md:hidden">Quality: </span>
                          {item.qualityDescription}
                        </td>

                        <td className="p-2 block md:table-cell">
                          <span className="font-semibold md:hidden">Profile: </span>
                          <span className="text-[10px] md:text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                            {item.profile}
                          </span>
                        </td>

                        <td className="p-2 block md:table-cell">
                          <span className="font-semibold md:hidden">Rate: </span>
                          ${Number(item.rate).toFixed(4)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center py-6 text-gray-400">
                        No Special Rates Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="flex justify-between mt-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-3 py-1.5 border rounded text-sm disabled:opacity-40"
              >
                ←
              </button>

              <span className="text-sm">
                Page {currentPage} / {totalPages || 1}
              </span>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 border rounded text-sm disabled:opacity-40"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}