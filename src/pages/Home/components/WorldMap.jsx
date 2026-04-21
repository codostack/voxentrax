import { useState, useEffect, useRef, useCallback } from "react";

// ── Accurate country data [longitude, latitude] ───────────────────────────────
const COUNTRIES = [
  { code: "US", name: "United States", dial: "+1", lon: -98, lat: 38 },
  { code: "CA", name: "Canada", dial: "+1", lon: -96, lat: 60 },
  { code: "MX", name: "Mexico", dial: "+52", lon: -102, lat: 23 },
  { code: "BR", name: "Brazil", dial: "+55", lon: -51, lat: -10 },
  { code: "AR", name: "Argentina", dial: "+54", lon: -64, lat: -34 },
  { code: "CO", name: "Colombia", dial: "+57", lon: -74, lat: 4 },
  { code: "PE", name: "Peru", dial: "+51", lon: -76, lat: -9 },
  { code: "CL", name: "Chile", dial: "+56", lon: -71, lat: -30 },

  { code: "GB", name: "United Kingdom", dial: "+44", lon: -1, lat: 54 },
  { code: "FR", name: "France", dial: "+33", lon: 2, lat: 46 },
  { code: "DE", name: "Germany", dial: "+49", lon: 10, lat: 51 },
  { code: "IT", name: "Italy", dial: "+39", lon: 12, lat: 42 },
  { code: "ES", name: "Spain", dial: "+34", lon: -3, lat: 40 },
  { code: "PL", name: "Poland", dial: "+48", lon: 20, lat: 52 },
  { code: "SE", name: "Sweden", dial: "+46", lon: 18, lat: 62 },
  { code: "NO", name: "Norway", dial: "+47", lon: 10, lat: 65 },

  { code: "UA", name: "Ukraine", dial: "+380", lon: 32, lat: 49 },
  { code: "RU", name: "Russia", dial: "+7", lon: 105, lat: 61 },

  { code: "TR", name: "Turkey", dial: "+90", lon: 35, lat: 39 },
  { code: "EG", name: "Egypt", dial: "+20", lon: 30, lat: 27 },
  { code: "SA", name: "Saudi Arabia", dial: "+966", lon: 45, lat: 24 },
  { code: "IQ", name: "Iraq", dial: "+964", lon: 44, lat: 33 },
  { code: "IR", name: "Iran", dial: "+98", lon: 53, lat: 33 },

  { code: "CN", name: "China", dial: "+86", lon: 104, lat: 35 },
  { code: "JP", name: "Japan", dial: "+81", lon: 138, lat: 37 },

  { code: "TH", name: "Thailand", dial: "+66", lon: 101, lat: 15 },
  { code: "VN", name: "Vietnam", dial: "+84", lon: 108, lat: 16 },
  { code: "ID", name: "Indonesia", dial: "+62", lon: 117, lat: -2 },
  { code: "PH", name: "Philippines", dial: "+63", lon: 122, lat: 13 },

  { code: "MA", name: "Morocco", dial: "+212", lon: -7, lat: 32 },
  { code: "NG", name: "Nigeria", dial: "+234", lon: 8, lat: 9 },
  { code: "ET", name: "Ethiopia", dial: "+251", lon: 40, lat: 9 },
  { code: "KE", name: "Kenya", dial: "+254", lon: 38, lat: 0 },
  { code: "ZA", name: "South Africa", dial: "+27", lon: 25, lat: -29 },
  { code: "GH", name: "Ghana", dial: "+233", lon: -1, lat: 8 },

  { code: "AU", name: "Australia", dial: "+61", lon: 134, lat: -25 },
  { code: "NZ", name: "New Zealand", dial: "+64", lon: 172, lat: -42 },

  { code: "UZ", name: "Uzbekistan", dial: "+998", lon: 64, lat: 41 },
];

