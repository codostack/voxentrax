import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
  FaCalendarAlt,
} from "react-icons/fa";

function GermanyMap() {
  return (
    <div className="w-full relative">
      {/* FULL WIDTH MAP */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <iframe
          title="France Office Map"
          src="https://www.google.com/maps?q=25+Rue+de+la+Paix,+75002+Paris,+France&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* CONTACT BOX */}
      <div
        className="bg-white rounded-2xl shadow-xl p-5 sm:p-6
                   mx-4 -mt-10 relative z-10
                   md:absolute md:top-2 md:left-2 md:mx-0 md:mt-0
                   md:w-[90%] md:max-w-sm"
      >
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          France Office
        </h2>

        <div className="space-y-4 text-gray-700 text-sm">
          {/* Owner */}
          <div className="flex items-center gap-3">
            <FaUserTie className="text-orange-500 flex-shrink-0" />
            <p>
              <span className="font-semibold">Kevin Dubois (KD)</span>
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
            <p>
              25 Rue de la Paix,
              <br />
              75002 Paris,
              <br />
              France
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-orange-500 flex-shrink-0" />
            <p>+33 756866331</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-orange-500 flex-shrink-0" />
            <p className="break-all">ceo@voxentrax.com</p>
          </div>

          {/* Founded Date */}
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-orange-500 flex-shrink-0" />
            <p>Founded: 01 May 2024</p>
          </div>
        </div>

        {/* Button */}
        <a
          href="https://www.google.com/maps/place/25+Rue+de+la+Paix,+75002+Paris,+France"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition"
        >
          View on Map
        </a>
      </div>

      {/* Mobile Bottom Spacing */}
      <div className="h-4 md:hidden" />
    </div>
  );
}

export default GermanyMap;