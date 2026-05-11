import React, { useEffect, useState } from "react";

const waveBars = [4, 8, 14, 10, 18, 12, 20, 16, 10, 14];
const encBars = Array.from({ length: 12 }, (_, i) => i);
const countries = ["US", "GB", "CA", "AU", "JP", "SG", "DE", "AE"];

export default function VoIPHero({ onGetStarted, onLearnMore}) {
  const [tickets, setTickets] = useState(24);
  const [queued, setQueued] = useState(3);
const [language] = useState(() => {
  return localStorage.getItem("selectedLanguage") || "en";
});

useEffect(() => {
  localStorage.setItem("selectedLanguage", language);
}, [language]);

  useEffect(() => {
    const interval = setInterval(() => {

      // Tickets fluctuation
      setTickets(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(0, prev + change);
      });

      // ✅ Queued fluctuation (slower/smaller changes)
      setQueued(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1 to +1
        return Math.max(0, prev + change);
      });

    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Tickets", val: tickets, color: "#7c3aed", bg: "#f3e8ff" },
    { label: "Queued", val: queued, color: "#ea580c", bg: "#fff7ed" }, // ✅ dynamic
    { label: "Avg Wait", val: "0:18", color: "#2563eb", bg: "#eff6ff" },
    { label: "CSAT", val: "98%", color: "#059669", bg: "#ecfdf5" },
  ];

  const HEADING_TRANSLATIONS = {
  en: {
    line1: "Cloud VoIP Built for",
    highlight: "Modern Teams",
  },
  fr: {
    line1: "VoIP Cloud conçu pour",
    highlight: "les équipes modernes",
  },
  ar: {
    line1: "VoIP السحابي المصمم لـ",
    highlight: "الفرق الحديثة",
  },
  es: {
    line1: "VoIP en la nube para",
    highlight: "equipos modernos",
  },
  ja: {
    line1: "クラウドVoIPは",
    highlight: "現代のチーム向け",
  },
  de: {
    line1: "Cloud-VoIP für",
    highlight: "moderne Teams",
  },
  ko: {
    line1: "클라우드 VoIP는",
    highlight: "현대 팀을 위한",
  },
  it: {
    line1: "VoIP cloud per",
    highlight: "team moderni",
  },
  "zh-CN": {
    line1: "云端 VoIP 专为",
    highlight: "现代团队打造",
  },
};
const t = HEADING_TRANSLATIONS[language] || HEADING_TRANSLATIONS.en;

  return (
    <div
      style={{ height: "88vh" }}
      className="voip-hero w-full bg-white flex justify-around items-center px-1"
    >
      <style>{`
        @keyframes waveBar {
          from { transform: scaleY(0.5); }
          to { transform: scaleY(1.5); }
        }
        @keyframes signalFlow {
          to { stroke-dashoffset: -100; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-spin-reverse { animation: spin 6s linear infinite reverse; }
        .animate-float-b { animation: float 4s ease-in-out infinite; }
        .animate-pop-in { animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }

        /* ===== Responsive overrides — desktop view unchanged ===== */
        /* Tablet */
        @media (max-width: 1023px) {
          .voip-hero {
            flex-direction: column !important;
            justify-content: center !important;
            gap: 28px;
            padding: 32px 20px !important;
            height: auto !important;
            min-height: 88vh;
          }
          .voip-hero-left { text-align: center; }
          .voip-hero-right { padding: 16px !important; }
        }
        /* Mobile — hide the right-side animation entirely */
        @media (max-width: 767px) {
          .voip-hero {
            height: auto !important;
            min-height: 0 !important;
            padding: 36px 18px !important;
          }
          .voip-hero-right { display: none !important; }
          .voip-hero-left {
            width: 100%;
            text-align: center;
          }
          .voip-hero-left h1 { font-size: 26px !important; line-height: 1.15 !important; }
          .voip-hero-left p {
            font-size: 13px !important;
            line-height: 1.65 !important;
            text-align: justify !important;
            margin-left: auto;
            margin-right: auto;
          }
          .voip-hero-cta { justify-content: center !important; }
        }
        /* Very small phones */
        @media (max-width: 380px) {
          .voip-hero-left h1 { font-size: 22px !important; }
          .voip-hero-cta button { padding: 10px 16px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* ── Left Side: Content ── */}
      <div className="voip-hero-left space-y-8 animate-pop-in lg:col-span-1">
        <div className="space-y-4">

<h1 data-no-translate className="font-[system-ui] text-3xl sm:text-4xl leading-[1.08] tracking-tight text-gray-500">
  {t.line1}{" "}
  <span className="text-blue-500">
    {t.highlight}
  </span>
</h1>

          <p className="font-['DM_Sans',sans-serif] text-gray-500 text-sm md:text-[16px] leading-7 tracking-normal
    text-justify max-w-[600px] [@media(min-width:1300px)]:max-w-[560px]">
            Experience crystal-clear VoIP communication powered by next-generation infrastructure built for modern enterprises.
            Deliver secure, scalable, and ultra-low latency global calling with real-time analytics, intelligent routing, and 99.99% uptime for call centers, SaaS platforms, and wholesale carriers.
          </p>
        </div>

        <div className="voip-hero-cta flex items-center gap-3 flex-wrap justify-center [@media(min-width:1300px)]:justify-start pt-1">
          <button 
            onClick={onGetStarted}
          className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold
              bg-blue-500 hover:bg-blue-600 transition-all duration-200 rounded-lg shadow-md shadow-blue-100 cursor-pointer">
            Get Started
          </button>
          <button 
            onClick={onLearnMore}
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium
              text-gray-700 border border-gray-300 bg-gray-50
              hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 rounded-lg cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      {/* ── Right Side: Your Original Design ── */}
      <div className="voip-hero-right p-8 font-sans relative overflow-hidden rounded-3xl lg:col-span-2">
        <div className="relative grid grid-cols-2 gap-4 max-w-xl mx-auto">

          {/* Feature Cards */}
          <FeatureCard
            bg="bg-purple-50" border="border-purple-200"
            iconBg="bg-violet-700" titleColor="text-violet-900" subColor="text-violet-600"
            icon={<GridIcon />} title="SIP Server" sub={<><Dot color="#7c3aed" /> Online</>}
            animDelay="delay-100"
          >
            <div className="flex gap-0.5 items-end h-6">
              {waveBars.map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-purple-400 rounded-sm origin-bottom"
                  style={{ height: h, animation: `waveBar ${0.6 + i * 0.08}s ease-in-out ${i * 0.05}s infinite alternate` }}
                />
              ))}
            </div>
          </FeatureCard>

          <FeatureCard
            bg="bg-emerald-50" border="border-emerald-200"
            iconBg="bg-emerald-600" titleColor="text-emerald-900" subColor="text-emerald-600"
            icon={<GlobeIcon />} title="Global Reach" sub="150+ Countries"
            animDelay="delay-150"
          >
            <div style={{ marginTop: "17px" }} className="flex gap-1 flex-wrap">
              {countries.map((c) => (
                <img
                  key={c}
                  src={`https://flagcdn.com/w20/${c.toLowerCase()}.png`}
                  alt={c}
                  className="w-5 h-4 rounded-sm border border-emerald-200"
                />
              ))}
            </div>
          </FeatureCard>

          <FeatureCard
            bg="bg-orange-50" border="border-orange-200"
            iconBg="bg-orange-600" titleColor="text-orange-900" subColor="text-orange-500"
            icon={<BoltIcon />} title="Instant Connect" sub="<80ms latency"
            animDelay="delay-200"
          >
            <div className="bg-orange-100 rounded-lg p-2">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] text-orange-800">Latency</span>
                <span className="text-[11px] font-bold text-orange-800">78ms</span>
              </div>
              <div className="h-1 bg-orange-200 rounded-full">
                <div className="w-1/5 h-full bg-orange-500 rounded-full" />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            bg="bg-blue-50" border="border-blue-200"
            iconBg="bg-blue-600" titleColor="text-blue-900" subColor="text-blue-500"
            icon={<LockIcon />} title="E2E Encryption" sub="256-bit AES"
            animDelay="delay-300"
          >
            <div style={{ marginTop: "28px" }} className="flex gap-0.5 mt-1 items-center">
              {encBars.map((i) => (
                <div key={i} className={`w-1.5 h-4 rounded-sm ${i < 9 ? "bg-blue-200" : "bg-blue-600"}`} />
              ))}
              <span className="text-[10px] text-blue-700 font-medium ml-1">Secure</span>
            </div>
          </FeatureCard>

          {/* Live Team Hub */}
          <div className="col-span-2 bg-pink-50 border border-pink-200 rounded-2xl p-4 animate-float-b">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TeamIcon />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-pink-900">Live Team Hub</div>
                  <div className="text-[11px] text-pink-600">8 agents online now</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg p-2 text-center" style={{ background: s.bg }}>
                  <div className="text-sm font-bold" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-[10px] opacity-70" style={{ color: s.color }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Helper Components ── */

function FeatureCard({
  bg,
  border,
  iconBg,
  titleColor,
  subColor,
  icon,
  title,
  sub,
  animDelay,
  children
}) {
  return (
    <div
      style={{ marginBottom: "16px", padding: "26px" }}
      className={`${bg} ${border} border rounded-2xl  ${animDelay} animate-pop-in`}
    >
      <div className="flex items-center gap-3 mb-4">

        {/* Bigger Icon */}
        <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>

        <div>
          {/* Bigger Title */}
          <div className={`text-[16px] font-semibold ${titleColor}`}>
            {title}
          </div>

          {/* Bigger Subtitle */}
          <div className={`text-[13px] ${subColor} flex items-center gap-1`}>
            {sub}
          </div>
        </div>
      </div>

      {/* Content area slightly spaced */}
      <div className="text-sm">
        {children}
      </div>
    </div>
  );
}

function Dot({ color }) {
  return <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: color }} />;
}

const GridIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>;
const GlobeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>;
const BoltIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const LockIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>;
const TeamIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>;