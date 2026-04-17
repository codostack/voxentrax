import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   PLATFORM DATA  — 8 icons placed on a perfect circle
   angle=0 → 3 o'clock, increases clockwise
───────────────────────────────────────────────────────── */
const PLATFORMS = [
  {
    id: 1, name: "Teams",
    color: "#6264A7", bg: "#EEEDFE",
    angle: -90,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <rect x="2" y="6" width="13" height="13" rx="2.5" fill="#6264A7"/>
        <rect x="11" y="8" width="9" height="10" rx="2" fill="#464775"/>
        <text x="8" y="16.5" fontSize="7.5" fill="#fff" fontWeight="800" textAnchor="middle">T</text>
      </svg>
    ),
  },
  {
    id: 2, name: "Instagram",
    color: "#C13584", bg: "#FDEAF4",
    angle: -45,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <defs>
          <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433"/><stop offset="50%" stopColor="#dc2743"/><stop offset="100%" stopColor="#bc1888"/>
          </linearGradient>
        </defs>
        <path fill="url(#ig)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    id: 3, name: "LinkedIn",
    color: "#0A66C2", bg: "#E8F1FB",
    angle: 0,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 4, name: "YouTube",
    color: "#FF0000", bg: "#FFF0F0",
    angle: 45,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#FF0000">
        <path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C16.9 2.5 12 2.5 12 2.5s-4.9 0-8.2.34c-.46.05-1.46.06-2.36 1C.73 4.56.5 6.2.5 6.2S.25 8.1.25 10v2c0 1.9.25 3.8.25 3.8s.23 1.64.94 2.36c.9.94 2.08.91 2.6 1 1.9.18 8 .34 8 .34s4.9-.01 8.2-.35c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.25-1.9.25-3.8v-2c0-1.9-.25-3.8-.25-3.8zM9.75 14.5v-5l5 2.5-5 2.5z"/>
      </svg>
    ),
  },
  {
    id: 5, name: "Pinterest",
    color: "#E60023", bg: "#FFF0F2",
    angle: 90,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#E60023">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 4.99 3.05 9.26 7.38 11.08-.1-.94-.19-2.39.04-3.42.21-.9 1.36-5.74 1.36-5.74s-.35-.7-.35-1.73c0-1.62.94-2.83 2.11-2.83 1 0 1.48.75 1.48 1.65 0 1-.64 2.5-.97 3.89-.28 1.17.59 2.12 1.75 2.12 2.1 0 3.71-2.22 3.71-5.42 0-2.83-2.04-4.81-4.95-4.81-3.37 0-5.35 2.53-5.35 5.15 0 1.02.39 2.11.88 2.7.1.12.11.23.08.36-.09.4-.29 1.26-.33 1.44-.05.23-.18.28-.41.17-1.53-.71-2.48-2.95-2.48-4.74 0-3.86 2.8-7.41 8.07-7.41 4.24 0 7.54 3.02 7.54 7.05 0 4.21-2.66 7.61-6.35 7.61-1.24 0-2.4-.64-2.8-1.4l-.76 2.9c-.27 1.03-1 2.32-1.49 3.1C9.92 23.82 10.95 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
      </svg>
    ),
  },
  {
    id: 6, name: "Facebook",
    color: "#1877F2", bg: "#EBF3FE",
    angle: 135,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    id: 7, name: "Google",
    color: "#4285F4", bg: "#EEF3FE",
    angle: 180,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
  },
  {
    id: 8, name: "Twitter",
    color: "#14171A", bg: "#F0F0F0",
    angle: 225,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#14171A">
        <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.35-7.007L3.5 22H1l7.02-8.02L2 2h6.828l4.84 6.35L18.244 2z"/>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────
   ORBIT DIAGRAM
───────────────────────────────────────────────────────── */
const R = 148;   // orbit radius
const CX = 200;  // center x
const CY = 200;  // center y
const S  = 400;  // SVG size

function toRad(deg) { return (deg * Math.PI) / 180; }
function ptOnCircle(angle, r = R) {
  return { x: CX + r * Math.cos(toRad(angle)), y: CY + r * Math.sin(toRad(angle)) };
}

function OrbitDiagram() {
  const [hovered, setHovered] = useState(null);
  const [tick, setTick]       = useState(0);
  const rafRef  = useRef(null);
  const t0Ref   = useRef(null);

  /* rAF loop — drives travelling dots */
  useEffect(() => {
    const loop = (ts) => {
      if (!t0Ref.current) t0Ref.current = ts;
      setTick((ts - t0Ref.current) / 1000);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const hovP = hovered !== null ? PLATFORMS.find(p => p.id === hovered) : null;

  return (
    <div style={{ position: "relative", width: S, height: S }}>

      {/* ── SVG canvas ── */}
      <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`}
        style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <defs>
          {/* Soft radial wash behind diagram */}
          <radialGradient id="wash" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#EEF2FF" stopOpacity="1"/>
            <stop offset="60%"  stopColor="#F5F7FF" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
          </radialGradient>

          {/* Hub inner gradient */}
          <radialGradient id="hubFill" cx="40%" cy="35%" r="60%">
            <stop offset="0%"   stopColor="#ffffff"/>
            <stop offset="100%" stopColor="#F0F3FF"/>
          </radialGradient>

          {/* Per-platform glow filters */}
          {PLATFORMS.map(p => (
            <filter key={p.id} id={`glow${p.id}`} x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="b"/>
              <feFlood floodColor={p.color} floodOpacity="0.35" result="c"/>
              <feComposite in="c" in2="b" operator="in" result="g"/>
              <feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          ))}

          {/* Hub shadow */}
          <filter id="hubShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="#6366f1" floodOpacity="0.12"/>
            <feDropShadow dx="0" dy="2" stdDeviation="4"  floodColor="#000"    floodOpacity="0.06"/>
          </filter>
        </defs>

        {/* Background wash */}
        <circle cx={CX} cy={CY} r={196} fill="url(#wash)"/>

        {/* ── Rings ── */}
        {/* Outer dashed ring */}
        <circle cx={CX} cy={CY} r={R}
          fill="none" stroke="#C7D2FE" strokeWidth="1"
          strokeDasharray="4 11" opacity="0.7"/>
        {/* Faint outer halo */}
        <circle cx={CX} cy={CY} r={R + 28}
          fill="none" stroke="#E0E7FF" strokeWidth="0.5" opacity="0.5"/>
        {/* Inner ring */}
        <circle cx={CX} cy={CY} r={54}
          fill="none" stroke="#DDE3FF" strokeWidth="0.8"
          strokeDasharray="3 8" opacity="0.8"/>

        {/* ── Coloured arc per platform (on outer ring) ── */}
        {PLATFORMS.map((p, i) => {
          const span   = 28;
          const start  = p.angle - span / 2;
          const end    = p.angle + span / 2;
          const r1     = R;
          const s      = ptOnCircle(start, r1);
          const e      = ptOnCircle(end,   r1);
          const active = hovered === p.id;
          return (
            <path key={p.id}
              d={`M${s.x},${s.y} A${r1},${r1} 0 0,1 ${e.x},${e.y}`}
              fill="none"
              stroke={p.color}
              strokeWidth={active ? 4 : 2.5}
              strokeLinecap="round"
              opacity={active ? 0.85 : 0.3}
              style={{ transition: "all 0.3s ease" }}
            />
          );
        })}

        {/* ── Connector lines ── */}
        {PLATFORMS.map((p, i) => {
          const ep     = ptOnCircle(p.angle);
          const active = hovered === p.id;
          /* bezier control point for gentle curve */
          const mx = (CX + ep.x) / 2 + (ep.y - CY) * 0.12;
          const my = (CY + ep.y) / 2 - (ep.x - CX) * 0.12;
          return (
            <g key={p.id}>
              {/* Glow duplicate on hover */}
              {active && (
                <path d={`M${CX},${CY} Q${mx},${my} ${ep.x},${ep.y}`}
                  fill="none" stroke={p.color}
                  strokeWidth={8} opacity={0.1}
                  style={{ filter: "blur(6px)" }}/>
              )}
              <path
                d={`M${CX},${CY} Q${mx},${my} ${ep.x},${ep.y}`}
                fill="none"
                stroke={p.color}
                strokeWidth={active ? 1.8 : 0.8}
                opacity={active ? 0.55 : 0.15}
                strokeDasharray="5 9"
                style={{ transition: "all 0.35s ease" }}
              />
            </g>
          );
        })}

        {/* ── Travelling dots ── */}
        {PLATFORMS.map((p, i) => {
          const ep   = ptOnCircle(p.angle);
          const mx   = (CX + ep.x) / 2 + (ep.y - CY) * 0.12;
          const my   = (CY + ep.y) / 2 - (ep.x - CX) * 0.12;
          const offset = (i / PLATFORMS.length);
          /* cubic-bezier sample at t */
          const t    = ((tick * 0.35 + offset) % 1 + 1) % 1;
          const inv  = 1 - t;
          const bx   = inv * inv * CX + 2 * inv * t * mx + t * t * ep.x;
          const by   = inv * inv * CY + 2 * inv * t * my + t * t * ep.y;
          const active = hovered === p.id;
          const r    = active ? 5.5 : 3.5;
          return (
            <circle key={p.id}
              cx={bx} cy={by} r={r}
              fill={p.color}
              opacity={active ? 1 : 0.65}
              filter={active ? `url(#glow${p.id})` : undefined}
              style={{ transition: "r 0.3s, opacity 0.3s" }}
            />
          );
        })}

        {/* ── Hub circle ── */}
        <circle cx={CX} cy={CY} r={52}
          fill="url(#hubFill)"
          stroke="#C7D2FE"
          strokeWidth="1.2"
          filter="url(#hubShadow)"/>

        {/* Subtle inner ring on hub */}
        <circle cx={CX} cy={CY} r={44}
          fill="none" stroke="#E0E7FF" strokeWidth="0.8"/>
      </svg>

      {/* ── Platform icon nodes (HTML over SVG) ── */}
      {PLATFORMS.map((p, i) => {
        const pos    = ptOnCircle(p.angle);
        const active = hovered === p.id;
        return (
          <div key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position:    "absolute",
              left:        pos.x,
              top:         pos.y,
              transform:   active
                ? "translate(-50%,-50%) scale(1.22) translateY(-3px)"
                : "translate(-50%,-50%) scale(1)",
              width:       62,
              height:      62,
              borderRadius:"50%",
              background:  active ? p.bg : "#fff",
              border:      `1.5px solid ${active ? p.color + "66" : "#E5E9F8"}`,
              display:     "flex",
              alignItems:  "center",
              justifyContent: "center",
              cursor:      "pointer",
              zIndex:      4,
              boxShadow:   active
                ? `0 12px 30px ${p.color}22, 0 3px 10px ${p.color}14, 0 0 0 5px ${p.color}0D`
                : "0 2px 12px rgba(99,102,241,0.07), 0 1px 3px rgba(0,0,0,0.05)",
              transition:  "all 0.32s cubic-bezier(.34,1.56,.64,1)",
              animation:   `nodeEntrance 0.5s cubic-bezier(.34,1.56,.64,1) both`,
              animationDelay: `${i * 0.065 + 0.2}s`,
            }}>
            {p.icon}

            {/* Label on hover */}
            {active && (
              <div style={{
                position:   "absolute",
                bottom:     "calc(100% + 9px)",
                left:       "50%",
                transform:  "translateX(-50%)",
                background: "#1E1B4B",
                color:      "#fff",
                fontSize:   11,
                fontWeight: 600,
                padding:    "4px 10px",
                borderRadius: 7,
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
                pointerEvents: "none",
                boxShadow:  "0 4px 14px rgba(0,0,0,0.18)",
                animation:  "tipIn 0.15s ease both",
                zIndex:     10,
              }}>
                {p.name}
                <span style={{
                  position:  "absolute",
                  top:       "100%",
                  left:      "50%",
                  transform: "translateX(-50%)",
                  width:     0, height: 0,
                  borderLeft:  "4px solid transparent",
                  borderRight: "4px solid transparent",
                  borderTop:   "4px solid #1E1B4B",
                }}/>
              </div>
            )}
          </div>
        );
      })}

      {/* ── Hub center content ── */}
      <div style={{
        position:       "absolute",
        left:           CX,
        top:            CY,
        transform:      "translate(-50%,-50%)",
        width:          96,
        height:         96,
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        gap:            4,
        zIndex:         5,
        pointerEvents:  "none",
        animation:      "hubIn 0.7s cubic-bezier(.34,1.56,.64,1) 0.05s both",
      }}>
        {/* Connection icon */}
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="5" fill="#6366F1"/>
          <circle cx="15" cy="15" r="7.5" fill="none" stroke="#A5B4FC" strokeWidth="1"/>
          {[0,72,144,216,288].map((a,i) => {
            const r1=12, r2=9;
            const x1=15+r1*Math.cos(toRad(a)), y1=15+r1*Math.sin(toRad(a));
            const x2=15+r2*Math.cos(toRad(a)), y2=15+r2*Math.sin(toRad(a));
            return <line key={i} x1={x2} y1={y2} x2={x1} y2={y1} stroke="#C7D2FE" strokeWidth="1.2" strokeLinecap="round"/>;
          })}
          {[0,72,144,216,288].map((a,i) => {
            const r1=13;
            const x=15+r1*Math.cos(toRad(a)), y=15+r1*Math.sin(toRad(a));
            return <circle key={i} cx={x} cy={y} r="2" fill="#A5B4FC"/>;
          })}
        </svg>
        <span style={{
          fontSize:      9.5,
          fontWeight:    700,
          color:         "#6366F1",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily:    "'Sora',sans-serif",
        }}>Hub</span>
      </div>

      {/* ── Active platform badge (bottom) ── */}
      <div style={{
        position:       "absolute",
        bottom:         10,
        left:           "50%",
        transform:      "translateX(-50%)",
        height:         28,
        minWidth:       120,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        zIndex:         6,
        pointerEvents:  "none",
      }}>
        {hovP ? (
          <div key={hovP.id} style={{
            background:    hovP.bg,
            border:        `1px solid ${hovP.color}33`,
            color:         hovP.color,
            fontSize:      11,
            fontWeight:    700,
            padding:       "4px 14px",
            borderRadius:  20,
            letterSpacing: "0.04em",
            whiteSpace:    "nowrap",
            boxShadow:     `0 4px 16px ${hovP.color}18`,
            animation:     "badgePop 0.2s cubic-bezier(.34,1.56,.64,1) both",
          }}>
            ● {hovP.name}
          </div>
        ) : (
          <div style={{
            color:         "#A5B4FC",
            fontSize:      10.5,
            fontWeight:    500,
            letterSpacing: "0.04em",
          }}>
            Hover a platform
          </div>
        )}
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   FULL PAGE
───────────────────────────────────────────────────────── */
export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        @keyframes nodeEntrance {
          from { opacity:0; transform:translate(-50%,-50%) scale(0.3); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1);   }
        }
        @keyframes hubIn {
          from { opacity:0; transform:translate(-50%,-50%) scale(0.5); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1);   }
        }
        @keyframes tipIn {
          from { opacity:0; transform:translateX(-50%) translateY(5px); }
          to   { opacity:1; transform:translateX(-50%) translateY(0);   }
        }
        @keyframes badgePop {
          from { opacity:0; transform:scale(0.8); }
          to   { opacity:1; transform:scale(1);   }
        }
        @keyframes fadeSlideUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes bgOrb {
          0%,100% { transform:translate(0,0)      scale(1);    }
          50%     { transform:translate(16px,-18px) scale(1.04); }
        }
        @keyframes pulseRing {
          0%   { transform:scale(1);   opacity:0.7; }
          100% { transform:scale(2.4); opacity:0;   }
        }
        @keyframes floatCard {
          0%,100% { transform:translateY(0px);  }
          50%     { transform:translateY(-8px); }
        }
        @keyframes spinRing {
          from { transform:translate(-50%,-50%) rotate(0deg);   }
          to   { transform:translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes spinRingRev {
          from { transform:translate(-50%,-50%) rotate(0deg);    }
          to   { transform:translate(-50%,-50%) rotate(-360deg); }
        }
      `}</style>

      <section style={{
        minHeight:      "90vh",
        background:     "#ffffff",
        fontFamily:     "'Sora', sans-serif",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "60px 40px",
        position:       "relative",
        overflow:       "hidden",
      }}>

        {/* ── Ambient colour orbs ── */}
        {[
          { w:380, h:380, top:-120, left:-120, c:"#DBEAFE", d:"0s",   dur:"7s"  },
          { w:240, h:240, bottom:-80, left:-60, c:"#FCE7F3", d:"1.2s",dur:"9s"  },
          { w:220, h:220, top:-60,  right:40,   c:"#D1FAE5", d:"0.5s",dur:"8s"  },
          { w:180, h:180, bottom:-60, right:-40, c:"#FEF3C7", d:"2s", dur:"6s"  },
          { w:160, h:160, top:"40%", left:"45%", c:"#EDE9FE", d:"0.8s",dur:"10s"},
        ].map((o, i) => (
          <div key={i} style={{
            position:    "absolute",
            width:       o.w, height:o.h,
            top:         o.top, left:o.left, right:o.right, bottom:o.bottom,
            borderRadius:"50%", background:o.c,
            filter:      "blur(70px)", opacity:.32,
            animation:   `bgOrb ${o.dur} ease-in-out infinite`,
            animationDelay: o.d, pointerEvents:"none",
          }}/>
        ))}

        {/* ── Dot grid ── */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize:"28px 28px", opacity:.18, pointerEvents:"none",
        }}/>

        {/* ── Two-column layout ── */}
        <div style={{
          maxWidth:   1320,
          width:      "100%",
          display:    "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:        64,
          alignItems: "center",
          position:   "relative",
          zIndex:     1,
        }}>

          {/* ════ LEFT — original, untouched ════ */}
          <div style={{
            opacity:   visible ? 1 : 0,
            animation: visible ? "fadeSlideUp 0.75s ease both" : "none",
          }}>
            {/* Badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"#EFF6FF", border:"1px solid #BFDBFE",
              borderRadius:999, padding:"5px 14px", marginBottom:22,
            }}>
              <div style={{ position:"relative", width:8, height:8, flexShrink:0 }}>
                <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:"#2563EB", animation:"pulseRing 2s ease-out infinite" }}/>
                <div style={{ width:8, height:8, borderRadius:"50%", background:"#2563EB" }}/>
              </div>
              <span style={{ fontSize:12, fontWeight:700, color:"#1D4ED8", letterSpacing:"0.03em" }}>
                Available 24 / 7
              </span>
            </div>

            <h1 className="font-['Syne',sans-serif] text-4xl md:text-[2.6rem] leading-[1.2] text-gray-600">
              Let's Start a{" "}
              <span className="text-blue-500">Conversation</span>
            </h1>

            <p className="text-gray-600 text-base leading-relaxed text-justify mt-4 w-[92%]">
              We connect with the tools you already love — from social media
              to e-commerce. Every integration works seamlessly through one hub.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold bg-blue-500 hover:bg-blue-600 transition-all duration-200 border-0 cursor-pointer">
                Get Connected
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 border border-gray-300 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 transition-all duration-200 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          {/* ════ RIGHT — premium redesign ════ */}
          <div style={{
            opacity:   visible ? 1 : 0,
            animation: visible ? "fadeSlideUp 0.85s ease 0.18s both" : "none",
            display:   "flex",
            alignItems:"center",
            justifyContent:"center",
          }}>

            {/* Outer floating card */}
            <div style={{
              position:     "relative",
              width:        "min(460px, 100%)",
              aspectRatio:  "1 / 1",
              borderRadius: 32,
              background:   "#ffffff",
              border:       "1px solid #E0E7FF",
              boxShadow: [
                "0 0 0 1px rgba(199,210,254,0.5)",
                "0 32px 80px rgba(99,102,241,0.10)",
                "0 8px 24px rgba(99,102,241,0.06)",
                "0 2px 6px rgba(0,0,0,0.04)",
              ].join(", "),
              animation:    "floatCard 7s ease-in-out infinite",
              overflow:     "hidden",
            }}>

              {/* Soft inner gradient blush */}
              <div style={{
                position:     "absolute",
                inset:        0,
                background:   "radial-gradient(ellipse 70% 60% at 50% 50%, #EEF2FF 0%, rgba(255,255,255,0) 100%)",
                pointerEvents:"none",
                borderRadius: 32,
              }}/>

              {/* Spinning dashed decorator ring — outer */}
              <div style={{
                position:     "absolute",
                left:         "50%",
                top:          "50%",
                width:        420,
                height:       420,
                borderRadius: "50%",
                border:       "1px dashed #C7D2FE",
                opacity:      0.45,
                animation:    "spinRing 38s linear infinite",
                pointerEvents:"none",
              }}/>
              {/* Spinning dashed decorator ring — inner, counter-rotate */}
              <div style={{
                position:     "absolute",
                left:         "50%",
                top:          "50%",
                width:        310,
                height:       310,
                borderRadius: "50%",
                border:       "1px dashed #DDE5FF",
                opacity:      0.5,
                animation:    "spinRingRev 28s linear infinite",
                pointerEvents:"none",
              }}/>

              {/* ── Status pill — top left ── */}
              <div style={{
                position:   "absolute",
                top:        20, left:20,
                display:    "flex", alignItems:"center", gap:6,
                background: "#F0FDF4",
                border:     "1px solid #BBF7D0",
                borderRadius:20,
                padding:    "5px 12px",
                fontSize:   10.5,
                fontWeight: 700,
                color:      "#15803D",
                letterSpacing:"0.05em",
                zIndex:     8,
                boxShadow:  "0 2px 8px rgba(21,128,61,0.09)",
              }}>
                <span style={{
                  width:9, height:9, borderRadius:"50%",
                  background:"#22C55E",
                  boxShadow:"0 0 0 2px #DCFCE7, 0 0 6px #22C55E",
                  flexShrink:0,
                }}/>
                LIVE
              </div>

              {/* ── Platform count pill — top right ── */}
              <div style={{
                position:   "absolute",
                top:        20, right:20,
                background: "#EEF2FF",
                border:     "1px solid #C7D2FE",
                borderRadius:20,
                padding:    "5px 12px",
                fontSize:   10.5,
                fontWeight: 700,
                color:      "#4F46E5",
                letterSpacing:"0.06em",
                zIndex:     8,
                boxShadow:  "0 2px 8px rgba(99,102,241,0.1)",
              }}>
                8 PLATFORMS
              </div>

              {/* ── Stat strip — bottom ── */}
              <div style={{
                position:       "absolute",
                bottom:         18, left:"50%",
                transform:      "translateX(-50%)",
                display:        "flex",
                gap:            8,
                zIndex:         8,
                pointerEvents:  "none",
              }}>
                {[
                  { label:"Real-time", color:"#6366F1", bg:"#EEF2FF", border:"#C7D2FE" },
                  { label:"One hub",   color:"#0891B2", bg:"#ECFEFF", border:"#A5F3FC" },
                  { label:"Zero setup",color:"#D97706", bg:"#FFFBEB", border:"#FDE68A" },
                ].map(s => (
                  <div key={s.label} style={{
                    background:   s.bg,
                    border:       `1px solid ${s.border}`,
                    borderRadius: 20,
                    padding:      "4px 12px",
                    fontSize:     10,
                    fontWeight:   700,
                    color:        s.color,
                    letterSpacing:"0.04em",
                    boxShadow:    "0 2px 6px rgba(0,0,0,0.04)",
                  }}>
                    {s.label}
                  </div>
                ))}
              </div>

              {/* ── The orbit diagram, centred ── */}
              <div style={{
                position:       "absolute",
                inset:          0,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
              }}>
                <OrbitDiagram />
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}