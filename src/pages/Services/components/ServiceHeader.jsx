import React, { useState } from "react";
import {
  Phone,
  Globe,
  Shield,
  Zap,
  BarChart,
  Server,
  Wifi,
} from "lucide-react";

const VoipEnterpriseHero = () => {
  const [hoveredTab, setHoveredTab] = useState(null);
const quadrants = [
  {
    id: 'top-left',
    position: 'top-10 left-0 -translate-x-10',
    color: 'bg-blue-600',
    title: 'Global Network',
    desc: 'Tier-1 connectivity with 99.9% uptime.',
    icon: <Globe size={20} />
  },
  {
    id: 'top-right',
    position: 'top-10 right-0 translate-x-10',
    color: 'bg-purple-600',
    title: 'Smart Analytics',
    desc: 'Real-time CDR and QoS monitoring.',
    icon: <BarChart size={20} />
  },
  {
    id: 'bottom-left',
    position: 'bottom-7 left-2 -translate-x-10',
    color: 'bg-emerald-600',
    title: 'Security Shield',
    desc: 'End-to-end SRTP/TLS encryption.',
    icon: <Shield size={20} />
  },
  {
    id: 'bottom-right',
    position: 'bottom-7 right-2 translate-x-10',
    color: 'bg-orange-600',
    title: 'Auto Scaling',
    desc: 'Handle 10k+ concurrent calls easily.',
    icon: <Zap size={20} />
  }
];

  return (

    <div className="bg-white text-slate-900 font-sans overflow-hidden flex items-center justify-center p-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: HEADER CONTENT */}
        <div className="z-10 space-y-8">

          <h1 className="font-[system-ui] text-3xl sm:text-4xl leading-[1.08] tracking-tight text-gray-500">
  VOIP{" "}
  <span className="text-blue-500">
    INFRASTRUCTURE
  </span>
</h1>

<p className="font-['DM_Sans',sans-serif] text-gray-500 text-sm md:text-[16px] leading-7 tracking-normal
  text-justify max-w-[600px] [@media(min-width:1300px)]:max-w-[560px]">
Build a carrier-grade VoIP infrastructure designed for high-volume call centers and wholesale voice operations. Optimize call routing with intelligent LCR, ensure low-latency connectivity across global routes, and maintain superior call quality with real-time monitoring and failover systems. Scalable, secure, and engineered to handle millions of minutes without compromise.
</p>
          <div className="flex items-center gap-3 flex-wrap justify-center [@media(min-width:1300px)]:justify-start pt-1">
            <button className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold
              bg-blue-500 hover:bg-blue-600 transition-all duration-200 rounded-lg shadow-md shadow-blue-100 cursor-pointer">
              Get Started
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium
              text-gray-700 border border-gray-300 bg-gray-50
              hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 rounded-lg cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: THE EXPANDED ORBIT SYSTEM */}
        <div className="relative flex items-center justify-center h-[690] w-full">
          {/* THE INCREASED RADIUS ORBIT */}
<div className="relative w-[760px] h-[620px] flex items-center justify-center">
              {/* Background Decorative Circles */}
            <div className="absolute inset-0 rounded-full border border-slate-100 border-dashed animate-spin-slow" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-slate-50" />

            {/* QUADRANT TABS (Top Left, Top Right, Bottom Left, Bottom Right) */}
{quadrants.map((tab) => (
  <div
    key={tab.id}
    onMouseEnter={() => setHoveredTab(tab.id)}
    onMouseLeave={() => setHoveredTab(null)}
className={`absolute ${tab.position} z-30 
 w-[220px] h-[100px] px-4 py-3 rounded-2xl 
  transition-all duration-300 transform cursor-pointer
  flex items-center gap-4
  ${hoveredTab === tab.id
    ? `${tab.color} scale-105 shadow-xl`
    : "bg-white/80 backdrop-blur-md shadow-lg border border-slate-100"
  }`}
  >
    {/* LEFT ICON (BIGGER) */}
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors
        ${
          hoveredTab === tab.id
            ? "bg-white/20 text-white"
            : `${tab.color} text-white`
        }`}
    >
      {/* Increase icon size */}
      <div className="scale-125">
        {tab.icon}
      </div>
    </div>

    {/* RIGHT CONTENT (CENTERED) */}
    <div className="flex flex-col justify-center">
      <h3
        className={`font-semibold text-[14px] leading-tight
          ${hoveredTab === tab.id ? "text-white" : "text-slate-900"}`}
      >
        {tab.title}
      </h3>

      <p
        className={`text-[12px] leading-snug mt-1
          ${hoveredTab === tab.id ? "text-white/80" : "text-slate-500"}`}
      >
        {tab.desc}
      </p>
    </div>
  </div>
))}
            {/* 🔥 ANIMATED SIDE ICONS */}
            <div className="absolute inset-0 pointer-events-none">

              {/* LEFT SIDE */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center">

                <div className="icon-animate delay-0 bg-blue-500">
                  <Server size={20} />
                </div>

                <div className="icon-animate delay-1 bg-orange-500">
                  <Wifi size={20} />
                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center">

                <div className="icon-animate delay-2 bg-yellow-500">
                  <BarChart size={20} />
                </div>

                <div className="icon-animate delay-3 bg-emerald-500">
                  <Zap size={20} />
                </div>

              </div>

            </div>

            {/* CENTRAL MODERN DIALER */}
            <div className="relative z-40 bg-white p-4 rounded-[2.5rem] w-[220px] h-[420px] border border-gray-400 flex items-center justify-center">

              <div className="h-full w-full bg-white rounded-[2rem] flex flex-col justify-between p-4">

                {/* Header */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">VoIP Call</span>
                  <span className="text-xs text-green-500 font-semibold">● Live</span>
                </div>

                {/* Center Content */}
                <div className="flex flex-col items-center justify-center flex-1">

                  {/* Avatar */}
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <Phone size={22} />
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-800">
                    Incoming Call
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">+1 800 2344</p>

                  {/* Dial Pad */}
                  <div className="grid grid-cols-3 gap-3 w-full max-w-[160px]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((n) => (
                      <div
                        key={n}
                        className="h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700 shadow-sm hover:bg-blue-50 hover:text-blue-600 transition-all cursor-pointer"
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 ANIMATION STYLES */}
      <style jsx>{`
        .icon-animate {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          animation: float 3s ease-in-out infinite, pulse 2s infinite;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transition: transform 0.3s;
        }

        .icon-animate:hover {
          transform: scale(1.15);
        }

        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1s; }
        .delay-3 { animation-delay: 1.5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0,0,0,0.2); }
          70% { box-shadow: 0 0 0 10px rgba(0,0,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        }

        .animate-spin-slow {
          animation: spin 40s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default VoipEnterpriseHero;
