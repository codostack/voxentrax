import { useState, useEffect, useRef } from "react";

// ── Moved outside component to avoid missing-dependency warnings ──
const ENC_LABELS = ["TLS + SRTP", "Encrypted ✓", "Secure ✓", "AES-256"];
const CODECS = ["OPUS", "G.722", "G.711", "iLBC"];

function VoipAnimation() {
  const canvasRef = useRef(null);
  const [secs, setSecs] = useState(0);
  const [latency, setLatency] = useState(28);
  const [encLabel, setEncLabel] = useState("TLS + SRTP");

  useEffect(() => {
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setLatency(22 + Math.floor(Math.random() * 18)), 1800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let idx = 0;
    const t = setInterval(() => {
      idx = (idx + 1) % ENC_LABELS.length;
      setEncLabel(ENC_LABELS[idx]);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let packets = [];
    let raf;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    function spawnPacket() {
      const toLR = Math.random() > 0.5;
      packets.push({
        toLR, t: 0,
        speed: 0.013 + Math.random() * 0.007,
        color: ["#185FA5", "#378ADD", "#1D9E75", "#5DCAA5"][Math.floor(Math.random() * 4)],
        arcH: 30 + Math.random() * 20,
      });
    }

    function getPos(p, t) {
      const w = canvas.offsetWidth, h = canvas.offsetHeight, midY = h / 2;
      const sx = p.toLR ? 0 : w, ex = p.toLR ? w : 0, mx = w / 2, my = midY - p.arcH;
      return {
        bx: (1-t)*(1-t)*sx + 2*(1-t)*t*mx + t*t*ex,
        by: (1-t)*(1-t)*midY + 2*(1-t)*t*my + t*t*midY,
      };
    }

    function draw() {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      packets.forEach((p) => {
        const sx = p.toLR ? 0 : w, ex = p.toLR ? w : 0;
        const midY = h / 2, mx = w / 2, my = midY - p.arcH;
        ctx.beginPath(); ctx.moveTo(sx, midY); ctx.quadraticCurveTo(mx, my, ex, midY);
        ctx.strokeStyle = p.color + "28"; ctx.lineWidth = 1; ctx.stroke();
        const pos = getPos(p, p.t);
        ctx.beginPath(); ctx.arc(pos.bx, pos.by, 7, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "33"; ctx.fill();
        ctx.beginPath(); ctx.arc(pos.bx, pos.by, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.fill();
        ctx.beginPath(); ctx.arc(pos.bx, pos.by, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#fff"; ctx.fill();
      });
      packets = packets.filter((p) => { p.t += p.speed; return p.t < 1; });
      raf = requestAnimationFrame(draw);
    }

    spawnPacket();
    const spawnInterval = setInterval(spawnPacket, 650);
    draw();
    return () => { cancelAnimationFrame(raf); clearInterval(spawnInterval); };
  }, []);

  const fmt = (n) => Math.floor(n / 60) + ":" + String(n % 60).padStart(2, "0");

  const AudioBars = ({ color, delays = [0, 0.1, 0.2, 0.3, 0.15] }) => (
    <div className="flex items-end justify-center gap-px" style={{ height: 26 }}>
      {delays.map((d, i) => (
        <div key={i} className="rounded-sm" style={{
          width: 3, height: [8, 14, 10, 16, 6][i], background: color,
          transformOrigin: "bottom", animation: `barAnim 0.6s ease-in-out infinite ${d}s`,
        }} />
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes barAnim { 0%,100%{transform:scaleY(0.3)} 50%{transform:scaleY(1)} }
        @keyframes pulseRing { 0%{transform:translate(-50%,-50%) scale(0.5);opacity:0.7} 100%{transform:translate(-50%,-50%) scale(1.6);opacity:0} }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>

      <div className="flex flex-col items-center py-7 px-6 bg-white">
        <p className="text-[25px] font-medium tracking-widest uppercase text-orange-400 mb-6">
          Live encrypted VoIP call
        </p>
        <div className="flex items-center justify-center w-full max-w-5xl gap-6">

          {/* DIALER */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white rounded-2xl" style={{ border:"1px solid #2279ea", padding:"14px 12px", width:180, boxShadow:"0 2px 12px rgba(0,0,0,.06)" }}>
              <div className="text-[10px] text-slate-400 text-center mb-2 tracking-wide uppercase">Dialer</div>
              <div className="bg-slate-50 rounded-lg px-2 py-2 text-center mb-3" style={{ border:"1px solid #e2e8f0" }}>
                <div className="text-[13px] font-medium text-slate-800 tracking-wider">+1 555 001</div>
                <div className="text-[10px] text-slate-400 mt-0.5">On call · <span className="font-medium text-slate-600">{fmt(secs)}</span></div>
              </div>
              <div className="grid grid-cols-3 gap-1 mb-3">
                {["1","2","3","4","5","6","7","8","9","*","0","#"].map((k) => (
                  <div key={k} className="bg-slate-50 rounded-md text-center text-[12px] text-slate-600 font-medium select-none" style={{ padding:"5px 0", border:"0.5px solid #e2e8f0" }}>{k}</div>
                ))}
              </div>
              <div className="rounded-lg flex items-center justify-center" style={{ background:"#1D9E75", padding:"7px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 4.18 2 2 0 0 1 5 2h2.09a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="mt-2"><AudioBars color="#185FA5" /></div>
            </div>
            <div className="text-xs font-medium text-slate-800">Alice</div>
            <div className="text-[11px] text-slate-400">+1 555 001 0001</div>
          </div>

          {/* CENTER CANVAS */}
          <div className="flex-1 relative" style={{ height:360, minWidth:260, maxWidth:420 }}>
            <div className="absolute left-0 right-0" style={{ top:"50%", height:1, background:"#e2e8f0", zIndex:1 }} />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex:2 }} />
            <div className="absolute z-10 flex flex-col items-center" style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>
              <div className="bg-white flex flex-col items-center" style={{ border:"1px solid #08730e", borderRadius:12, padding:"10px 14px", minWidth:96, boxShadow:"0 2px 10px rgba(0,0,0,.07)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="1.8" style={{ marginBottom:4 }}>
                  <rect x="2" y="6" width="20" height="12" rx="2"/>
                  <circle cx="6" cy="12" r="1.5" fill="#185FA5" stroke="none"/>
                  <circle cx="10" cy="12" r="1.5" fill="#185FA5" stroke="none"/>
                  <line x1="14" y1="9" x2="20" y2="9"/><line x1="14" y1="12" x2="20" y2="12"/><line x1="14" y1="15" x2="18" y2="15"/>
                </svg>
                <div className="text-[11px] font-medium" style={{ color:"#185FA5" }}>VoIP Switch</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{encLabel}</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#1D9E75", animation:"blinkDot 1.2s ease-in-out infinite" }}/>
                  <span className="text-[10px] text-slate-400">{latency}ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* RECEIVER */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="bg-white rounded-2xl relative overflow-hidden flex flex-col justify-between"
              style={{
                border: "1px solid #dd6712",
                padding: "14px 12px",
                width: 180,
                height: 306,
                boxShadow: "0 2px 12px rgba(0,0,0,.06)",
              }}
            >
              {[60, 84, 108].map((size, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    border: "1.5px solid #f97316",
                    top: "50%",
                    left: "50%",
                    opacity: 0,
                    animation: `pulseRing 1.8s ease-out infinite ${i * 0.5}s`,
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
              ))}

              <div className="text-[10px] text-slate-400 text-center mb-2 tracking-wide uppercase relative z-10">
                Receiver
              </div>

              <div className="flex flex-col items-center justify-center flex-1 gap-2 relative z-10">
                <div
                  className="flex items-center justify-center rounded-full text-[13px] font-medium"
                  style={{ width: 36, height: 36, background: "#FFF4E6", color: "#c2410c" }}
                >
                  B
                </div>
                <div
                  className="text-[10px] text-slate-400"
                  style={{ animation: "blinkDot 1.2s ease-in-out infinite" }}
                >
                  Incoming…
                </div>
              </div>

              <div className="flex justify-center gap-2.5 relative z-10 mb-3">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: 28, height: 28, background: "#FFF4E6" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="1" y1="1" x2="23" y2="23"/>
                    <path d="M9 9a3 3 0 0 0 4.12 4.12"/>
                    <path d="M17.94 17.94A10 10 0 0 1 12 19c-7 0-11-8-11-8a18.5 18.5 0 0 1 2.16-3.19"/>
                  </svg>
                </div>

                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: 28, height: 28, background: "#1D9E75" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 4.18 2 2 0 0 1 5 2h2.09a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
              </div>

              <div className="relative z-10">
                <AudioBars color="#f97316" delays={[0.05, 0.2, 0.35, 0.1, 0.25]} />
              </div>
            </div>

            <div className="text-xs font-medium text-slate-800">Bob</div>
            <div className="text-[11px] text-slate-400">+44 7911 1234</div>
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="mt-5 flex items-center gap-4 px-5 py-2 rounded-full bg-slate-50" style={{ border:"1px solid #ec6b25" }}>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background:"#1D9E75", animation:"blinkDot 1.2s ease-in-out infinite" }}/>
            <span className="text-[11px] text-slate-500">Live call</span>
          </div>
          <div className="w-px h-3 bg-slate-200"/>
          <span className="text-[11px] font-medium text-slate-700">{fmt(secs)}</span>
          <div className="w-px h-3 bg-slate-200"/>
          <span className="text-[11px] text-slate-500">256-bit AES</span>
          <div className="w-px h-3 bg-slate-200"/>
          <span className="text-[11px] text-slate-500">{latency}ms latency</span>
        </div>
      </div>
    </>
  );
}

/* ══════════ LIVE CALL GRAPH ══════════ */
function LiveCallGraph() {
  const canvasRef = useRef(null);
  const dataRef = useRef(
    Array.from({ length: 40 }, (_, i) => 10000 + Math.sin(i * 0.4) * 2000 + Math.random() * 1500)
  );
  const countRef = useRef(2000);
  const [displayCount, setDisplayCount] = useState(2000);
  const [trend, setTrend] = useState("+3.2%");
  const [trendUp, setTrendUp] = useState(true);
  const timerRef = useRef(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    function drawGraph() {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const data = dataRef.current;
      const min = Math.min(...data) * 0.93;
      const max = Math.max(...data) * 1.04;
      const range = max - min || 1;
      const pad = { l: 2, r: 4, t: 10, b: 6 };
      const gw = w - pad.l - pad.r;
      const gh = h - pad.t - pad.b;

      const pts = data.map((v, i) => ({
        x: pad.l + (i / (data.length - 1)) * gw,
        y: pad.t + gh - ((v - min) / range) * gh,
      }));

      const grad = ctx.createLinearGradient(0, pad.t, 0, h);
      grad.addColorStop(0, "rgba(0, 182, 67, 0.85)");
      grad.addColorStop(0.4, "rgba(34, 197, 94, 0.45)");
      grad.addColorStop(0.7, "rgba(34, 197, 94, 0.20)");
      grad.addColorStop(1, "rgba(34, 197, 94, 0.00)");

      ctx.beginPath();
      ctx.moveTo(pts[0].x, h);
      ctx.lineTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const cpx = (pts[i-1].x + pts[i].x) / 2;
        ctx.bezierCurveTo(cpx, pts[i-1].y, cpx, pts[i].y, pts[i].x, pts[i].y);
      }
      ctx.lineTo(pts[pts.length-1].x, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.setLineDash([3, 6]);
      ctx.strokeStyle = "rgba(148,163,184,0.10)";
      ctx.lineWidth = 0.5;
      [0.25, 0.5, 0.75].forEach(frac => {
        const y = pad.t + gh * frac;
        ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(w - pad.r, y); ctx.stroke();
      });
      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const cpx = (pts[i-1].x + pts[i].x) / 2;
        ctx.bezierCurveTo(cpx, pts[i-1].y, cpx, pts[i].y, pts[i].x, pts[i].y);
      }
      ctx.strokeStyle = "#64748b";
      ctx.lineWidth = 1.5;
      ctx.lineJoin = "round";
      ctx.stroke();

      const last = pts[pts.length - 1];
      const pulse = Math.sin(phaseRef.current * 3);

      ctx.beginPath();
      ctx.arc(last.x, last.y, 9 + pulse * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(24,95,165,0.10)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(last.x, last.y, 5.5 + pulse * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(24,95,165,0.22)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(last.x, last.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#64748b";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(last.x, last.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();

      ctx.setLineDash([2, 3]);
      ctx.strokeStyle = "rgba(24,95,165,0.20)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(last.x, last.y + 4);
      ctx.lineTo(last.x, h - pad.b);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function tick() {
      phaseRef.current += 0.05;

      const current = countRef.current;
      const wave =
        Math.sin(phaseRef.current) * 40 +
        Math.sin(phaseRef.current * 0.5) * 25;
      const noise = Math.random() * 20 - 10;
      let next = current + wave * 0.1 + noise;
      next = Math.max(8500, Math.min(15000, next));
      countRef.current = Math.round(next);

      dataRef.current = [
        ...dataRef.current.slice(1),
        countRef.current,
      ];

      setDisplayCount(countRef.current);

      const base = dataRef.current[0];
      const pct = ((countRef.current - base) / base) * 100;
      setTrend(`${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%`);
      setTrendUp(pct >= 0);

      drawGraph();
      timerRef.current = setTimeout(tick, 750);
    }

    drawGraph();
    timerRef.current = setTimeout(tick, 750);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="rounded-xl overflow-hidden" style={{ border:"1px solid #e8571e", background:"#fff" }}>
      <div className="flex items-start justify-between px-4 pt-3 pb-2">
        <div>
          <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-1">Active calls right now</div>
          <div className="flex items-end gap-2">
            <span className="text-[28px] font-medium leading-none" style={{ color:"#0f3d6e" }}>
              {displayCount.toLocaleString()}
            </span>
            <span
              className="text-[11px] font-medium mb-0.5 px-1.5 py-0.5 rounded-md"
              style={{
                background: trendUp ? "#EAF3DE" : "#FCEBEB",
                color: trendUp ? "#3B6D11" : "#A32D2D",
              }}
            >
              {trendUp ? "▲" : "▼"} {trend}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#1D9E75", animation:"blinkDot 1.2s ease-in-out infinite" }}/>
          <span className="text-[10px] text-slate-400 font-medium">LIVE</span>
        </div>
      </div>

      <div style={{ height:80, position:"relative" }}>
        <canvas ref={canvasRef} style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}/>
      </div>

      <div className="flex justify-between px-4 pb-2.5 pt-1">
        {["40s ago", "30s", "20s", "10s", "now"].map((l) => (
          <span key={l} className="text-[9px]" style={{ color:"#94a3b8" }}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* ══════════ NETWORK STATS PANEL ══════════ */
function NetworkStatsPanel() {
  // ── Removed unused `latency` and `waveHeights` states ──
  const [jitter, setJitter] = useState(12);
  const [codec, setCodec] = useState("OPUS");
  const codecIdxRef = useRef(0);

  useEffect(() => {
    const t = setInterval(() => setJitter(8 + Math.floor(Math.random() * 12)), 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      codecIdxRef.current = (codecIdxRef.current + 1) % CODECS.length;
      setCodec(CODECS[codecIdxRef.current]);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const regions = [
    { label: "US-East", color: "#185FA5", pct: "92%", val: 92 },
    { label: "EU-West", color: "#1D9E75", pct: "88%", val: 88 },
    { label: "APAC",    color: "#378ADD", pct: "95%", val: 95 },
    { label: "SA",      color: "#5DCAA5", pct: "79%", val: 79 },
  ];

  return (
    <div className="h-full bg-blue p-5 flex flex-col gap-4">
      <p className="text-[11px] font-medium tracking-widest uppercase text-yellow-500 m-0">
        Network at a glance
      </p>

      <LiveCallGraph />

      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-xl p-3 text-center" style={{ border:"1px solid #e2e8f0" }}>
          <div className="text-[10px] text-white mb-1">Codec</div>
          <div className="text-[14px] font-medium" style={{ color:"#b3d0ed" }}>{codec}</div>
          <div className="text-[10px] text-slate-400 mt-0.5">48kHz stereo</div>
        </div>
        <div className="rounded-xl p-3 text-center" style={{ border:"1px solid #e2e8f0" }}>
          <div className="text-[10px] text-white mb-1">Jitter buffer</div>
          <div className="text-[14px] font-medium" style={{ color:"#1D9E75" }}>{jitter}ms</div>
          <div className="text-[10px] text-slate-400 mt-0.5">adaptive</div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-[11px] text-white mb-2.5">Regional signal strength</div>
        {regions.map((r) => (
          <div key={r.label} className="flex items-center gap-2 mb-1.5">
            <div className="text-[11px] text-white w-14">{r.label}</div>
            <div className="flex-1 h-1.5 bg-slate-200 rounded overflow-hidden">
              <div className="h-full rounded transition-all duration-1000" style={{ background:r.color, width:`${r.val}%` }}/>
            </div>
            <div className="text-[11px] font-medium text-white w-7 text-right">{r.pct}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════ SUCCESS ══════════ */
function SuccessScreen({ name, email }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-sans">
      <div className="bg-white border border-slate-200 p-12 rounded-2xl text-center max-w-sm">
        <div className="flex items-center justify-center mx-auto mb-4 rounded-full" style={{ width:52, height:52, background:"#EAF3DE" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="2" width={24} height={24}>
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 className="text-lg font-medium mb-2">You're all set!</h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Welcome <b>{name}</b>, we'll be in touch at <b>{email}</b>.
        </p>
      </div>
    </div>
  );
}

/* ══════════ MAIN ══════════ */
export default function RegistrationPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", country:"", company:"", description:"" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Name is required";
    if (!form.email.includes("@")) e.email = "Enter a valid email";
    if (!form.phone) e.phone = "Phone is required";
    if (!form.description) e.description = "Please add a short description";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);
    setSubmitted(true);
  };

  if (submitted) return <SuccessScreen name={form.name} email={form.email} />;

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ANIMATION BANNER */}
      <div className="max-w-6xl mx-auto mt-10 rounded-2xl overflow-hidden border border-slate-100">
        <VoipAnimation />
      </div>

      {/* FULL WIDTH DARK BLUE BACKGROUND */}
      <div className="w-full bg-blue-900 mt-8 py-10">
        <div className="mx-auto grid grid-cols-2 gap-7 px-5 items-stretch" style={{ maxWidth:"86rem" }}>

          {/* LEFT — NETWORK STATS */}
          <div className="h-full">
            <NetworkStatsPanel />
          </div>

          {/* RIGHT — FORM */}
          <div
            className="w-[80%] mx-auto rounded-2xl p-7 sticky top-8 self-start h-full flex flex-col bg-transparent"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <h2 className="text-[17px] font-medium mb-5 text-white">
              Create account
            </h2>

            <div className="flex flex-col gap-0">

              {/* NAME */}
              <input
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                className="w-full text-[13px] px-3 py-2 rounded-md outline-none bg-blue-50 text-slate-900"
                style={{ border: errors.name ? "1px solid #ef4444" : "1px solid #73aff4" }}
              />
              {errors.name && <span className="text-[11px] text-red-500 mt-1">{errors.name}</span>}
              <div className="h-3" />

              {/* EMAIL */}
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full text-[13px] px-3 py-2 rounded-md outline-none bg-blue-50 text-slate-900"
                style={{ border: errors.email ? "1px solid #ef4444" : "1px solid #93c5fd" }}
              />
              {errors.email && <span className="text-[11px] text-red-500 mt-1">{errors.email}</span>}
              <div className="h-3" />

              {/* PHONE */}
              <input
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full text-[13px] px-3 py-2 rounded-md outline-none bg-blue-50 text-slate-900"
                style={{ border: errors.phone ? "1px solid #ef4444" : "1px solid #93c5fd" }}
              />
              {errors.phone && <span className="text-[11px] text-red-500 mt-1">{errors.phone}</span>}
              <div className="h-3" />

              {/* COUNTRY */}
              <input
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                className="w-full text-[13px] px-3 py-2 rounded-md outline-none bg-blue-50 text-slate-900"
                style={{ border: errors.country ? "1px solid #ef4444" : "1px solid #93c5fd" }}
              />
              {errors.country && <span className="text-[11px] text-red-500 mt-1">{errors.country}</span>}
              <div className="h-3" />

              {/* COMPANY */}
              <input
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full text-[13px] px-3 py-2 rounded-md outline-none bg-blue-50 text-slate-900"
                style={{ border: errors.company ? "1px solid #ef4444" : "1px solid #93c5fd" }}
              />
              {errors.company && <span className="text-[11px] text-red-500 mt-1">{errors.company}</span>}
              <div className="h-3" />

              {/* DESCRIPTION */}
              <textarea
                name="description"
                placeholder="Tell us about your use case"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="w-full text-[13px] px-3 py-2 rounded-md outline-none resize-none leading-relaxed bg-blue-50 text-slate-900"
                style={{ border: errors.description ? "1px solid #ef4444" : "1px solid #93c5fd" }}
              />
              {errors.description && <span className="text-[11px] text-red-500 mt-1">{errors.description}</span>}
              <div className="h-4" />

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[13px] font-medium transition-colors"
              >
                Create account
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}