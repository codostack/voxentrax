import { useState, useEffect, useRef } from "react";

const ArrowUpIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
  </svg>
);
const ArrowDownIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
  </svg>
);
const MicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10v2a7 7 0 0014 0v-2" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);
/* ── Animated Waveform ── */
function Waveform({ bars = 28, color = "#3b82f6", active = true }) {
  return (
    <svg viewBox={`0 0 ${bars * 9} 40`} fill="none" className="w-full h-8">
      {Array.from({ length: bars }).map((_, i) => {
        const h = active ? 10 + Math.sin(i * 0.7) * 9 + Math.sin(i * 1.5) * 6 : 4;
        const y = (40 - h) / 2;
        return (
          <rect
            key={i} x={i * 9 + 2} y={y} width={5} height={h} rx={2.5}
            fill={color} opacity={active ? 0.7 + (i % 3) * 0.1 : 0.25}
            style={active ? {
              transformOrigin: "center center",
              animation: `wavePulse ${1.0 + (i % 4) * 0.22}s ${(i * 0.08) % 1.5}s ease-in-out infinite`,
            } : {}}
          />
        );
      })}
    </svg>
  );
}

/* ── Live Call Ticker ── */
function useLiveCalls(base, variance, interval = 900) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      setVal(v => {
        const delta = Math.floor(Math.random() * variance * 2) - variance;
        return Math.max(base - variance * 3, Math.min(base + variance * 3, v + delta));
      });
    }, interval);
    return () => clearInterval(t);
  }, [base, variance, interval]);
  return val;
}

/* ── Continent data ── */
const CONTINENTS = [
  {
    id: "australia",
    label: "Australia",
    flag: "🌎",
    base: 3420,
    variance: 35,
    latency: "HD Quality",
    uptime: "99.98% Uptime",
    servers: 42,
    color: "#3b82f6",
    bg: "from-blue-50 to-blue-100/60",
    border: "border-blue-200",
    activeBorder: "border-blue-500",
    pill: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
    ring: "ring-blue-300",
    waveColor: "#3b82f6",
  },
  {
    id: "europe",
    label: "Europe",
    flag: "🌍",
    base: 2810,
    variance: 28,
    latency: "HD Quality",
    uptime: "99.99% Uptime",
    servers: 38,
    color: "#8b5cf6",
    bg: "from-violet-50 to-violet-100/60",
    border: "border-violet-200",
    activeBorder: "border-violet-500",
    pill: "bg-violet-100 text-violet-700",
    dot: "bg-violet-500",
    ring: "ring-violet-300",
    waveColor: "#8b5cf6",
  },
  {
    id: "asia",
    label: "Asia",
    flag: "🌏",
    base: 4150,
    variance: 45,
    latency: "HD Quality",
    uptime: "99.97% Uptime",
    servers: 55,
    color: "#f59e0b",
    bg: "from-amber-50 to-amber-100/60",
    border: "border-amber-200",
    activeBorder: "border-amber-500",
    pill: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
    ring: "ring-amber-300",
    waveColor: "#f59e0b",
  },
  {
    id: "america",
    label: "North America",
    flag: "🌍",
    base: 980,
    variance: 18,
    latency: "HD Quality",
    uptime: "99.94% Uptime",
    servers: 16,
    color: "#10b981",
    bg: "from-emerald-50 to-emerald-100/60",
    border: "border-emerald-200",
    activeBorder: "border-emerald-500",
    pill: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
    ring: "ring-emerald-300",
    waveColor: "#10b981",
  },
];

/* ── Live Call count per continent ── */


