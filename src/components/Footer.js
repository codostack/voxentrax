import { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo footer12.jpg";

const footerLinks = {
  Services: [
    "VoIP Calling",
    "SIP Trunking",
    "Call Routing",
    "Call Analytics",
    "International Calling",
  ],
  Company: [
    "Home",
    "About",
    "Services",
    "Rate",
    "Contact Us",
    "Faq",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Service Level Agreement",
    "Regulatory Info",
    "Cookie Policy",
  ],
};

const telecomFeatures = [
  { icon: "📡", title: "99.99% Uptime", sub: "Carrier-grade reliability" },
  { icon: "🔒", title: "Secure Voice", sub: "End-to-end encryption" },
  { icon: "🌍", title: "Global Reach", sub: "providing Services in 20+ countries" },
  { icon: "⚡", title: "Low Latency", sub: "Edge-optimized routing" },
];

export default function TelecomFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="tf-root relative bg-blue-900 text-white pt-16 pb-8 overflow-hidden font-sans">
      <style>{`
        /* ============================================================
           DESKTOP (1024px+) — ZERO CHANGES, all original styles intact
           ============================================================ */

        /* ============================================================
           TABLET (768px – 1023px)
           ============================================================ */
        @media (max-width: 1023px) {
          .tf-features {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding-bottom: 32px !important;
            margin-bottom: 32px !important;
          }
          .tf-main {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .tf-brand-col { grid-column: span 1 !important; }
          .tf-links-col { grid-column: span 1 !important; }
          .tf-connect-col {
            grid-column: span 2 !important;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            align-items: start;
          }
          .tf-connect-col > h4 {
            grid-column: span 2;
            margin-bottom: 0 !important;
          }
          .tf-logo {
            width: 100% !important;
            max-width: 380px !important;
            height: 80px !important;
          }
          .tf-newsletter { max-width: 100% !important; }
          .tf-bottom {
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
          }
        }

        /* ============================================================
           MOBILE (max 767px) — STYLISH REDESIGN
           ============================================================ */
        @media (max-width: 767px) {
          /* Root */
          .tf-root {
            padding-top: 40px !important;
            padding-bottom: 24px !important;
          }
          .tf-container {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          /* ===== Feature Bar — glass cards ===== */
          .tf-features {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            padding-bottom: 28px !important;
            margin-bottom: 28px !important;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .tf-feature {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 8px !important;
            padding: 14px 10px !important;
            background: rgba(255,255,255,0.04) !important;
            border: 1px solid rgba(255,255,255,0.07) !important;
            border-radius: 14px !important;
            backdrop-filter: blur(6px);
          }
          .tf-feature .icon-wrap {
            width: 42px !important;
            height: 42px !important;
            font-size: 20px !important;
            background: linear-gradient(135deg, rgba(34,211,238,0.18), rgba(249,115,22,0.18)) !important;
            border: 1px solid rgba(255,255,255,0.10) !important;
          }
          .tf-feature h4 {
            font-size: 12px !important;
            line-height: 1.2 !important;
          }
          .tf-feature p {
            font-size: 10.5px !important;
            line-height: 1.35 !important;
            color: rgba(255,255,255,0.55) !important;
          }

          /* ===== Main Stack ===== */
          .tf-main {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .tf-brand-col,
          .tf-links-col,
          .tf-connect-col {
            grid-column: span 1 !important;
          }
          .tf-connect-col {
            display: block !important;
          }
          .tf-connect-col > h4 {
            grid-column: unset !important;
          }

          /* ===== Brand / Newsletter — centered, premium ===== */
          .tf-brand-col {
            text-align: center !important;
          }
          .tf-logo-wrap {
            display: inline-block !important;
            padding: 10px !important;
            border-radius: 16px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.25) !important;
          }
          .tf-logo {
            width: 100% !important;
            max-width: 240px !important;
            height: 56px !important;
            object-fit: contain !important;
          }
          .tf-brand-desc {
            font-size: 13.5px !important;
            line-height: 1.65 !important;
            margin: 16px auto 22px !important;
            max-width: 320px !important;
            color: rgba(255,255,255,0.6) !important;
          }
          .tf-brand-col > h4 {
            text-align: center !important;
            font-size: 11px !important;
            letter-spacing: 0.2em !important;
            color: rgba(255,255,255,0.85) !important;
            margin-bottom: 14px !important;
          }

          /* Newsletter as a single pill */
          .tf-newsletter {
            max-width: 360px !important;
            margin: 0 auto !important;
            background: rgba(255,255,255,0.06) !important;
            border: 1px solid rgba(255,255,255,0.12) !important;
            padding: 5px !important;
            border-radius: 999px !important;
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
          }
          .tf-newsletter input {
            background: transparent !important;
            border: none !important;
            color: #fff !important;
            padding: 10px 14px !important;
            font-size: 13px !important;
            border-radius: 999px !important;
            flex: 1 !important;
            min-width: 0 !important;
          }
          .tf-newsletter input::placeholder {
            color: rgba(255,255,255,0.45) !important;
          }
          .tf-newsletter button {
            padding: 10px 18px !important;
            font-size: 12.5px !important;
            border-radius: 999px !important;
            background: linear-gradient(135deg, #f97316, #ea580c) !important;
            box-shadow: 0 6px 18px rgba(249,115,22,0.35) !important;
            white-space: nowrap !important;
          }

          /* ===== Links — centered, divided ===== */
          .tf-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px 16px !important;
            text-align: center !important;
          }
/* Legal spans full width in 2-col grid */
.tf-links-grid > div:last-child {
  grid-column: span 2 !important;
  padding-top: 22px !important;
  border-top: 1px solid rgba(255,255,255,0.08) !important;
}
.tf-links-grid > div:last-child ul {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 10px !important;
  padding: 0 !important;
  margin: 0 !important;
}
.tf-links-grid > div:last-child li {
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
}
.tf-links-grid > div:last-child li button {
  background: rgba(255,255,255,0.05) !important;
  border: 1px solid rgba(255,255,255,0.10) !important;
  padding: 9px 18px !important;
  border-radius: 999px !important;
  font-size: 12px !important;
  color: rgba(255,255,255,0.75) !important;
  text-align: center !important;
  min-width: 220px !important;
  max-width: 260px !important;
  letter-spacing: 0.02em !important;
  transition: all .2s ease !important;
}
.tf-links-grid > div:last-child li button:hover {
  background: rgba(34,211,238,0.10) !important;
  border-color: rgba(34,211,238,0.35) !important;
  color: #22d3ee !important;
}
          .tf-links-grid h4 {
            margin-bottom: 14px !important;
            font-size: 11px !important;
            letter-spacing: 0.22em !important;
          }
          .tf-links-grid ul { gap: 10px !important; }
          .tf-links-grid li button {
            font-size: 13.5px !important;
            display: inline-block !important;
            text-align: center !important;
          }

          /* ===== Connect — centered chips ===== */
          .tf-connect-col { text-align: center !important; }
          .tf-connect h4 {
            margin-bottom: 18px !important;
            font-size: 11px !important;
            letter-spacing: 0.22em !important;
          }
          .tf-connect-list {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
          }
          .tf-connect-list > div {
            font-size: 13px !important;
            background: rgba(255,255,255,0.04) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            padding: 10px 16px !important;
            border-radius: 999px !important;
            justify-content: center !important;
            max-width: 320px !important;
            width: 100% !important;
          }
          .tf-connect-list > div span { text-align: left !important; }

          /* ===== Socials — premium row ===== */
          .tf-socials {
            justify-content: center !important;
            gap: 12px !important;
            margin-top: 22px !important;
          }
          .tf-socials button {
            width: 44px !important;
            height: 44px !important;
            background: rgba(255,255,255,0.05) !important;
            border: 1px solid rgba(255,255,255,0.10) !important;
            border-radius: 12px !important;
            transition: all .25s ease !important;
          }
          .tf-socials button:hover {
            background: rgba(34,211,238,0.12) !important;
            border-color: rgba(34,211,238,0.35) !important;
            transform: translateY(-2px);
          }

          /* ===== Bottom Bar ===== */
          .tf-bottom {
            margin-top: 32px !important;
            padding-top: 18px !important;
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
            border-top: 1px solid rgba(255,255,255,0.06) !important;
          }
          .tf-bottom > p {
            font-size: 11.5px !important;
            color: rgba(255,255,255,0.45) !important;
          }
          .tf-bottom > div {
            flex-direction: column !important;
            gap: 8px !important;
          }
          .tf-bottom > div > span {
            font-size: 11px !important;
          }
        }

        /* ============================================================
           TINY PHONES (max 400px)
           ============================================================ */
        @media (max-width: 400px) {
          .tf-features { grid-template-columns: 1fr 1fr !important; }
          .tf-feature { padding: 12px 8px !important; }
          .tf-feature .icon-wrap { width: 38px !important; height: 38px !important; font-size: 18px !important; }
          .tf-feature h4 { font-size: 11.5px !important; }
          .tf-feature p { font-size: 10px !important; }

          .tf-logo {
            max-width: 200px !important;
            height: 48px !important;
          }

          .tf-newsletter input { font-size: 12.5px !important; padding: 9px 12px !important; }
          .tf-newsletter button { padding: 9px 14px !important; font-size: 12px !important; }

          .tf-links-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
.tf-links-grid > div:last-child {
  grid-column: span 1 !important;
}
.tf-links-grid > div:last-child li button {
  min-width: 180px !important;
  max-width: 240px !important;
  font-size: 11.5px !important;
  padding: 8px 14px !important;
}
          .tf-socials button {
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>

      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-[-50px] w-64 h-64 border-[40px] border-orange-500 rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-[20px] border-cyan-400 rounded-full" />
      </div>

      <div className="tf-container max-w-7xl mx-auto px-6 relative z-10">

        {/* Feature Bar */}
        <div className="tf-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 mb-12">
          {telecomFeatures.map((feat, i) => (
            <div
              key={i}
              className="tf-feature flex items-center gap-4 group transition-all duration-300"
            >
              <div className="icon-wrap w-12 h-12 flex items-center justify-center bg-blue-900 rounded-2xl group-hover:bg-blue-900 transition-colors duration-300 text-2xl flex-shrink-0">
                {feat.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide">{feat.title}</h4>
                <p className="text-xs text-gray-400">{feat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="tf-main grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand & Newsletter */}
          <div className="tf-brand-col lg:col-span-4">
            <div className="tf-logo-wrap inline-block bg-white p-3 rounded-2xl shadow-xl">
              <img
                src={logo}
                alt="Voxentrax"
                className="tf-logo w-[380px] md:w-[520px] h-[90px] object-contain"
              />
            </div>

            <p className="tf-brand-desc text-gray-400 text-sm leading-relaxed mb-8 max-w-md mt-4">
              Empowering global enterprises with next-generation VoIP
              infrastructure and seamless communication APIs.
            </p>

            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Stay Updated
            </h4>
            <div className="tf-newsletter flex max-w-sm">
              <input
                type="email"
                placeholder="Enter your business email"
                className="bg-white border border-gray-800 px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-cyan-500 text-sm text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-lg font-bold text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="tf-links-col lg:col-span-5">
            <div className="tf-links-grid grid grid-cols-3 gap-4">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-orange-500 text-xs font-black uppercase tracking-widest mb-6">
                    {title}
                  </h4>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link}>
                        <button className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 block text-left">
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="tf-connect-col tf-connect lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Connect With Us
            </h4>
            <div className="tf-connect-list space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400 flex-shrink-0" />
                <span>+33756866331</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                <span className="break-all">support@voxentrax.com</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>
                  Global HQ: 123 Tech Plaza, <br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>

            <div className="tf-socials flex gap-4 mt-8">
              {[
                <FaLinkedinIn size={25} />,
                <FaTwitter size={25} />,
                <FaFacebookF size={25} />,
                <FaWhatsapp size={25} />,
              ].map((icon, i) => (
                <button
                  key={i}
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-200 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="tf-bottom mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Voxentrax Telecom Systems. All rights reserved.</p>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              System Status: Operational
            </span>
            <span className="text-gray-500">
              Powered by{" "}
              <a
                href="https://codostack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-medium hover:underline"
              >
                Codostack
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}