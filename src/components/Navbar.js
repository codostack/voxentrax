import { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { Languages } from "lucide-react";
import logo from "../assets/logo footer12.jpg";
import { LanguageContext } from "../Context/LanguageContext";
import usePageTranslator from "../usePageTranslator";
import { navbarTranslations } from "./DummyTranslator/Navbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const loading = usePageTranslator(language); // Capture loading state

  const nav = navbarTranslations[language] || navbarTranslations.en;

  const navItems = [
    { name: nav.home, href: "/" },
    { name: nav.about, href: "/about" },
    { name: nav.services, href: "/services" },
    { name: nav.rates, href: "/rate" },
    { name: nav.contact, href: "/contact" },
    { name: nav.faq, href: "/faq" },
  ];

  const languages = [
    { name: "English", code: "en" },
    { name: "French", code: "fr" },
    { name: "Arabic", code: "ar" },
    { name: "Spanish", code: "es" },
  ];

  return (
    <>
      {/* ───── Translator Loading Overlay ───── */}
      {loading && <TranslatorLoader language={language} />}

      <nav className="bg-white sticky top-0 z-50">
        <div className="w-full px-6 py-4 relative flex items-center">

          {/* LEFT: Logo + Social */}
          <div className=" relative group  flex items-center">

            {/* ✅ Logo Image */}
            <img src={logo} alt="logo" className="h-14 w-auto object-contain" />

            {/* Social Icons */}
            <div className="absolute left-0 top-48 flex flex-col gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

              <a href="/" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1877F2] text-white shadow-md hover:scale-110 transition">
                <FaFacebookF size={16} />
              </a>

              <a href="/" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1DA1F2] text-white shadow-md hover:scale-110 transition">
                <FaTwitter size={16} />
              </a>

              <a href="/" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#E4405F] text-white shadow-md hover:scale-110 transition">
                <FaInstagram size={16} />
              </a>

              <a href="/" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0A66C2] text-white shadow-md hover:scale-110 transition">
                <FaLinkedinIn size={16} />
              </a>

              <a href="/" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#FF0000] text-white shadow-md hover:scale-110 transition">
                <FaYoutube size={16} />
              </a>

              <a href="/" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#171515] text-white shadow-md hover:scale-110 transition">
                <FaGithub size={16} />
              </a>

            </div>
          </div>

          {/* CENTER: Nav */}
          <ul className="hidden md:flex gap-8 text-gray-400 font-medium absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-sky-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">

            <div className="relative w-40">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={loading}
                className="
                  w-full pl-12 pr-4 py-2
                  rounded-lg border border-blue-400
                  bg-white text-gray-700
                  appearance-none outline-none
                  focus:ring-0 focus:border-gray-400
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              <Languages
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"
              />
            </div>

            <button className="px-5 py-2 rounded-lg bg-white text-orange-500 hover:bg-orange-50 transition border border-orange-400">
              {nav.demo}
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-auto text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-gray-50 px-6 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-500 py-1 hover:text-sky-400"
              >
                {item.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-3">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={loading}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 w-24 appearance-none disabled:opacity-60"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              <button className="px-4 py-2 rounded-lg bg-blue-700 text-white">
                {nav.demo}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

/* ───── Simple Translator Loading Overlay ───── */
const TranslatorLoader = ({ language }) => {
  const labels = {
    en: "Translating…",
    fr: "Traduction…",
    ar: "جارٍ الترجمة…",
    es: "Traduciendo…",
  };
  const label = labels[language] || labels.en;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(255,255,255,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <style>{`
        @keyframes tlSpin {
          to { transform: rotate(360deg); }
        }
        .tl-spinner {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 3px solid #e5e7eb;
          border-top-color: #3b82f6;
          animation: tlSpin 0.8s linear infinite;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 22px",
          background: "#ffffff",
          borderRadius: 12,
          boxShadow: "0 8px 24px rgba(15,23,42,0.12)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div className="tl-spinner" />
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#0f172a",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default Navbar;