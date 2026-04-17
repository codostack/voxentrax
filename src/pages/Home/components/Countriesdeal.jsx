import React, { useState } from "react";

const countries = [
  { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Canada", code: "+1", flag: "https://flagcdn.com/w80/ca.png" },
  { name: "Australia", code: "+61", flag: "https://flagcdn.com/w80/au.png" },
  { name: "Germany", code: "+49", flag: "https://flagcdn.com/w80/de.png" },
  { name: "France", code: "+33", flag: "https://flagcdn.com/w80/fr.png" },
];

export default function CountryScroller() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(135deg, #065f73 0%, #0891b2 50%, #22d3ee 100%)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Heading */}
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto 4rem",
            textAlign: "center",
            padding: "0 1.5rem",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Transforming Communication with VoIP Technology
          </h1>

          <p
            style={{
              color: "rgba(207,250,254,0.9)",
              fontSize: "1.125rem",
              maxWidth: "36rem",
              margin: "0 auto",
            }}
          >
            Discover how modern Voice over IP solutions are redefining business
            communication with speed, clarity, and scalability.
          </p>
        </div>

        {/* Scroller */}
        <div
          style={{
            background: "rgba(0,0,0,0.15)",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            borderBottom: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(8px)",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            overflow: "hidden",
          }}
        >
          {/* ✅ animation controlled here */}
          <div
            className="flex gap-6 whitespace-nowrap animate-scroll"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...countries, ...countries].map((c, i) => (
              <div
                key={i}
                onMouseEnter={(e) => {
                  setIsPaused(true);

                  e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.08)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  setIsPaused(false);

                  e.currentTarget.style.transform =
                    "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.12)";
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.5rem",
                  borderRadius: "0.75rem",
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  minWidth: "260px",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                }}
              >
                {/* Flag */}
                <div
                  style={{
                    flexShrink: 0,
                    borderRadius: "6px",
                    padding: "2px",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,255,255,0.12))",
                  }}
                >
                  <img
                    src={c.flag}
                    alt={c.name}
                    style={{
                      width: "3rem",
                      height: "2rem",
                      borderRadius: "4px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div>
                  <p
                    style={{
                      color: "#0f172a",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {c.name}
                  </p>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#0891b2",
                      background: "#ecfeff",
                      border: "1px solid #a5f3fc",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      fontFamily: "monospace",
                    }}
                  >
                    {c.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
}