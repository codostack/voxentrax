import { useState, useEffect, useRef } from "react";
import React from "react";

function VoIPHeroAnimation() {
  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: 340 }}>
      <svg viewBox="0 0 900 340" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="barGradA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="tinyGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <path id="pktPath1" d="M125 170 Q340 100 450 170 Q600 240 820 170" />
          <path id="pktPath2" d="M125 170 Q340 240 450 170 Q600 100 820 170" />
        </defs>

        {/* Background grid */}
        {[...Array(9)].map((_, i) => (
          <line key={`v${i}`} x1={100 * i + 50} y1="30" x2={100 * i + 50} y2="310"
            stroke="#0891b2" strokeWidth="0.4" opacity="0.07" />
        ))}
        {[60, 110, 170, 230, 280].map((y, i) => (
          <line key={`h${i}`} x1="40" y1={y} x2="860" y2={y}
            stroke="#0891b2" strokeWidth="0.4" opacity="0.07" />
        ))}


        <g transform="translate(10, 60)" filter="url(#softGlow)">
          {/* Phone body (dark grey) */}
          <rect x="0" y="20" width="110" height="200" rx="16" fill="#2b2b2b" opacity="0.95" />

          {/* Screen (yellow) */}
          <rect x="8" y="28" width="94" height="60" rx="8" fill="#facc15" opacity="0.9" />

          {/* Screen text lines (grey tones) */}
          <rect x="14" y="36" width="48" height="3" rx="1.5" fill="#374151" opacity="0.9" />
          <rect x="14" y="43" width="64" height="2" rx="1" fill="#6b7280" opacity="0.6" />
          <rect x="14" y="49" width="54" height="2" rx="1" fill="#6b7280" opacity="0.4" />

          {/* Status dot (green stays same) */}
          <circle cx="88" cy="37" r="4" fill="#22c55e" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.1s" repeatCount="indefinite" />
          </circle>

          {/* Keypad (grey) */}
          {[0, 1, 2].map(col => [0, 1, 2, 3].map(row => (
            <rect key={`k${col}${row}`}
              x={14 + col * 30}
              y={98 + row * 26}
              width="20"
              height="14"
              rx="4"
              fill="#374151"
              opacity={0.8 - row * 0.1}
            />
          )))}

          {/* Bottom dots */}
          {[0, 1, 2, 3, 4].map(i => (
            <circle key={i}
              cx={14 + i * 16}
              cy={202}
              r="2"
              fill="#9ca3af"
              opacity="0.5"
            />
          ))}

          {/* Signal rings (yellow accent) */}
          {[1, 2, 3].map(n => (
            <circle key={`rn${n}`}
              cx="55"
              cy="170"
              r="10"
              stroke="#facc15"
              strokeWidth="1.5"
              fill="none"
              opacity="0"
            >
              <animate attributeName="r"
                from="12"
                to={20 + 22 * n}
                dur="2.6s"
                begin={`${n * 0.7}s`}
                repeatCount="indefinite"
              />
              <animate attributeName="opacity"
                from="0.45"
                to="0"
                dur="2.6s"
                begin={`${n * 0.7}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        {/* CENTER: Cloud node + waveform */}
        <g transform="translate(390, 20)">
          <rect x="0" y="0" width="120" height="64" rx="18" fill="#0891b2" opacity="0.12" />
          <rect x="0" y="0" width="120" height="64" rx="18" stroke="#0891b2" strokeWidth="1" fill="none" opacity="0.4" />
          {[16, 28, 40, 52, 64, 76, 88].map((bh, i) => {
            const x = 14 + i * 14;
            const h = 10 + (bh % 36);
            return (
              <rect key={i} x={x} y={32 - h / 2} width="8" height={h} rx="3" fill="#0891b2" opacity="0.7">
                <animate attributeName="height"
                  values={`${h};${Math.max(6, h * 0.3)};${h};${Math.min(h * 1.4, 38)};${h}`}
                  dur={`${1.2 + i * 0.18}s`} begin={`${i * 0.12}s`} repeatCount="indefinite"
                  calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                <animate attributeName="y"
                  values={`${32 - h / 2};${32 - Math.max(6, h * 0.3) / 2};${32 - h / 2};${32 - Math.min(h * 1.4, 38) / 2};${32 - h / 2}`}
                  dur={`${1.2 + i * 0.18}s`} begin={`${i * 0.12}s`} repeatCount="indefinite"
                  calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
              </rect>
            );
          })}
          <circle cx="16" cy="56" r="4" fill="#22c55e">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <text x="26" y="60" fontSize="10" fill="#22c55e" fontFamily="monospace" letterSpacing="1">LIVE</text>
        </g>

        {/* Big waveform */}
        {[8, 18, 32, 48, 60, 72, 80, 72, 58, 44, 80, 68, 52, 76, 64, 48, 72, 54, 38, 22, 10].map((h, i) => {
          const x = 325 + i * 13;
          const dur = (1.0 + (i % 5) * 0.22).toFixed(2);
          const delay = (i * 0.06).toFixed(2);
          return (
            <rect key={i} x={x} y={200 - h / 2} width="8" height={h} rx="3.5"
              fill="#ff6a00" filter="url(#tinyGlow)" opacity="0.85">
              <animate attributeName="height"
                values={`${h};${Math.max(5, h * 0.2)};${h};${Math.min(h * 1.35, 90)};${h}`}
                dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite"
                calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
              <animate attributeName="y"
                values={`${200 - h / 2};${200 - Math.max(5, h * 0.2) / 2};${200 - h / 2};${200 - Math.min(h * 1.35, 90) / 2};${200 - h / 2}`}
                dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite"
                calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
            </rect>
          );
        })}

        <g transform="translate(800, 55)" filter="url(#softGlow)">
          {/* Headset band */}
          <path d="M12 80 Q50 10 88 80"
            stroke="#facc15"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Ear cups (grey) */}
          <rect x="0" y="70" width="28" height="46" rx="14" fill="#374151" />
          <rect x="76" y="70" width="28" height="46" rx="14" fill="#374151" />

          {/* Ear cup lines (light grey) */}
          {[0, 1, 2].map(i => (
            <line key={i}
              x1="7" y1={80 + i * 8}
              x2="21" y2={80 + i * 8}
              stroke="#d1d5db"
              strokeWidth="1.8"
              opacity="0.7"
              strokeLinecap="round"
            />
          ))}

          {[0, 1, 2].map(i => (
            <line key={i}
              x1="83" y1={80 + i * 8}
              x2="97" y2={80 + i * 8}
              stroke="#d1d5db"
              strokeWidth="1.8"
              opacity="0.7"
              strokeLinecap="round"
            />
          ))}

          {/* Mic arm */}
          <path d="M14 108 Q-10 132 -2 148"
            stroke="#facc15"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Mic tip */}
          <circle cx="-2" cy="150" r="7" fill="#facc15" opacity="0.9" />

          {/* Signal waves */}
          {[1, 2, 3].map(n => (
            <circle key={n}
              cx="50"
              cy="90"
              r="14"
              stroke="#facc15"
              strokeWidth="1.5"
              fill="none"
              opacity="0"
            >
              <animate attributeName="r"
                from="14"
                to={20 + 26 * n}
                dur="2.6s"
                begin={`${n * 0.8}s`}
                repeatCount="indefinite"
              />
              <animate attributeName="opacity"
                from="0.5"
                to="0"
                dur="2.6s"
                begin={`${n * 0.8}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        {/* Connecting dashed lines */}
        <path d="M155 170 Q300 120 390 170" stroke="#ec6b08" strokeWidth="1.2" strokeDasharray="7 5" opacity="0.3" fill="none" />
        <path d="M510 170 Q650 120 820 170" stroke="#ec6b08" strokeWidth="1.2" strokeDasharray="7 5" opacity="0.3" fill="none" />
        <path d="M155 170 Q300 220 390 170" stroke="#ec6b08" strokeWidth="0.8" strokeDasharray="5 7" opacity="0.15" fill="none" />
        <path d="M510 170 Q650 220 820 170" stroke="#ec6b08" strokeWidth="0.8" strokeDasharray="5 7" opacity="0.15" fill="none" />

        {/* Data packets */}
        {[0, 1, 2].map(i => (
          <circle key={`pa${i}`} r="5.5" fill="#3b82f6" filter="url(#tinyGlow)" opacity="0.9">
            <animateMotion dur="1.7s" repeatCount="indefinite" begin={`${i * 0.52}s`}>
              <mpath href="#pktPath1" />
            </animateMotion>
          </circle>
        ))}
        {[0, 1, 2].map(i => (
          <circle key={`pb${i}`} r="4" fill="#06b6d4" filter="url(#tinyGlow)" opacity="0.7">
            <animateMotion dur="2.1s" repeatCount="indefinite" begin={`${i * 0.65 + 0.3}s`}>
              <mpath href="#pktPath2" />
            </animateMotion>
          </circle>
        ))}

        {/* Status labels */}
        <text x="45" y="310" textAnchor="start" fontSize="10" fill="#374151" fontFamily="monospace" letterSpacing="1.5" opacity="0.8">CALLER</text>
        <text x="452" y="270" textAnchor="middle" fontSize="10" fill="#34353a" fontFamily="monospace" letterSpacing="1.5" opacity="0.8">VOICE CORE</text>
        <text x="860" y="230" textAnchor="middle" fontSize="10" fill="#374151" fontFamily="monospace" letterSpacing="1.5" opacity="0.8">AGENT</text>

        {/* Codec badges */}
        <rect x="340" y="284" width="84" height="22" rx="11" fill="#0891b2" opacity="0.12" stroke="#0891b2" strokeWidth="0.8" />
        <text x="382" y="299" textAnchor="middle" fontSize="10" fill="#374151" fontFamily="monospace" letterSpacing="0.5">G.711 · PCM</text>
        <rect x="450" y="284" width="74" height="22" rx="11" fill="#06b6d4" opacity="0.12" stroke="#06b6d4" strokeWidth="0.8" />
        <text x="487" y="299" textAnchor="middle" fontSize="10" fill="#374151" fontFamily="monospace" letterSpacing="0.5">G.729 . PCM</text>

        {/* Signal quality bar */}
        {[...Array(28)].map((_, i) => (
          <rect key={i} x={280 + i * 13} y={322} width="8" height="8" rx="2"
            fill={i < 22 ? "#0891b2" : "#e2e8f0"} opacity={i < 22 ? 0.7 : 0.3} />
        ))}
        <text x="280" y="340" fontSize="9" fill="#94a3b8" fontFamily="monospace">SIGNAL QUALITY</text>
        <text x="638" y="340" fontSize="9" fill="#0891b2" fontFamily="monospace">EXCELLENT</text>
      </svg>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      ref={ref}
      className="group relative bg-white border border-gray-200 hover:border-[#0891b2] rounded-2xl p-5 transition-all duration-500 hover:shadow-lg"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-14 h-14 rounded-2xl 
          bg-[#0891b2]/10 
          border border-[#0891b2]/30 
          flex items-center justify-center 
          text-[#0891b2]
          group-hover:scale-110 transition-transform duration-300"
        >
          <div className="w-7 h-7">{icon}</div>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold text-sm mb-1">{title}</h3>
          <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}
export default function VoIPLanding() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", plan: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24×7 Live Support",
    desc: "Round-the-clock expert assistance via chat, call, or ticket — real humans always.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Dedicated Account Manager",
    desc: "Your personal VoIP expert handles setup and scaling.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Free Test Available",
    desc: "Test our full platform risk-free for 14 days.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Enterprise-Grade Security",
    desc: "End-to-end encryption and real-time monitoring.",
  },

  // ✅ NEW FEATURE ADDED
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3 0-5 1.5-5 3s2 3 5 3 5 1.5 5 3-2 3-5 3m0-12V4m0 16v-2" />
      </svg>
    ),
    title: "Cost Effective Pricing",
    desc: "Flexible and affordable pricing plans designed to reduce communication costs without compromising quality.",
  },
];

  return (
    <>
      <style>{`
        @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.6; } 100% { transform: scale(1.6); opacity: 0; } }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900">

        {/* HERO */}
        <div className="bg-white border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-10 text-center">
            {/* <div className="max-w-7xl mx-auto px-6 pt-6 pb-10 text-center"> */}
            <h1 className="text-3xl md:text-4xl mb-10">
              Communication that{" "}
              <span className="text-blue-600">scales with you</span>
            </h1>
            <VoIPHeroAnimation />
          </div>
        </div>

<div
  className="mx-auto px-6 py-16 grid lg:grid-cols-[1.1fr_1.2fr] gap-16 lg:gap-24"
  style={{ maxWidth: "87rem" }}
>          {/* LEFT */}
<div>
  <p className="text-xs uppercase tracking-widest text-[#0891b2] mb-3">
    Why VoiceCore
  </p>

  <div className="flex flex-col gap-4">
    {features.map((f, i) => (
      <FeatureCard key={i} {...f} delay={i * 120} />
    ))}
  </div>
</div>

          {/* RIGHT FORM */}
          <div className="lg:sticky lg:top-8">
<div className="rounded-3xl overflow-hidden shadow-xl border border-cyan-100 h-[580px]">
                <div className="bg-[#0891b2] px-7 pt-7 pb-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white/80 font-medium tracking-wide">FREE TEST AVAILABLE</span>
                </div>
                <h2 className="text-xl font-bold text-white leading-snug">Start calling in minutes</h2>
                <p className="text-white/70 text-sm mt-1">No credit card. No contracts. Cancel anytime.</p>
              </div>

<div className="bg-white px-7 py-6 overflow-y-auto h-[calc(580px-120px)]">
                  {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">You're on the list!</h3>
                    <p className="text-gray-500 text-sm mt-1">We'll reach you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-500 font-medium block mb-1">Full Name *</label>
                        <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Alex Johnson"
                          className="w-full text-sm text-gray-800 placeholder-gray-300 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-[#0891b2] transition-all" />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium block mb-1">Phone *</label>
                        <input required value={form.phone} type="tel" onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+1 555 000 0000"
                          className="w-full text-sm text-gray-800 placeholder-gray-300 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-[#0891b2] transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium block mb-1">Work Email *</label>
                      <input required value={form.email} type="email" onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full text-sm text-gray-800 placeholder-gray-300 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-[#0891b2] transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-500 font-medium block mb-1">Country Name *</label>
                        <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Country Name"
                          className="w-full text-sm text-gray-800 placeholder-gray-300 border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-[#0891b2] transition-all" />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium block mb-1">Company Name *</label>
                        <input
                          value={form.company}
                          onChange={e => setForm({ ...form, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="col-span-2 w-full text-sm text-gray-800 placeholder-gray-300 border border-gray-200 rounded-xl px-3 py-2.5
      focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-[#0891b2] transition-all"
                        />

                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium block mb-1">Team Size</label>
                      <div className="grid grid-cols-4 gap-2">
                        {["1-10", "11-50", "51-200", "200+"].map(size => (
                          <button key={size} type="button"
                            onClick={() => setForm({ ...form, plan: size })}
                            className={`text-xs py-2 rounded-lg border font-medium transition-all ${form.plan === size
                              ? "bg-[#0891b2] text-white border-[#0891b2]"
                              : "bg-white text-gray-500 border-gray-200 hover:border-[#0891b2]"
                              }`}>
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full bg-[#0891b2] hover:bg-cyan-700 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-1 disabled:opacity-60">
                      {loading ? (
                        <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3V4a10 10 0 100 20v-2a8 8 0 01-8-8z" />
                        </svg>Processing...</>
                      ) : (
                        <>Submit
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-4 pt-1">
                      {[{ icon: "🔒", text: "Encrypted" }, { icon: "✓", text: "No CC needed" }, { icon: "★", text: "4.9/5 rated" }].map((item, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs text-gray-400">
                          <span>{item.icon}</span><span>{item.text}</span>
                        </span>
                      ))}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}