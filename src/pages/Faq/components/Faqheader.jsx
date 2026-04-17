import { FaUserPlus, FaMobileAlt, FaChartLine, FaSearch } from "react-icons/fa";
import { BiConversation, BiTargetLock } from "react-icons/bi";

function InfographicBars() {
  const bars = [
    { h: "h-[160px]", color: "bg-yellow-400", icon: <FaUserPlus /> },
    { h: "h-[230px]", color: "bg-orange-500", icon: <FaMobileAlt /> },
    { h: "h-[300px]", color: "bg-slate-700", icon: <BiConversation /> },
    { h: "h-[230px]", color: "bg-green-700", icon: <FaChartLine /> },
    { h: "h-[190px]", color: "bg-teal-500", icon: <BiTargetLock /> },
  ];

  return (
    <div className="flex items-end justify-center gap-3 w-full">
      {bars.map((bar, i) => (
        <div key={i} className="group flex flex-col items-center cursor-pointer">
          
          {/* BAR */}
          <div
            className={`
              relative
              w-[140px] md:w-[100px]
              ${bar.h}
              ${bar.color}
              rounded-t-[80px]
              flex items-start justify-center pt-6
              shadow-md
              transition-transform duration-300
              group-hover:scale-105
            `}
          >
            {/* ICON */}
            <div className="text-white text-[40px] md:text-[46px] transition-transform duration-300 group-hover:scale-110">
              {bar.icon}
            </div>

            {/* NUMBER (half inside / half outside) */}
            <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] w-10 h-10 rounded-full bg-white border-4 border-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm font-bold">{i + 1}</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function Faqheader() {
  return (
    <section className="h-auto md:h-[610px] flex items-center justify-center bg-white py-10 md:px-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
            Frequently <span className="text-blue-600">Asked</span> Questions
          </h1>

          <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
            Find quick answers to the most common questions about our platform,
            services, and integrations. We’ve gathered helpful information to guide
            you through setup, features, and support.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              View All FAQs
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:text-blue-600 hover:border-blue-600 transition">
              Contact Support
            </button>
          </div>
        </div>

<div className="flex-1 flex justify-end items-center">
  <div className="w-full max-w-[1100px] h-[420px] flex flex-col justify-end gap-6">

    {/* INFOGRAPHIC */}
    <div className="w-full flex justify-center">
      <InfographicBars />
    </div>

    {/* SEARCH BAR */}
    <div style={{marginTop:"15px"}} className="w-full flex justify-center">
      <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 w-[90%] max-w-[540px] border border-orange-400">
        
        <FaSearch className="text-gray-400 text-2xl" />

        <input
          type="text"
          placeholder="Search your questions..."
          className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>

  </div>
</div>

      </div>

    </section>
  );
}