/* ── Main live call visualizer (top card) ── */
function LiveCallVisualizer({ continent }) {
  const totalCalls = useLiveCalls(continent.base, continent.variance, 700);
  const prevTotal = useRef(continent.base);
  const trending = totalCalls >= prevTotal.current;
  useEffect(() => { prevTotal.current = totalCalls; }, [totalCalls]);

  const [sparkData, setSparkData] = useState(() => Array.from({ length: 20 }, () => continent.base + Math.random() * 200 - 100));
  useEffect(() => {
    const t = setInterval(() => {
      setSparkData(d => [...d.slice(1), totalCalls]);
    }, 900);
    return () => clearInterval(t);
  }, [totalCalls]);

  const minS = Math.min(...sparkData);
  const maxS = Math.max(...sparkData) || minS + 1;
  const width = 250;
  const height = 60;

  // ✅ DEFINE THESE (you are missing this)
  const paddingLeft = 8;
  const paddingRight = 2;
  const paddingTop = 6;
  const paddingBottom = 14;

  const pointsArr = sparkData.map((v, i) => {
    const x =
      paddingLeft +
      (i / (sparkData.length - 1)) *
      (width - paddingLeft - paddingRight);

    const y =
      height -
      paddingBottom -
      ((v - minS) / (maxS - minS || 1)) *
      (height - paddingTop - paddingBottom);

    return [x, y];
  });

  const points = pointsArr.map(p => `${p[0]},${p[1]}`).join(" ");
  const graphColor = "#16a34a"; // Tailwind green-500
  return (
    <div
      className="relative rounded-2xl overflow-hidden border p-5 transition-all duration-500"
      style={{ height: "47vh" }}
    >
      {/* Glow blob */}
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none"
      />

      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{continent.flag}</span>
            <span className="font-['Syne',sans-serif] font-bold text-slate-800 text-base">{continent.label}</span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.6rem] font-semibold bg-green-100 text-green-600 border border-green-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" style={{ animation: "blink 1.4s ease-in-out infinite" }} />
              LIVE
            </span>
          </div>
          <p className="text-[0.68rem] text-slate-400 ml-7">Real-time call activity</p>
        </div>
        <div className="text-right">
          <p className="text-[0.65rem] text-slate-400">active calls</p>
          <div className="flex items-center justify-end gap-1.5">
            <span className="text-2xl" style={{ color: continent.color }}>
              {totalCalls.toLocaleString()}
            </span>
            <span className={`flex items-center gap-0.5 text-[0.65rem] font-semibold px-1.5 py-0.5 rounded-full ${trending ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"}`}>
              {trending ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </span>
          </div>
        </div>
      </div>

      {/* Waveform + Voice Button */}
      <div className="flex items-center gap-3 mb-3" style={{ marginTop: "40px" }}>

        {/* 🎤 Voice Button (ORANGE) */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full 
               bg-orange-500 text-white shadow-md hover:scale-105 
               active:scale-95 transition-all duration-200"
          style={{
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
        >
          <MicIcon />
        </button>

        {/* 🔊 Waveform + G711 Label */}
        <div className="relative">

          {/* ✅ G711 TEXT (top-right) */}
          <span className="absolute -top-3 right-0 text-[10px] text-gray-400 font-medium">
            G.711 codec
          </span>

          <Waveform bars={32} color="#f97316" active={true} />
        </div>
      </div>

      {/* Sparkline */}
      <div className="px-1" style={{ marginLeft: "-42px", marginRight: "-38px", marginTop: "18px" }}>
        <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="w-full h-32">
          <defs>
            {/* ✅ FIXED gradient */}
            <linearGradient id={`area-${continent.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={graphColor} stopOpacity="0.5" />
              <stop offset="100%" stopColor={graphColor} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <line
            x1={paddingLeft}
            y1={height - paddingBottom}
            x2={width - paddingRight}
            y2={height - paddingBottom}
            stroke="#e5e7eb"
            strokeWidth="0.2"
          />

          {/* ✅ FILLED AREA (FIXED START — no left overlap) */}
          <polygon
            points={`
        ${paddingLeft},${height - paddingBottom}
        ${points}
        ${width - paddingRight},${height - paddingBottom}
      `}
            fill={`url(#area-${continent.id})`}
          />

          {/* ✅ LINE */}
          <polyline
            points={points}
            fill="none"
            stroke={graphColor}
            strokeWidth="0.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* ✅ LAST POINT */}
          {pointsArr.length > 0 && (
            <circle
              cx={pointsArr[pointsArr.length - 1][0]}
              cy={pointsArr[pointsArr.length - 1][1]}
              r="3.5"
              fill={continent.color}
            />
          )}
        </svg>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { value: "HD Quality", color: "text-orange-500" },
          { value: "99.94% Uptime", color: "text-green-500" },
          { value: "Low Latency", color: "text-blue-500" },
        ].map((s, i) => (
          <div key={i} className="bg-white/70 rounded-xl px-3 py-2 border-[3px] border-slate-100 text-center">
            <div className={`font-semibold text-[0.78rem] ${s.color}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Continent mini card ── */
function ContinentCard({ continent, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(continent.id)}
      className={`flex-1 relative rounded-xl border-2 p-3 text-left transition-all duration-300 cursor-pointer group overflow-hidden
        ${selected
          ? `${continent.activeBorder} shadow-md ring-2 ${continent.ring}`
          : `${continent.border} hover:shadow-sm hover:border-opacity-60`}
        bg-gradient-to-br ${continent.bg}`}
    >
      {/* Glow on selected */}
      {selected && (
        <div className="absolute inset-0 opacity-10 pointer-events-none rounded-xl"
          style={{ background: continent.color }} />
      )}

      <div className="flex items-center justify-between mb-2">
        <span className="text-base">{continent.flag}</span>
        <span className={`w-2 h-2 rounded-full ${continent.dot} ${selected ? "" : "opacity-60"}`}
          style={selected ? { animation: "blink 1.2s ease-in-out infinite" } : {}} />
      </div>

      <div className="text-[0.68rem] font-semibold text-slate-700 leading-tight mb-1.5">{continent.label}</div>


    </button>
  );
}

/* ══════════════ MAIN COMPONENT ══════════════ */
export default function VoipHeader({ onGetStarted, onLearnMore}) {  
  
  const [selected, setSelected] = useState("australia");
  const activeCont = CONTINENTS.find(c => c.id === selected);

  return (
    <div className="relative min-h-[88vh] w-full bg-white overflow-hidden">
      <style data-no-translate>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        @keyframes wavePulse { 0%,100%{transform:scaleY(0.2)} 50%{transform:scaleY(1)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes shimmer { to{background-position:200% center} }
        @keyframes countUp { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .shimmer-text {
          background: linear-gradient(110deg,#0077ff 0%,#00aaff 45%,#0055dd 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
          @keyframes waveMove {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-2px);
  }
}
      `}</style>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[81vh] px-6 py-14 sm:px-10 sm:py-16
                      [@media(min-width:1300px)]:flex-row [@media(min-width:1300px)]:items-center
                      [@media(min-width:1300px)]:justify-between [@media(min-width:1300px)]:px-16 gap-10">

        {/* ══ LEFT ══ */}
        <div className="flex flex-col items-center text-center gap-6 w-full max-w-2xl
                        [@media(min-width:1300px)]:items-start [@media(min-width:1300px)]:text-left
                        [@media(min-width:1300px)]:ml-[25px] [@media(min-width:1300px)]:-mt-[60px]
                        [@media(min-width:1300px)]:max-w-none [@media(min-width:1300px)]:w-auto">
          <h1 className="font-[system-ui] text-3xl sm:text-4xl leading-[1.08] tracking-tight text-gray-500">
            Connecting Througt{" "}
            <span className="text-blue-500">
              Smart VoIP
            </span>
          </h1>
          <p className="font-['DM_Sans',sans-serif] text-gray-500 text-sm md:text-[16px] leading-7 tracking-normal
              text-justify max-w-[600px] [@media(min-width:1300px)]:max-w-[560px]">
            Transform the way your business connects with intelligent, cloud-powered
            communication solutions. Crystal-clear voice, smart call routing, and
            reliable global connectivity — built for speed, scale, and seamless collaboration.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center [@media(min-width:1300px)]:justify-start pt-1">
<button
  onClick={onGetStarted}
  className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold
  bg-blue-500 hover:bg-blue-600 transition-all duration-200 rounded-lg shadow-md shadow-blue-100 cursor-pointer"
>
  Get Started
</button>
<button
  onClick={onLearnMore}
  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium
  text-gray-700 border border-gray-300 bg-gray-50
  hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 rounded-lg cursor-pointer"
>
  Learn More
</button>
          </div>
        </div>

        {/* ══ RIGHT — hidden below 1300px ══ */}
        <div className="hidden [@media(min-width:1300px)]:flex flex-col gap-3 mr-[25px] w-[560px] -mt-4">

          {/* ── TOP: Live Call Visualizer ── */}
          <LiveCallVisualizer continent={activeCont} key={selected} />

          {/* ── BOTTOM: 4 Continent Cards ── */}
          <div className="flex gap-2.5">
            {CONTINENTS.map(c => (
              <ContinentCard
                key={c.id}
                continent={c}
                selected={selected === c.id}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}