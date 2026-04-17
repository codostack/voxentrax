import { useEffect, useState } from "react";
import {
  FaUserPlus,
  FaMobileAlt,

  FaSearch,
 
} from "react-icons/fa";
import { BiConversation } from "react-icons/bi";
import { BiTargetLock } from "react-icons/bi";

/* ── INFOGRAPHIC BARS ── */
function InfographicBars() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((prev) => (prev + 1) % 5);
    }, 1600);
    return () => clearInterval(i);
  }, []);

  // 🔥 CONFIG
  const BAR_WIDTH = 110;
  const HALF = BAR_WIDTH / 2;
  const CURVE = 50;
const GAP = 10;
const bars = [
  { h: 110, color: "#f4c542" },
  { h: 170, color: "#f97316" },
  { h: 230, color: "#2f4858" },
  { h: 170, color: "#9bb27b" },
  { h: 140, color: "#5f9ea0" },
].map((bar, i) => ({
  ...bar,
  x: i * (BAR_WIDTH + GAP) + 10, // 🔥 perfect spacing
}));

  return (
    <div className="w-full flex justify-center">
      <svg viewBox="0 0 700 320" className="w-full max-w-[700px]">

        {/* SHADOW */}
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.15" />
          </filter>
        </defs>

        {bars.map((bar, i) => {
          const y = 280 - bar.h;

          return (
            <g
              key={i}
              filter="url(#shadow)"
           style={{
  transform:
    active === i
      ? "translateY(12px) scale(1.02)"
      : "translateY(0)",
  transition: "transform 0.5s ease",
}}
            >
              {/* BAR SHAPE */}
              <path
                d={`
                  M ${bar.x} 280
                  L ${bar.x} ${y + CURVE}
                  Q ${bar.x} ${y} ${bar.x + HALF} ${y}
                  Q ${bar.x + BAR_WIDTH} ${y} ${bar.x + BAR_WIDTH} ${y + CURVE}
                  L ${bar.x + BAR_WIDTH} 280
                  Z
                `}
                fill={bar.color}
              />

              {/* ICONS */}
 {/* ICONS (INFOGRAPHIC STYLE - CENTERED & BOLD) */}

{/* ICONS (UNIFIED INFOGRAPHIC STYLE) */}

{/* 1 */}
{i === 0 && (
  <foreignObject x={bar.x + HALF - 28} y={y + 10} width="56" height="56">
    <div className="w-full h-full flex items-start justify-center">
      <FaUserPlus className="text-white text-3xl mt-1" />
    </div>
  </foreignObject>
)}

{/* 2 */}
{i === 1 && (
  <foreignObject x={bar.x + HALF - 28} y={y + 10} width="56" height="56">
    <div className="w-full h-full flex items-start justify-center">
      <FaMobileAlt className="text-white text-3xl mt-1" />
    </div>
  </foreignObject>
)}

{/* 3 (MAIN BIG ONE) */}
{i === 2 && (
  <foreignObject x={bar.x + HALF - 32} y={y + 6} width="64" height="64">
    <div className="w-full h-full flex items-start justify-center">
      <BiConversation  className="text-white text-4xl mt-1" />
    </div>
  </foreignObject>
)}

{/* 4 */}
{i === 3 && (
  <foreignObject x={bar.x + HALF - 28} y={y + 10} width="56" height="56">
    <div className="w-full h-full flex items-start justify-center">
      <FaSearch className="text-white text-3xl mt-1" />
    </div>
  </foreignObject>
)}

{/* 5 */}
{i === 4 && (
  <foreignObject x={bar.x + HALF - 28} y={y + 10} width="56" height="56">
    <div className="w-full h-full flex items-start justify-center">
      <BiTargetLock  className="text-white text-3xl mt-1" />
    </div>
  </foreignObject>
)}
              {/* NUMBER */}
              <circle
  cx={bar.x + HALF}
  cy="280"
  r="16"
 fill={bar.color} 
  stroke="#ffffff"
  strokeWidth="2"
/>
              <text
                x={bar.x + HALF}
                y="285"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill="#f4f4f4"
              >
                {i + 1}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function Faqheader() {
  return (
 <section className="h-[610px] flex items-center justify-center lg:justify-end bg-white py-7 md:px-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center ">

        {/* LEFT */}
        <div className="flex-1 h-[400px]">
          <h1 className="text-4xl md:text-5xl  text-slate-900 leading-tight mb-6">
            Frequently 
            <span className="text-blue-600">Asked</span> Questions
          </h1>

          <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
           Find quick answers to the most common questions about our platform,
    services, and integrations. We’ve gathered helpful information to guide
    you through setup, features, and support so you can get started with
    confidence and make the most of your experience.
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

   <div className="flex-1 flex justify-end items-center pl-10">
  <div className="w-full max-w-[700px] h-[400px]">
    <InfographicBars />
  </div>
</div>
      </div>
    </section>
  );
}