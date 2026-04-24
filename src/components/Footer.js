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
        /* ===== Responsive overrides — desktop view unchanged ===== */
        /* Tablet */
        @media (max-width: 1023px) {
          .tf-root { padding-top: 56px !important; }
          .tf-logo-wrap { display: block; max-width: 100%; }
          .tf-logo { width: 100% !important; max-width: 380px !important; height: 80px !important; }
        }
        /* Mobile */
        @media (max-width: 767px) {
          .tf-root { padding-top: 44px !important; padding-bottom: 24px !important; }
          .tf-container { padding-left: 18px !important; padding-right: 18px !important; }
          .tf-features { gap: 18px !important; padding-bottom: 24px !important; margin-bottom: 24px !important; }
          .tf-feature { gap: 12px !important; }
          .tf-main { gap: 28px !important; }
          .tf-logo-wrap { padding: 8px !important; border-radius: 14px !important; }
          .tf-logo { width: 100% !important; max-width: 260px !important; height: 60px !important; }
          .tf-brand-desc { font-size: 12.5px !important; margin-bottom: 22px !important; max-width: 100% !important; }
          .tf-newsletter { max-width: 100% !important; }
          .tf-newsletter input { padding: 10px 12px !important; font-size: 12.5px !important; }
          .tf-newsletter button { padding: 10px 16px !important; font-size: 12.5px !important; }
          .tf-links-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 22px 12px !important; }
          .tf-links-grid h4 { margin-bottom: 16px !important; }
          .tf-links-grid ul { gap: 10px !important; }
          .tf-links-grid ul li { line-height: 1.2; }
          .tf-links-grid li button { font-size: 12.5px !important; }
          .tf-connect h4 { margin-bottom: 18px !important; }
          .tf-connect-list { gap: 12px !important; }
          .tf-connect-list > div { font-size: 12.5px !important; }
          .tf-socials { gap: 10px !important; margin-top: 20px !important; }
          .tf-socials button { width: 38px !important; height: 38px !important; }
          .tf-socials svg { width: 18px !important; height: 18px !important; }
          .tf-bottom { margin-top: 36px !important; padding-top: 18px !important; gap: 10px !important; text-align: center; }
          .tf-bottom p { text-align: center; }
        }
        /* Tiny phones */
        @media (max-width: 380px) {
          .tf-logo { max-width: 220px !important; height: 52px !important; }
          .tf-links-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Subtle Background Infographic Pattern (Inspired by Image 2) */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-[-50px] w-64 h-64 border-[40px] border-orange-500 rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-[20px] border-cyan-400 rounded-full" />
      </div>

      <div className="tf-container max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Feature Bar (Telecom Infographic Style) */}
        <div className="tf-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 mb-12">
          {telecomFeatures.map((feat, i) => (
            <div
              key={i}
              className="tf-feature flex items-center gap-4 group transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-900 rounded-2xl group-hover:bg-blue-900 transition-colors duration-300 text-2xl flex-shrink-0">
                {feat.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide">
                  {feat.title}
                </h4>
                <p className="text-xs text-gray-400">{feat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Content (Inspired by Clothes Website Layout) */}
        <div className="tf-main grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-4">
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

          {/* Links Sections */}
          <div className="lg:col-span-5 tf-links-grid grid grid-cols-3 gap-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-orange-500 text-xs font-black uppercase tracking-widest mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <button
                        className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 block text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Social Section */}
          <div className="lg:col-span-3 tf-connect">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Connect With Us
            </h4>
            <div className="tf-connect-list space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400 flex-shrink-0" />
                <span>+1 (800) VOIP-XTX</span>
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
              ].map((link, i) => (
                <button
                  key={i}
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-200 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10"
                >
                  {link}
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

            {/* Powered by */}
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