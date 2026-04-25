import { useState } from "react";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const GlobeIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TechIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const GridIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <rect x="2" y="2" width="8" height="8" rx="1" />
    <rect x="14" y="2" width="8" height="8" rx="1" />
    <rect x="2" y="14" width="8" height="8" rx="1" />
    <rect x="14" y="14" width="8" height="8" rx="1" />
  </svg>
);

const SupportIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { name: "General",   sub: "Platform basics",   color: "#06b6d4", Icon: GlobeIcon  },
  { name: "Technical", sub: "Setup & Speed",      color: "#f97316", Icon: TechIcon   },
  { name: "Security",  sub: "Privacy & Fraud",    color: "#8b5cf6", Icon: ShieldIcon },
  { name: "Account",   sub: "Porting & Billing",  color: "#ec4899", Icon: UserIcon   },
  { name: "Features",  sub: "AI & Integrations",  color: "#10b981", Icon: GridIcon   },
  { name: "Support",   sub: "Emergency & Help",   color: "#3b82f6", Icon: SupportIcon},
];

const FAQS = [
  // General
  { id: 1,  cat: "General",   q: "What is VoIP?",                               a: "VoIP (Voice over Internet Protocol) allows you to make voice and video calls over the internet instead of traditional phone lines." },
  { id: 2,  cat: "General",   q: "Who can use VoIP services?",                  a: "VoIP is suitable for businesses of all sizes, remote teams, and individuals who need flexible communication." },
  { id: 3,  cat: "General",   q: "Can I make international calls?",              a: "Yes, VoIP allows you to make international calls at significantly reduced rates compared to traditional providers." },
  { id: 4,  cat: "General",   q: "How quickly can I get started?",               a: "Most users can set up and start using VoIP within minutes after account activation." },
  { id: 5,  cat: "General",   q: "Do I need special equipment?",                 a: "No special hardware is required. You can use VoIP on mobile apps, desktop software, or IP phones." },
  // Technical
  { id: 6,  cat: "Technical", q: "How does VoIP work?",                          a: "Your voice is converted into digital packets and transmitted securely over the internet using advanced codecs." },
  { id: 7,  cat: "Technical", q: "What internet speed is required?",             a: "A stable connection with at least 100 kbps per call is recommended for optimal quality." },
  { id: 8,  cat: "Technical", q: "What happens if my internet goes out?",        a: "We offer Call Continuity which automatically reroutes calls to your mobile device if your office internet fails." },
  { id: 9,  cat: "Technical", q: "What router settings are best?",               a: "Enabling Quality of Service (QoS) on your router to prioritize SIP traffic ensures the best audio quality." },
  { id: 10, cat: "Technical", q: "Does VoIP support HD audio?",                  a: "Yes, VoIP systems use wideband codecs to deliver HD voice quality over stable internet connections." },
  // Security
  { id: 11, cat: "Security",  q: "Is my data safe?",                             a: "We use TLS and SRTP end-to-end encryption, backed by ISO-certified cloud infrastructure." },
  { id: 12, cat: "Security",  q: "Do you protect against spam calls?",           a: "We implement AI-driven fraud detection, IP filtering, and traffic monitoring to prevent unauthorized access." },
  { id: 13, cat: "Security",  q: "How do you prevent vishing attacks?",          a: "We use STIR/SHAKEN protocols to verify caller ID and protect against number spoofing." },
  { id: 14, cat: "Security",  q: "Is VoIP encrypted?",                           a: "Yes, all calls and signaling are encrypted using modern industry standards." },
  { id: 15, cat: "Security",  q: "Can hackers intercept VoIP calls?",            a: "With encrypted transmission and secure infrastructure, interception is highly unlikely and prevented by default." },
  // Account
  { id: 16, cat: "Account",   q: "Can I port my existing number?",               a: "Yes — you can transfer your existing business number with zero downtime. Our team manages the entire process." },
  { id: 17, cat: "Account",   q: "Can I cancel anytime?",                        a: "Yes. There are no long-term contracts. You can upgrade, downgrade, or cancel anytime from your dashboard." },
  { id: 18, cat: "Account",   q: "Are there activation fees?",                   a: "No. Setup and activation are 100% free with no hidden charges." },
  { id: 19, cat: "Account",   q: "Can I use multiple devices?",                  a: "Yes, you can log in from multiple devices including mobile, desktop, and desk phones." },
  { id: 20, cat: "Account",   q: "Is billing monthly or yearly?",                a: "We offer flexible billing options including monthly and discounted yearly plans." },
  // Features
  { id: 21, cat: "Features",  q: "What features are included?",                  a: "HD calling, IVR systems, real-time analytics, recordings, and CRM integrations are included." },
  { id: 22, cat: "Features",  q: "Do you offer call recording?",                 a: "Yes, automatic and on-demand call recording is available with secure cloud storage." },
  { id: 23, cat: "Features",  q: "Does the platform support video conferencing?",a: "Yes, HD video conferencing with screen sharing and recording for up to 500 participants is supported." },
  { id: 24, cat: "Features",  q: "Is VoIP suitable for remote teams?",           a: "Yes, it enables global communication through voice, video, and messaging from anywhere." },
  { id: 25, cat: "Features",  q: "Does it integrate with CRM tools?",            a: "Yes, it integrates with popular CRM platforms for seamless workflow automation." },
  // Support
  { id: 26, cat: "Support",   q: "Can I use VoIP for emergency calls?",          a: "Yes, we support E911. You must maintain an updated physical address for emergency routing." },
  { id: 27, cat: "Support",   q: "What support is available?",                   a: "We provide 24/7 technical support via live chat, email, and phone." },
  { id: 28, cat: "Support",   q: "Is training provided for staff?",              a: "Yes, we offer free onboarding webinars and video tutorials." },
  { id: 29, cat: "Support",   q: "Do you provide setup assistance?",             a: "Yes, our team assists with full setup and configuration for businesses." },
  { id: 30, cat: "Support",   q: "How fast is your response time?",              a: "Most support queries are answered within minutes via live chat." },
];

