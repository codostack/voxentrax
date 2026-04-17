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
// Import your logo as before
import logo from "../assets/logo footer12.jpg";

const footerLinks = {
  Services: [
    "Cloud PBX Solutions",
    "SIP Trunking",
    "Virtual Phone Numbers",
    "IVR Systems",
    "International Calling",
  ],
  Company: [
    "About Voxentrax",
    "Our Network",
    "Success Stories",
    "Latest News",
    "Contact Sales",
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
  { icon: "🌍", title: "Global Reach", sub: "Presence in 120+ countries" },
  { icon: "⚡", title: "Low Latency", sub: "Edge-optimized routing" },
];

export default function TelecomFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-[#0f172a] text-white pt-16 pb-8 overflow-hidden font-sans">
      {/* Subtle Background Infographic Pattern (Inspired by Image 2) */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-[-50px] w-64 h-64 border-[40px] border-orange-500 rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-[20px] border-cyan-400 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Feature Bar (Telecom Infographic Style) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 mb-12 border-b border-gray-800">
          {telecomFeatures.map((feat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 group transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300 text-2xl">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-4">
 <div className="inline-block bg-white p-3 rounded-2xl shadow-xl">
    <img
      src={logo}
      alt="Voxentrax"
      className="w-[380px] md:w-[520px] h-[90px] object-contain"
    />
  </div>

  <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md mt-4">
    Empowering global enterprises with next-generation VoIP
    infrastructure and seamless communication APIs.
  </p>

            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
              Stay Updated
            </h4>
            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Enter your business email"
                className="bg-gray-900 border border-gray-800 px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-cyan-500 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-lg font-bold text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
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
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Connect With Us
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                <span>+1 (800) VOIP-XTX</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>support@voxentrax.com</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <span>
                  Global HQ: 123 Tech Plaza, <br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              {[
                <FaLinkedinIn />,
                <FaTwitter />,
                <FaFacebookF />,
                <FaWhatsapp />,
              ].map((link, i) => (
            <button
  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200 block text-left"
>
  {link}
</button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Voxentrax Telecom Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
