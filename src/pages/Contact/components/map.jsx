import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function GermanyMap() {
  return (
    <div className="w-full relative">

      {/* FULL WIDTH MAP */}
      <div className="w-full h-[500px]">
        <iframe
          title="Germany Map"
          src="https://www.google.com/maps?q=Berlin,Germany&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* OVERLAY CONTACT BOX */}
      <div className="absolute top-2 left-2 bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm">
        
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Germany Office
        </h2>

        <div className="space-y-4 text-gray-700 text-sm">

          {/* Address */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-orange-500 mt-1" />
            <p>
              Berlin, Germany <br />
              Street Name, ZIP Code
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-orange-500" />
            <p>+49 123 456 7890</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-orange-500" />
            <p>support@yourcompany.com</p>
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

    </div>
  );
}

export default GermanyMap;