import { FaPhoneAlt, FaGlobe, FaHeadset, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaPhoneAlt />,
    title: "HD Voice Quality",
    desc: "Crystal clear calls powered by smart VoIP routing."
  },
  {
    icon: <FaGlobe />,
    title: "Global Coverage",
    desc: "Reliable connections across worldwide networks."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Expert telecom engineers available anytime."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Network",
    desc: "Encrypted communication for safe calling."
  }
];

export default function VoipFeatures() {
  return (
    <section className="w-full h-[50vh] bg-white flex items-center justify-center overflow-hidden">

      <div className="max-w-6xl w-full px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#0891b2] mb-12">
          Powerful VoIP Features
        </h2>

        {/* Feature Row */}
        <div className="grid md:grid-cols-4 gap-8 relative">

          {/* Center Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-[#0891b2]/20"></div>

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center
                         opacity-0 translate-y-10 animate-slideUp"
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              {/* Icon Circle */}
              <div
                className="w-16 h-16 rounded-full bg-[#0891b2]
                           text-white flex items-center justify-center
                           text-2xl shadow-lg
                           transition-all duration-500
                           group-hover:scale-110
                           group-hover:shadow-[0_0_25px_rgba(8,145,178,0.6)]"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 font-semibold text-[#0891b2]">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-500 mt-2 max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}