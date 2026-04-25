import {
  Zap,
  ShieldCheck,
  Globe,
  BarChart3,
  Headphones,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContactForm() {
  const BLUE   = "#1058A7";
  const ORANGE = "#F97316";

  const inputStyle = {
    width: "100%",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    color: "#1e293b",
    outline: "none",
    marginTop: "5px",
    transition: "all 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle = {
    fontSize: "11px",
    fontWeight: "500",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#64748b",
    marginBottom: "5px",
    display: "block",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = BLUE;
    e.target.style.background  = "#fff";
    e.target.style.boxShadow   = `0 0 0 2px rgba(16,88,167,0.15)`;
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#e2e8f0";
    e.target.style.background  = "#f8fafc";
    e.target.style.boxShadow   = "none";
  };

  const features = [
    { label: "99.9% Network Uptime",        icon: Zap,       border: "#f97316" },
    { label: "Enterprise-Grade Security",   icon: ShieldCheck,border: "#22c55e" },
    { label: "Global Coverage & Support",   icon: Globe,     border: "#38bdf8" },
    { label: "AI Call Analytics",           icon: BarChart3, border: "#a855f7" },
    { label: "24/7 Customer Support",       icon: Headphones,border: "#f43f5e" },
  ];

  const contacts = [
    { text: "mail@example.com", icon: Mail  },
    { text: "+123-456-7890",    icon: Phone },
    { text: "New York, USA",    icon: MapPin},
  ];

  const fields = [
    { label: "Full Name",     placeholder: "Enter your full name",      full: false },
    { label: "Location",      placeholder: "Where are you located?",    full: false },
    { label: "Email",         placeholder: "Enter your email address",  full: false },
    { label: "Phone Number",  placeholder: "Your phone number",         full: false },
    { label: "Subject",       placeholder: "What's this about?",        full: true  },
  ];

  return (
    <>
      <style>{`
        /* ── Base: full-width outer wrapper ── */
        .cf-page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          padding: 20px;
          box-sizing: border-box;
        }

        .cf-card {
          width: 100%;
          max-width: 100vw;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          background: #fff;
        }

        /* Desktop: side-by-side grid — UNCHANGED */
        .cf-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
        }

        /* ── TABLET (≤1023px): stack vertically ── */
        @media (max-width: 1023px) {
          .cf-grid {
            grid-template-columns: 1fr !important;
          }
          .cf-left {
            padding: 2rem !important;
          }
          /* Contact pills wrap on tablet */
          .cf-contacts {
            flex-wrap: wrap !important;
          }
          .cf-contact-pill {
            flex: 1 1 140px !important;
            min-width: 120px !important;
          }
        }

        /* ── MOBILE (≤639px): tighter padding, single-col fields ── */
        @media (max-width: 639px) {
          .cf-page {
            padding: 12px !important;
            align-items: flex-start !important;
          }
          .cf-card {
            border-radius: 12px !important;
          }
          .cf-left {
            padding: 20px 16px !important;
          }
          .cf-left-title {
            font-size: 24px !important;
            line-height: 1.2 !important;
          }
          .cf-left-sub {
            font-size: 12px !important;
          }
          .cf-feature-list {
            gap: 8px !important;
            margin-top: 16px !important;
          }
          .cf-feature-item {
            padding: 10px 12px !important;
            font-size: 12px !important;
          }
          .cf-feature-icon {
            width: 30px !important;
            height: 30px !important;
            border-radius: 8px !important;
          }
          .cf-contacts {
            margin-top: 16px !important;
            gap: 8px !important;
            flex-direction: column !important;
          }
          .cf-contact-pill {
            flex: none !important;
            width: 100% !important;
            justify-content: flex-start !important;
            padding: 8px 12px !important;
          }
          .cf-right {
            padding: 20px 16px !important;
          }
          .cf-right-title {
            font-size: 17px !important;
            margin-bottom: 14px !important;
          }
          /* Single column form on mobile */
          .cf-fields-grid {
            grid-template-columns: 1fr !important;
          }
          .cf-field-full {
            grid-column: auto !important;
          }
          .cf-submit-btn {
            margin-top: 14px !important;
            padding: 11px !important;
            font-size: 13px !important;
          }
        }

        /* ── TINY (≤380px) ── */
        @media (max-width: 380px) {
          .cf-left-title { font-size: 20px !important; }
          .cf-feature-item { font-size: 11px !important; }
        }
      `}</style>

      <div className="cf-page">
        <div className="cf-card">
          <div className="cf-grid">

            {/* ── LEFT ── */}
            <div
              className="cf-left"
              style={{
                background: "linear-gradient(135deg, #1058A7 0%, #0b3c7a 100%)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                  CONTACT US
                </p>

                <h2
                  className="cf-left-title"
                  style={{
                    fontSize: "34px",
                    fontWeight: "600",
                    letterSpacing: "-0.5px",
                    color: "#fff",
                    margin: "10px 0",
                  }}
                >
                  Let's Build{" "}
                  <span style={{ color: ORANGE }}>Better Communication</span>
                </h2>

                <p
                  className="cf-left-sub"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", margin: 0 }}
                >
                  Scalable, secure, and clear communication solutions.
                </p>

                {/* Features */}
                <div
                  className="cf-feature-list"
                  style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <div
                        key={i}
                        className="cf-feature-item"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          background: "rgba(255,255,255,0.08)",
                          padding: "12px 14px",
                          borderRadius: "10px",
                          border: `1px solid ${f.border}`,
                          color: "#fff",
                          fontSize: "13px",
                        }}
                      >
                        <div
                          className="cf-feature-icon"
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            background: f.border,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={18} color="#fff" />
                        </div>
                        {f.label}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contacts */}
              <div
                className="cf-contacts"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                {contacts.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={i}
                      className="cf-contact-pill"
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: "rgba(255,255,255,0.1)",
                        padding: "8px 10px",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Icon size={16} style={{ flexShrink: 0 }} />
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{c.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="cf-right" style={{ padding: "2rem" }}>
              <h3
                className="cf-right-title"
                style={{ fontSize: "20px", color: BLUE, marginBottom: "1rem", fontWeight: "600" }}
              >
                Send a Message
              </h3>

              <div
                className="cf-fields-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
              >
                {fields.map((f, i) => (
                  <div
                    key={i}
                    className={f.full ? "cf-field-full" : ""}
                    style={{ gridColumn: f.full ? "1/-1" : "auto" }}
                  >
                    <label style={labelStyle}>{f.label}</label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                ))}

                <div style={{ gridColumn: "1/-1" }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <button
                className="cf-submit-btn"
                style={{
                  width: "100%",
                  marginTop: "18px",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "none",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(249,115,22,0.35)",
                }}
              >
                Send Message
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}