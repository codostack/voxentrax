import { useState } from "react";

const faqs = [
  {
    q: "How do I get started with the platform?",
    a: "Simply sign up for a free account, complete the onboarding checklist, and you'll be up and running in under 5 minutes. Our setup wizard guides you through each step.",
  },
  {
    q: "What integrations are supported?",
    a: "We support 100+ integrations including Slack, Salesforce, HubSpot, Zapier, Google Workspace, and more. Our REST API also allows custom integrations for enterprise teams.",
  },
  {
    q: "Is my data secure and private?",
    a: "Absolutely. We use AES-256 encryption at rest and TLS 1.3 in transit. We are SOC 2 Type II certified and GDPR compliant. Your data is never sold or shared with third parties.",
  },
  {
    q: "Can I change my plan at any time?",
    a: "Yes, you can upgrade or downgrade your plan anytime from the billing section. Changes take effect immediately and any unused credit is prorated to your next invoice.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach our support team via live chat, email at support@platform.com, or by submitting a ticket through the Help Center. Response time is under 2 hours on business days.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to start. You'll be prompted to choose a plan only when the trial ends.",
  },
];

function PlusIcon({ open }) {
  return (
    <div
      className="flex-shrink-0 w-[26px] h-[26px] rounded-full flex items-center justify-center transition-transform duration-300"
      style={{
        background: "#f47320",
        transform: open ? "rotate(45deg)" : "rotate(0deg)",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
        <line x1="6" y1="1" x2="6" y2="11" />
        <line x1="1" y1="6" x2="11" y2="6" />
      </svg>
    </div>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        className="w-full text-left flex justify-between items-center gap-3 py-4 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[14.5px] font-semibold text-gray-900 leading-snug">{faq.q}</span>
        <PlusIcon open={open} />
      </button>
      <div
        className="text-sm text-gray-500 leading-relaxed overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "200px" : "0px", paddingBottom: open ? "16px" : "0px" }}
      >
        {faq.a}
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((f) =>
    f.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="flex min-h-screen flex-wrap" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* LEFT — orange content panel */}
      <div className="flex-1 flex flex-col justify-center px-12 py-14" style={{ background: "#f47320", minWidth: "300px" }}>

        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-7 w-fit"
          style={{ background: "rgba(255,255,255,0.18)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          Support Center
        </div>

        <h1 className="text-white font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(28px,3.2vw,42px)" }}>
          Frequently Asked<br />Questions
        </h1>

        <p className="text-sm mb-9 leading-7" style={{ color: "rgba(255,255,255,0.85)" }}>
          Find quick answers to the most common questions about our platform,
          services, and integrations. We've gathered helpful information to guide
          you through setup, features, and support so you can get started with
          confidence.
        </p>

        <div className="flex gap-3 flex-wrap">
          <button
            className="bg-white font-bold text-sm rounded-md px-7 py-3 cursor-pointer transition-transform hover:scale-[1.03]"
            style={{ color: "#f47320" }}
          >
            Get Connected
          </button>
          <button
            className="bg-transparent font-semibold text-white text-sm rounded-md px-7 py-3 cursor-pointer transition-all hover:scale-[1.03]"
            style={{ border: "2px solid rgba(255,255,255,0.6)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)")}
          >
            Get Started
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex gap-7 mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.22)" }}
        >
          {[["50+", "Topics Covered"], ["24/7", "Support Available"], ["98%", "Questions Resolved"]].map(([num, lbl]) => (
            <div key={lbl}>
              <div className="text-2xl font-extrabold text-white">{num}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — FAQ accordion */}
      <div className="flex-1 flex flex-col justify-center bg-white px-11 py-14" style={{ minWidth: "300px" }}>

        <div className="mb-7">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Common Questions</h2>
          <p className="text-sm text-gray-400">Click any question to see the answer</p>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 mb-7"
          style={{ background: "#f7f7f7", border: "1.5px solid #ebebeb" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-gray-700 w-full placeholder-gray-400"
            style={{ fontFamily: "inherit" }}
          />
        </div>

        {/* FAQ List */}
        <div>
          {filtered.length > 0 ? (
            filtered.map((faq, i) => <FAQItem key={i} faq={faq} />)
          ) : (
            <p className="text-sm text-gray-400 py-6 text-center">No questions found for "{search}"</p>
          )}
        </div>
      </div>
    </section>
  );
}