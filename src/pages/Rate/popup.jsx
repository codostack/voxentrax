import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const mockData = [
  { _id: "1", country: "Ireland", qualityDescription: "IVR Mobile", profile: "IVR", rate: 0.02 },
  { _id: "2", country: "China", qualityDescription: "CLI Routes", profile: "IVR", rate: 0.05 },
  { _id: "3", country: "USA", qualityDescription: "CC Routes", profile: "OutBound", rate: 0.03 },
  { _id: "4", country: "UK", qualityDescription: "Premium CLI", profile: "OutBound", rate: 0.06 },
  { _id: "5", country: "Germany", qualityDescription: "Premium CC", profile: "OutBound", rate: 0.04 },
  { _id: "6", country: "Australia", qualityDescription: "IVR Routes", profile: "IVR", rate: 0.07 },
  { _id: "7", country: "UAE", qualityDescription: "CLI Gulf", profile: "IVR", rate: 0.08 },
  { _id: "8", country: "Canada", qualityDescription: "CC North", profile: "OutBound", rate: 0.035 },
  { _id: "9", country: "France", qualityDescription: "EU Routes", profile: "IVR", rate: 0.025 },
  { _id: "10", country: "Japan", qualityDescription: "Asia CLI", profile: "OutBound", rate: 0.09 },
  { _id: "12", country: "Brazil", qualityDescription: "LATAM CC", profile: "OutBound", rate: 0.045 },
];

export default function RatePopupTable() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8;

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

  /* FILTER DATA */
  const filteredData = useMemo(() => {
    return mockData.filter((item) =>
      item.country.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
      {/* OPEN BUTTON - Vertical Orange Box on Right Edge */}
<div className="fixed top-1/2 right-0 -translate-y-1/2 z-[9998]">
  <button
    onClick={handleOpen}
    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg transition-all duration-200 flex items-center justify-center"
    style={{
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      padding: "20px 8px",
      fontSize: "14px",
      minHeight: "140px",
    }}
  >
    Special Rates
  </button>
</div>
      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex justify-end items-center pr-6">
          {/* OVERLAY */}
          <div
            onClick={handleClose}
            className={`absolute inset-0 bg-black/40 transition-opacity ${
              animate ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* RIGHT CENTER PANEL */}
          <div
            className={`relative w-full max-w-xl h-[80vh] mr-6 bg-white flex flex-col p-5 rounded-xl shadow-2xl transition-all duration-300 ${
              animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg text-orange-500 font-semibold">
                Special Rates
              </h2>

              <div className="flex items-center gap-3">
                {/* RATE VIEW BUTTON */}
                <button
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      navigate("/rate");
                    }, 200);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1.5 rounded"
                >
                  View Rate
                </button>

                {/* CLOSE BUTTON */}
                <button onClick={handleClose} className="text-red-500 text-xl">
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
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* TABLE */}
            <div className="overflow-y-auto flex-1">
              <table className="w-full text-sm">
                <thead className="bg-blue-600 text-white sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Country</th>
                    <th className="p-2 text-left">Quality Description</th>
                    <th className="p-2 text-left">Profile</th>
                    <th className="p-2 text-left">Rate</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedData.map((item) => (
                    <tr key={item._id} className="border-b hover:bg-gray-50">
                      <td className="p-2 text-gray-700">{item.country}</td>
                      <td className="p-2 text-xs text-gray-500">
                        {item.qualityDescription}
                      </td>
                      <td className="p-2">
                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                          {item.profile}
                        </span>
                      </td>
                      <td className="p-2 text-gray-700">
                        ${item.rate.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-3 py-2 border rounded disabled:opacity-40"
              >
                ←
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border rounded disabled:opacity-40"
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