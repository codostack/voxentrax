import { FaUserPlus, FaMobileAlt, FaChartLine, FaSearch } from "react-icons/fa";
import { BiConversation, BiTargetLock } from "react-icons/bi";

function InfographicBars() {
  const bars = [
    {
      heights: "h-[110px] sm:h-[140px] [@media(min-width:1200px)]:h-[160px]",
      color: "bg-yellow-400",
      icon: <FaUserPlus />,
    },
    {
      heights: "h-[150px] sm:h-[190px] [@media(min-width:1200px)]:h-[230px]",
      color: "bg-orange-500",
      icon: <FaMobileAlt />,
    },
    {
      heights: "h-[195px] sm:h-[250px] [@media(min-width:1200px)]:h-[300px]",
      color: "bg-slate-700",
      icon: <BiConversation />,
    },
    {
      heights: "h-[150px] sm:h-[190px] [@media(min-width:1200px)]:h-[230px]",
      color: "bg-green-700",
      icon: <FaChartLine />,
    },
    {
      heights: "h-[125px] sm:h-[160px] [@media(min-width:1200px)]:h-[190px]",
      color: "bg-teal-500",
      icon: <BiTargetLock />,
    },
  ];

  return (
    <div className="flex items-end justify-center gap-2 sm:gap-3 w-full">
      {bars.map((bar, i) => (
        <div key={i} className="group flex flex-col items-center cursor-pointer">

          {/* BAR */}
          <div
            className={`
              relative
              w-[52px] sm:w-[72px] [@media(min-width:1200px)]:w-[100px]
              ${bar.heights}
              ${bar.color}
              rounded-t-[40px] sm:rounded-t-[60px] [@media(min-width:1200px)]:rounded-t-[80px]
              flex items-start justify-center pt-3 sm:pt-4 [@media(min-width:1200px)]:pt-6
              shadow-md
              transition-transform duration-300
              group-hover:scale-105
            `}
          >
            {/* ICON */}
            <div className="text-white text-[20px] sm:text-[30px] [@media(min-width:1200px)]:text-[46px] transition-transform duration-300 group-hover:scale-110">
              {bar.icon}
            </div>

            {/* NUMBER (half inside / half outside) */}
            <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] w-7 h-7 sm:w-9 sm:h-9 [@media(min-width:1200px)]:w-10 [@media(min-width:1200px)]:h-10 rounded-full bg-white border-4 border-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-[11px] sm:text-xs [@media(min-width:1200px)]:text-sm font-bold">{i + 1}</span>
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
    <section className="h-auto [@media(min-width:1200px)]:h-[610px] flex items-center justify-center bg-white py-10 px-4 sm:px-6 [@media(min-width:1200px)]:px-16">
      <div className="max-w-7xl w-full flex flex-col [@media(min-width:1200px)]:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1 text-center [@media(min-width:1200px)]:text-left flex flex-col items-center [@media(min-width:1200px)]:items-start">
          <h1 className="font-[system-ui] text-3xl sm:text-4xl leading-[1.08] tracking-tight text-gray-500 mb-6">
            Frequently Asked{" "}
            <span className="text-blue-500">
              Questions
            </span>
          </h1>

          <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
            Find quick answers to the most common questions about our platform,
            services, and integrations. We've gathered helpful information to guide
            you through setup, features, and support.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center [@media(min-width:1300px)]:justify-start pt-1">
            <button className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold
              bg-blue-500 hover:bg-blue-600 transition-all duration-200 rounded-lg shadow-md shadow-blue-100 cursor-pointer">
              View All FAQs
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium
              text-gray-700 border border-gray-300 bg-gray-50
              hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 rounded-lg cursor-pointer">
              Contact Support
            </button>
          </div>
        </div>

        {/* RIGHT — drops below the left column until 1200px */}
        <div className="flex-1 flex justify-center [@media(min-width:1200px)]:justify-end items-center w-full [@media(min-width:1200px)]:mt-[-60px]">
          <div className="w-full max-w-[1100px] h-auto [@media(min-width:1200px)]:h-[420px] flex flex-col justify-end gap-4 [@media(min-width:1200px)]:gap-6">

            {/* INFOGRAPHIC */}
            <div className="w-full flex justify-center">
              <InfographicBars />
            </div>

            {/* SEARCH BAR */}
            <div className="w-full flex justify-center mt-4 [@media(min-width:1200px)]:mt-[15px]">
              <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 w-[95%] sm:w-[90%] max-w-[540px] border border-orange-400">
                <FaSearch className="text-gray-400 text-xl sm:text-2xl flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search your questions..."
                  className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}