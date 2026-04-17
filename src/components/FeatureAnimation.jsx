import React from "react";
import {
  PhoneCall,
  Headphones,
  Globe,
  ShieldCheck,
  Zap,
  Server,
  MessageSquare,
  Radio,
} from "lucide-react";

/* ───────── SAFE COLOR MAP ───────── */
const serviceStyles = [
  { bg: "bg-blue-500", border: "border-blue-200" },
  { bg: "bg-emerald-500", border: "border-emerald-200" },
  { bg: "bg-purple-500", border: "border-purple-200" },
  { bg: "bg-rose-500", border: "border-rose-200" },
  { bg: "bg-amber-500", border: "border-amber-200" },
  { bg: "bg-sky-500", border: "border-sky-200" },
  { bg: "bg-indigo-500", border: "border-indigo-200" },
  { bg: "bg-teal-500", border: "border-teal-200" },
];

const services = [
  { label: "VoIP Voice Solutions", desc: "High-quality global calling", icon: PhoneCall },
  { label: "Call Center Platform", desc: "Enterprise support infrastructure", icon: Headphones },
  { label: "Global Routing", desc: "Smart carrier routing system", icon: Globe },
  { label: "Secure Communication", desc: "Encrypted voice & data security", icon: ShieldCheck },
  { label: "Low Latency Network", desc: "Ultra-fast telecom backbone", icon: Zap },
  { label: "Cloud PBX System", desc: "Scalable business telephony", icon: Server },
  { label: "SMS Gateway", desc: "Bulk messaging delivery system", icon: MessageSquare },
  { label: "SIP Trunking", desc: "Carrier-grade connectivity", icon: Radio },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">

      {/* ───── Background Layers ───── */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-white to-white" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 via-transparent to-transparent" />

      {/* header */}
      <div className="relative max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-grey-700">
          Our Communication Services
        </h2>
      </div>

      {/* marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-scroll gap-6 px-6">
          {[...services, ...services].map((item, i) => {
            const Icon = item.icon;
            const style = serviceStyles[i % serviceStyles.length];

            return (
              <div
                key={i}
                className={`min-w-[270px] bg-white border ${style.border} shadow-sm rounded-2xl p-5 flex gap-4 items-start transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                {/* icon */}
                <div className={`${style.bg} p-3 rounded-xl text-white`}>
                  <Icon size={20} />
                </div>

                {/* text */}
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 22s linear infinite;
          }
        `}
      </style>
    </section>
  );
}