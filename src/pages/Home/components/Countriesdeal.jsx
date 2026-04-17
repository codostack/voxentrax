import React from "react";

/* ───────── COUNTRY DATA ───────── */
const countries = [
  { name: "United States", code: "+1", flag: "us" },
  { name: "United Kingdom", code: "+44", flag: "gb" },
  { name: "Canada", code: "+1", flag: "ca" },
  { name: "Australia", code: "+61", flag: "au" },
  { name: "Japan", code: "+81", flag: "jp" },
  { name: "Singapore", code: "+65", flag: "sg" },
  { name: "Germany", code: "+49", flag: "de" },
  { name: "UAE", code: "+971", flag: "ae" },
  { name: "India", code: "+91", flag: "in" },
  { name: "France", code: "+33", flag: "fr" },
  { name: "Brazil", code: "+55", flag: "br" },
  { name: "South Africa", code: "+27", flag: "za" },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-white to-white" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent" />

      {/* Header */}
      <div className="relative max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Global VoIP Coverage
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Connect worldwide with premium routing across 150+ countries using carrier-grade VoIP infrastructure.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-scroll gap-6 px-6">

          {[...countries, ...countries].map((c, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white border border-blue-100 rounded-2xl p-5 flex items-center gap-5 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >

              {/* BIG FLAG ICON */}
              <img
                src={`https://flagcdn.com/w80/${c.flag}.png`}
                alt={c.name}
                className="w-14 h-10 rounded-md border border-gray-200 object-cover"
              />

              {/* TEXT */}
              <div className="text-left">
                <div className="text-base font-semibold text-gray-900">
                  {c.name}
                </div>
                <div className="text-sm text-blue-600 font-medium mt-1">
                  Country Code: {c.code}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>

    </section>
  );
}