// ─── FAQCard ──────────────────────────────────────────────────────────────────
function FAQCard({ faq, color, isOpen, onToggle }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid ${isOpen ? color : "#eaecf0"}`,
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-transparent border-none outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900 leading-snug">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-xl leading-none transition-all duration-300"
          style={{
            background: isOpen ? color : "#f9fafb",
            color: isOpen ? "#fff" : "#667085",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {/* Animated body */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: isOpen ? "400px" : "0" }}
      >
        <p className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function VoipFAQ() {
  const [activeCat, setActiveCat] = useState("General");
  const [search, setSearch]       = useState("");
  const [openId, setOpenId]       = useState(null);

  const activeColor = CATEGORIES.find(c => c.name === activeCat)?.color ?? "#06b6d4";

  const filtered = FAQS.filter(
    f => f.cat === activeCat && f.q.toLowerCase().includes(search.toLowerCase())
  );

  const handleCatChange = (name) => {
    setActiveCat(name);
    setSearch("");
    setOpenId(null);
  };

  const handleToggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "#fcfcfd", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section className="w-full px-3.5 py-2.5 min-h-screen">
        <div className="max-w-[1200px] mx-auto">

          {/* ── Header ── */}
          <header
            className="mb-3.5 px-5 py-2.5 text-center rounded-lg w-full"
            style={{
              border: "1px solid #eaecf0",
              boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
            }}
          >
            <span className="block text-[11px] font-bold uppercase tracking-[2.5px] text-gray-500 opacity-80 mb-4">
              Expert Guidance
            </span>
            <h1
              className="font-semibold leading-snug max-w-2xl mx-auto"
              style={{ fontSize: "clamp(24px, 4vw, 32px)", color: "#f4944f", letterSpacing: "-0.2px" }}
            >
              Helpful Answers to Your Questions
            </h1>
          </header>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-4 lg:gap-12 items-start">

            {/* ── Sidebar ── */}
            <aside className="lg:sticky lg:top-10">
              {/* Mobile: horizontal scroll strip */}
              {/* Tablet: 2-col grid */}
              {/* Desktop: vertical list */}
              <nav
                className="
                  flex flex-row gap-2 overflow-x-auto pb-2 -mx-3.5 px-3.5
                  sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 sm:gap-2.5
                  lg:flex lg:flex-col lg:gap-3 lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0
                "
                style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
              >
                {CATEGORIES.map(cat => {
                  const isActive = activeCat === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => handleCatChange(cat.name)}
                      className="
                        flex items-center bg-white rounded-xl cursor-pointer outline-none
                        transition-all duration-300 text-left
                        flex-none min-w-[148px] p-2.5
                        sm:flex-auto sm:min-w-0 sm:p-2.5
                        lg:p-2.5
                      "
                      style={{
                        border: `1px solid ${isActive ? "#3b82f6" : "#eaecf0"}`,
                        transform: isActive ? "translateX(8px)" : "translateX(0)",
                        boxShadow: isActive ? "0 10px 15px -3px rgba(0,0,0,0.08)" : "none",
                        scrollSnapAlign: "start",
                        // disable translateX on non-desktop
                        ...(typeof window !== "undefined" && window.innerWidth < 1024
                          ? { transform: "none" }
                          : {}),
                      }}
                      aria-pressed={isActive}
                    >
                      <div
                        className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl lg:rounded-xl flex items-center justify-center flex-shrink-0 mr-2.5"
                        style={{
                          background: cat.color,
                          color: "#fff",
                          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                        }}
                      >
                        <cat.Icon />
                      </div>
                      <div>
                        <span className="block text-[13px] lg:text-[15px] font-semibold text-gray-900">
                          {cat.name}
                        </span>
                        <span className="text-[11px] lg:text-xs text-gray-500">{cat.sub}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* ── Content ── */}
            <div>
              {/* Search */}
              <div className="relative mb-4 lg:mb-7">
                <span className="absolute left-[14px] lg:left-[18px] top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={e => { setSearch(e.target.value); setOpenId(null); }}
                  placeholder={`Search in ${activeCat}...`}
                  className="
                    w-full bg-white text-gray-900 outline-none transition-all duration-200
                    placeholder-gray-400
                    pl-10 pr-4 py-3 text-sm rounded-xl
                    lg:pl-[52px] lg:pr-5 lg:py-3.5 lg:text-[15px] lg:rounded-2xl
                  "
                  style={{
                    border: "1px solid #eaecf0",
                    boxShadow: "0 1px 2px rgba(16,24,40,0.04)",
                    fontFamily: "inherit",
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = activeColor;
                    e.target.style.boxShadow   = `0 0 0 4px ${activeColor}26`;
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = "#eaecf0";
                    e.target.style.boxShadow   = "0 1px 2px rgba(16,24,40,0.04)";
                  }}
                />
              </div>

              {/* Accordion list */}
              <div className="flex flex-col gap-2 lg:gap-3">
                {filtered.length > 0 ? (
                  filtered.map(faq => (
                    <FAQCard
                      key={faq.id}
                      faq={faq}
                      color={activeColor}
                      isOpen={openId === faq.id}
                      onToggle={() => handleToggle(faq.id)}
                    />
                  ))
                ) : (
                  <p className="text-gray-400 text-sm py-2">No results found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}