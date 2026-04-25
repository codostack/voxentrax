import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function GermanyMap() {
  return (
    <div className="w-full relative">

      {/* FULL WIDTH MAP */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <iframe
          title="Germany Map"
          src="https://www.google.com/maps?q=Berlin,Germany&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* CONTACT BOX
          - Mobile: sits below the map as a normal full-width card
          - md+   : floats over the map (top-left), exactly as before */}
      <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6
                      mx-4 -mt-10 relative z-10
                      md:absolute md:top-2 md:left-2 md:mx-0 md:mt-0
                      md:w-[90%] md:max-w-sm">

        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Germany Office
        </h2>

        <div className="space-y-4 text-gray-700 text-sm">

          {/* Address */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
            <p>
              Berlin, Germany <br />
              Street Name, ZIP Code
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-orange-500 flex-shrink-0" />
            <p>+49 123 456 7890</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-orange-500 flex-shrink-0" />
            <p className="break-all">support@yourcompany.com</p>
          </div>
        </div>

        {/* Button */}
        <a
          href="https://www.google.com/maps/place/Berlin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition"
        >
          View on Map
        </a>
      </div>

      {/* small bottom spacing on mobile so the floating card has breathing room */}
      <div className="h-4 md:hidden" />

    </div>
  );
}

export default GermanyMap;