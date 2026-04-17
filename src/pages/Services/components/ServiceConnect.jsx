import { useState } from "react";

/* =========================
   PRIMARY BRAND COLOR
========================= */
const PRIMARY = "#004c4c";

const services = [
  {
    icon: "📞",
    title: "Cloud PBX",
    tagline: "Your office, anywhere",
    description:
      "A fully hosted private branch exchange system that eliminates hardware costs and scales with your team instantly.",
    features: ["Unlimited extensions", "Auto-attendant IVR", "Call routing", "Voicemail-to-email"],
    badge: "Most Popular",
  },
  {
    icon: "🌐",
    title: "SIP Trunking",
    tagline: "Connect with the world",
    description:
      "Replace traditional phone lines with high-capacity SIP trunks.",
    features: ["Unlimited concurrent calls", "DID numbers", "Failover routing", "HD voice quality"],
  },
  {
    icon: "📹",
    title: "Video Conferencing",
    tagline: "Face-to-face, anywhere",
    description:
      "Enterprise-grade video meetings with screen sharing and recording.",
    features: ["Up to 500 participants", "Screen sharing", "Cloud recording", "Breakout rooms"],
    badge: "New",
  },
  {
    icon: "📱",
    title: "Unified Communications",
    tagline: "All channels, one platform",
    description:
      "Voice, video, SMS, and chat unified in a single platform.",
    features: ["Cross-device sync", "Team messaging", "SMS & MMS", "CRM integration"],
  },
  {
    icon: "🔒",
    title: "Secure VoIP",
    tagline: "Privacy-first calling",
    description:
      "End-to-end encrypted calls with compliance-ready architecture.",
    features: ["E2E encryption", "HIPAA compliant", "Audit logs", "Two-factor auth"],
    badge: "Enterprise",
  },
  {
    icon: "📊",
    title: "Call Analytics",
    tagline: "Data behind every call",
    description:
      "Real-time dashboards turning call data into insights.",
    features: ["Live monitoring", "Custom reports", "Sentiment analysis", "Agent scoring"],
  },
];

const badgeColors = {
  "Most Popular": "bg-cyan-500 text-white",
  New: "bg-emerald-500 text-white",
  Enterprise: "bg-slate-700 text-white",
};

export default function VoIPPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="min-h-screen text-white pt-[70px]"
      style={{
        background:
          "linear-gradient(135deg, #0891b2 0%, #0891b2 40%, #0891b2 100%)",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* SERVICES */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
            Our Services
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            A complete suite of communication tools built to grow with your business.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 backdrop-blur-md"
              style={{
                background:
                  hovered === i
                    ? "rgba(255,255,255,0.18)"
                    : "rgba(255,255,255,0.10)",
                border:
                  hovered === i
                    ? "1px solid rgba(255,255,255,0.45)"
                    : "1px solid rgba(255,255,255,0.25)",
                transform:
                  hovered === i ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hovered === i
                    ? "0 14px 40px rgba(0,0,0,0.25)"
                    : "none",
              }}
            >
              {/* Badge */}
              {svc.badge && (
                <span
                  className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${badgeColors[svc.badge]}`}
                >
                  {svc.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: "rgba(255,255,255,0.25)",
                  border: "1px solid rgba(255,255,255,0.35)",
                }}
              >
                {svc.icon}
              </div>

              {/* TEXT */}
              <div>
                <div
                  className="text-[11px] font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "white" }}
                >
                  {svc.tagline}
                </div>

                <h3 className="text-xl font-black text-white mb-2">
                  {svc.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* FEATURES */}
              <ul className="flex flex-col gap-1.5 mt-auto">
                {svc.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-white/90"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                      style={{
                        background: "rgba(255,255,255,0.35)",
                        color: PRIMARY,
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className="mt-3 w-full py-2.5 rounded-lg text-sm font-bold transition-all duration-200"
                style={{
                  background:
                    hovered === i
                      ? "white"
                      : "rgba(255,255,255,0.15)",
                  color: hovered === i ? PRIMARY : "white",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}