// Region groups — never show 2 countries from same region simultaneously
const REGIONS = {
  namerica: ["US", "CA", "MX"],
  samerica: ["BR", "AR", "CO", "PE", "CL"],
  weurope: ["GB", "FR", "DE", "IT", "ES"],
  neurope: ["SE", "NO", "PL"],
  eeurope: ["UA", "RU"],
  mideast: ["TR", "EG", "SA", "IQ", "IR"],
  sasia: ["PK", "BD"],
  easia: ["CN", "JP", "KR"],
  seasia: ["TH", "VN", "ID", "PH"],
  africa: ["MA", "NG", "ET", "KE", "ZA", "GH"],
  oceania: ["AU", "NZ"],
  casia: ["UZ"],
};

const SVG_W = 960;
const SVG_H = 480;
const MAX_ACTIVE = 5;
const POPUP_LIFETIME = 5800;
const TICK_MS = 1600;

const COUNTRIES_WITH_FLAGS = COUNTRIES.map((c) => ({
  ...c,
  flag: `https://flagcdn.com/w40/${c.code.toLowerCase()}.png`,
}));

// Equirectangular projection
function project(lon, lat) {
  const x = (lon + 180) * (SVG_W / 360);
  const y = (90 - lat) * (SVG_H / 180);
  return [x, y];
}

function getRegion(code) {
  for (const [r, codes] of Object.entries(REGIONS)) {
    if (codes.includes(code)) return r;
  }
  return null;
}

function buildQueue() {
  const regionQueues = Object.values(REGIONS).map((codes) =>
    [...codes].sort(() => Math.random() - 0.5),
  );
  const out = [];
  const maxLen = Math.max(...regionQueues.map((r) => r.length));
  for (let i = 0; i < maxLen * 3; i++) {
    regionQueues.forEach((rq) => out.push(rq[i % rq.length]));
  }
  return out;
}

// ── SVG Pulse Dot ─────────────────────────────────────────────────────────────
function PulseDot({ lon, lat }) {
  const [cx, cy] = project(lon, lat);
  return (
    <g>
      <circle cx={cx} cy={cy} r="3" fill="#020afa" fillOpacity="0.4">
        <animate
          attributeName="r"
          values="3;13;3"
          dur="2.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          values="0.5;0;0.5"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx={cx}
        cy={cy}
        r="4"
        fill="#f97305"
        stroke="white"
        strokeWidth="1.8"
      />
    </g>
  );
}

