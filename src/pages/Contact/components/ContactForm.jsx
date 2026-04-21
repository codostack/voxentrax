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
  const BLUE = "#1058A7";
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
  };

  const labelStyle = {
    fontSize: "11px",
    fontWeight: "500",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#64748b",
    marginBottom: "5px",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = BLUE;
    e.target.style.background = "#fff";
    e.target.style.boxShadow = `0 0 0 2px rgba(16,88,167,0.15)`;
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = "#e2e8f0";
    e.target.style.background = "#f8fafc";
    e.target.style.boxShadow = "none";
  };

  const features = [
    { label: "99.9% Network Uptime", icon: Zap, border: "#f97316" },
    { label: "Enterprise-Grade Security", icon: ShieldCheck, border: "#22c55e" },
    { label: "Global Coverage & Support", icon: Globe, border: "#38bdf8" },
    { label: "AI Call Analytics", icon: BarChart3, border: "#a855f7" },
    { label: "24/7 Customer Support", icon: Headphones, border: "#f43f5e" },
  ];

  const contacts = [
    { text: "mail@example.com", icon: Mail },
    { text: "+123-456-7890", icon: Phone },
    { text: "New York, USA", icon: MapPin },
  ];

  const fields = [
    { label: "Full Name", placeholder: "Enter your full name", full: false },
    { label: "Location", placeholder: "Where are you located?", full: false },
    { label: "Email", placeholder: "Enter your email address", full: false },
    { label: "Phone Number", placeholder: "Your phone number", full: false },
    { label: "Subject", placeholder: "What's this about?", full: true },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        padding: "20px",
      }}
    >
      {/* OUTER CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "100vw",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          background: "#fff",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr" }}>

          {/* LEFT */}
          <div
            style={{
              background: "linear-gradient(135deg, #1058A7 0%, #0b3c7a 100%)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>
                CONTACT US
              </p>

              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: "600",
                  letterSpacing: "-0.5px",
                  color: "#fff",
                  margin: "10px 0",
                }}
              >
                Let's Build{" "}
                <span style={{ color: ORANGE }}>
                  Better Communication
                </span>
              </h2>

              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>
                Scalable, secure, and clear communication solutions.
              </p>

              {/* FEATURES */}
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
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
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: f.border,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
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

            {/* CONTACTS */}
            <div
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
                    }}
                  >
                    <Icon size={16} />
                    {c.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ padding: "2rem" }}>
            <h3 style={{ fontSize: "20px", color: BLUE, marginBottom: "1rem", fontWeight: "600" }}>
              Send a Message
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {fields.map((f, i) => (
                <div key={i} style={{ gridColumn: f.full ? "1/-1" : "auto" }}>
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
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <button
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
  );
}