// ── Popup card ────────────────────────────────────────────────────────────────
function Popup({ country, visible, position }) {
  if (!position) return null;

  return (
    <div
      className="absolute pointer-events-none z-20"
      style={{
        left: position.left,
        top: position.top,
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scale(1) translateY(0px)"
          : "scale(0.88) translateY(8px)",
        transition:
          "opacity 0.38s ease, transform 0.38s cubic-bezier(.34,1.56,.64,1)",
      }}
    >
      <div
        className="bg-white border border-orange-500 flex items-center gap-2.5"
        style={{
          padding: "8px 12px",
          boxShadow: "0 4px 18px rgba(37,99,235,0.12)",
          minWidth: 160,
        }}
      >
        <img
          src={country.flag}
          alt={country.code}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/40x25?text=${country.code}`;
          }}
          style={{
            width: 28,
            height: 20,
            objectFit: "cover",
            borderRadius: 3,
          }}
        />
        <div className="flex flex-col gap-0.5 flex-1">
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#1e3a5f",
              whiteSpace: "nowrap",
            }}
          >
            {country.name}
          </span>
          <span
            style={{
              fontSize: 11,
              fontFamily: "monospace",
              color: "#3b82f6",
            }}
          >
            {country.dial}
          </span>
        </div>
      </div>

      {/* Tail */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ bottom: -8 }}
      >
        <svg width="16" height="9">
          <path d="M0 0 L8 8 L16 0" fill="white" stroke="#ff7b00" />
        </svg>
      </div>
    </div>
  );
}

// ── World paths ───────────────────────────────────────────────────────────────
function WorldPaths({ paths }) {
  return (
    <path
      d={paths}
      fill="#ffffff"
      stroke="#8e8a8a"
      strokeWidth="0.4"
    />
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function WorldMap() {
  const [mapPath, setMapPath] = useState("");
  const [popups, setPopups] = useState({});
  const containerRef = useRef(null);
  const queueRef = useRef(buildQueue());
  const qIdxRef = useRef(0);
  const timersRef = useRef({});
  const byCode = useRef(
    Object.fromEntries(COUNTRIES_WITH_FLAGS.map((c) => [c.code, c])),
  );

  // Load world-atlas + topojson
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js";
    script.onload = () => {
      fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        .then((r) => r.json())
        .then((world) => {
          const features = window.topojson.feature(
            world,
            world.objects.countries,
          ).features;

          let fullPath = "";

          function splitRing(coords) {
            const segs = [[]];
            for (let i = 0; i < coords.length; i++) {
              const pt = coords[i];
              const prev = coords[i - 1];
              if (prev && Math.abs(pt[0] - prev[0]) > 180) segs.push([]);
              segs[segs.length - 1].push(pt);
            }
            return segs;
          }

          function ringPath(seg) {
            if (seg.length < 2) return "";
            return (
              seg
                .map((pt, i) => {
                  const [x, y] = project(pt[0], pt[1]);
                  return (
                    (i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1)
                  );
                })
                .join(" ") + " Z"
            );
          }

          function processRings(rings) {
            let d = "";
            rings.forEach((ring) => {
              splitRing(ring).forEach((seg) => {
                if (seg.length > 1) d += ringPath(seg) + " ";
              });
            });
            return d;
          }

          features.forEach((f) => {
            const g = f.geometry;
            if (g.type === "Polygon") {
              fullPath += processRings(g.coordinates);
            } else if (g.type === "MultiPolygon") {
              g.coordinates.forEach((poly) => {
                fullPath += processRings(poly);
              });
            }
          });

          setMapPath(fullPath.trim());
        });
    };
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const hidePopup = useCallback((code) => {
    // ✅ Fix: copy timersRef.current into local variable before use in closure
    const timers = timersRef.current;
    clearTimeout(timers[code]);
    setPopups((prev) => {
      if (!prev[code]) return prev;
      return { ...prev, [code]: { ...prev[code], visible: false } };
    });
    setTimeout(() => {
      setPopups((prev) => {
        const next = { ...prev };
        delete next[code];
        return next;
      });
    }, 420);
  }, []);

  const showPopup = useCallback(
    (country) => {
      setPopups((prev) => {
        if (prev[country.code]) return prev;
        return { ...prev, [country.code]: { country, visible: false } };
      });
      setTimeout(() => {
        setPopups((prev) => {
          if (!prev[country.code]) return prev;
          return {
            ...prev,
            [country.code]: { ...prev[country.code], visible: true },
          };
        });
      }, 40);
      timersRef.current[country.code] = setTimeout(
        () => hidePopup(country.code),
        POPUP_LIFETIME,
      );
    },
    [hidePopup],
  );

  // Scheduler — region-aware, staggered
  useEffect(() => {
    const queue = queueRef.current;

    const pickNext = (currentActive) => {
      const activeRegions = new Set(
        Object.keys(currentActive).map(getRegion).filter(Boolean),
      );
      for (let tries = 0; tries < queue.length; tries++) {
        const code = queue[qIdxRef.current % queue.length];
        qIdxRef.current = (qIdxRef.current + 1) % queue.length;
        if (currentActive[code]) continue;
        if (activeRegions.has(getRegion(code))) continue;
        return byCode.current[code];
      }
      // Fallback
      for (let tries = 0; tries < queue.length; tries++) {
        const code = queue[qIdxRef.current % queue.length];
        qIdxRef.current = (qIdxRef.current + 1) % queue.length;
        if (!currentActive[code]) return byCode.current[code];
      }
      return null;
    };

    const tick = () => {
      setPopups((prev) => {
        if (Object.keys(prev).length >= MAX_ACTIVE) return prev;
        const country = pickNext(prev);
        if (country) setTimeout(() => showPopup(country), 0);
        return prev;
      });
    };

    [0, 700, 1400, 2100, 2800].forEach((d) => setTimeout(tick, d));
    const id = setInterval(tick, TICK_MS);

    // ✅ Fix: capture timersRef.current in a local variable for cleanup
    const timers = timersRef.current;
    return () => {
      clearInterval(id);
      Object.values(timers).forEach(clearTimeout);
    };
  }, [showPopup]);

  const activeCount = Object.keys(popups).length;

  // ── NO OVERLAP POSITION SYSTEM ──
  const popupPositions = (() => {
    const placed = [];
    const positions = {};
    const GAP = 10;
    const W = 190;
    const H = 60;

    if (!containerRef.current) return {};

    const rect = containerRef.current.getBoundingClientRect();

    Object.values(popups).forEach(({ country, visible }) => {
      if (!visible) return;

      const [x, y] = project(country.lon, country.lat);

      let left = (x / SVG_W) * rect.width - W / 2;
      let top = (y / SVG_H) * rect.height - H - 16;

      left = Math.max(4, Math.min(rect.width - W - 4, left));
      top = Math.max(4, top);

      let collision = true;
      while (collision) {
        collision = false;
        for (const p of placed) {
          if (
            Math.abs(left - p.left) < W &&
            Math.abs(top - p.top) < H
          ) {
            top += H + GAP;
            collision = true;
          }
        }
      }

      const pos = { left, top };
      placed.push(pos);
      positions[country.code] = pos;
    });

    return positions;
  })();

  return (
    <>
      {/* Header */}
      <div
        className="bg-[rgb(30,58,138)] flex items-center justify-center"
        style={{
          minHeight: "100px",
          padding: "10px 16px",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <span
            style={{
              fontSize: 36,
              color: "#ffff00",
              letterSpacing: "0.06em",
            }}
          >
            Real-Time Global Signals
          </span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full bg-white border border-blue-900 overflow-hidden"
        style={{ minHeight: 480 }}
      >
        {/* Live badge */}
        <div className="absolute top-2.5 left-3.5 z-30 flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-green-500"
            style={{ animation: "pulse 1.8s ease-in-out infinite" }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Live World Map
          </span>
        </div>

        {/* Active Countries List */}
        <div
          className="absolute top-[29rem] left-40 z-30"
          style={{ maxHeight: 500, overflow: "hidden" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {Object.values(popups).map(({ country }) => (
              <div
                key={country.code}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "4px 8px",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#ffffff",
                  backdropFilter: "blur(4px)",
                }}
              >
                <img
                  src={country.flag}
                  alt={country.code}
                  style={{
                    width: 28,
                    height: 20,
                    borderRadius: 3,
                    objectFit: "cover",
                  }}
                />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active badge */}
        <div className="absolute top-2.5 right-3.5 z-30">
          <span
            style={{
              fontSize: 11,
              fontFamily: "monospace",
              color: "#ca5202",
              background: "#eff6ff",
              border: "0.5px solid #bfdbfe",
              borderRadius: 999,
              padding: "2px 10px",
            }}
          >
            {activeCount} Active Destination
          </span>
        </div>

        {/* SVG Map */}
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H - 110}`}
          style={{
            display: "block",
            width: "100%",
            height: "700px",
            background: "rgb(30 58 138)",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={SVG_W} height={SVG_H} fill="rgb(30 58 138)" />
          {mapPath ? (
            <WorldPaths paths={mapPath} />
          ) : (
            <text
              x={SVG_W / 2}
              y={SVG_H / 2}
              textAnchor="middle"
              fill="rgb(255, 255, 255)"
              fontSize="16"
            >
              Loading map…
            </text>
          )}

          {Object.values(popups).map(({ country, visible }) =>
            visible ? (
              <PulseDot key={country.code} lon={country.lon} lat={country.lat} />
            ) : null,
          )}
        </svg>

        {/* Popup overlays */}
        {Object.values(popups).map(({ country, visible }) => (
          <Popup
            key={country.code}
            country={country}
            visible={visible}
            position={popupPositions[country.code]}
          />
        ))}
      </div>
    </>
  );
}