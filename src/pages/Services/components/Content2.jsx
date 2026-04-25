import React from "react";

import aboutImg from "../../../assets/Images/srv4.jpg";
import aboutImg2 from "../../../assets/Images/srv5.5.jpg";

export default function ServiceContent2() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 md:px-20">
      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-10 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-default text-gray-400 mb-4 leading-snug">
          Next-Level VoIP & Telecom
          <span className="text-orange-500"> Services</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Voxentrax delivers cutting-edge VoIP and telecom solutions designed
          to streamline communication, elevate operational efficiency, and
          empower businesses to connect globally with exceptional reliability,
          clarity, and performance.
        </p>
      </div>

      {/* SECTION 1 — image left on desktop */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
        <img
          src={aboutImg}
          alt="VoIP Solutions"
          className="w-full h-56 sm:h-72 md:h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-[41rem]">
          <h2 className="text-xl sm:text-2xl font-default mt-0 md:mt-12 mb-4">
            <span className="text-gray-400">Comprehensive</span>{" "}
            <span className="text-orange-500">VoIP Solutions</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Voxentrax delivers enterprise-grade VoIP solutions engineered to
            provide exceptional voice clarity, ultra-low latency, and
            uninterrupted connectivity. Our platforms are designed to support
            call centers, corporate communication environments, and global
            business operations with precision and reliability.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mt-3">
            Through advanced routing technologies, real-time monitoring, and
            intelligent traffic optimization, we offer secure, scalable
            communication systems that adapt seamlessly to evolving
            operational demands. This ensures consistent performance and a
            superior communication experience across every interaction.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mt-3">
            Our solutions integrate effortlessly with existing CRM platforms,
            cloud applications, and business tools, enabling organizations to
            streamline workflows and enhance collaboration. Backed by 24/7
            expert support and proactive network management, Voxentrax
            empowers businesses to minimize downtime, maintain operational
            continuity, and project a professional, unified presence across
            all communication channels.
          </p>
        </div>
      </div>

      {/* SECTION 2 — image right on desktop, image FIRST on mobile */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-9 mt-12 md:mt-40">
        {/* Text — second on mobile, first on desktop */}
        <div className="max-w-[41rem] order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl font-default mb-4">
            <span className="text-gray-400">Smart</span>{" "}
            <span className="text-orange-500">Business Communication</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Voxentrax delivers intelligent communication platforms that
            integrate seamlessly with modern business workflows, enabling
            organizations to manage inbound and outbound calls, messaging, and
            collaboration through a unified interface. This streamlined
            approach empowers teams to operate with greater efficiency and
            communicate with clarity and precision.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mt-3">
            Enhanced with advanced analytics, automated reporting, and deep
            workflow integration, our solutions provide actionable insights
            that help businesses optimize performance, strengthen customer
            engagement, and drive measurable growth. Every interaction
            becomes an opportunity for smarter, data-driven decision-making.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify mt-3">
            Our platforms also support multi-channel communication, including
            voice, messaging, and video conferencing, ensuring seamless
            connectivity across teams and clients—anytime, anywhere. By
            combining intelligent automation with secure cloud infrastructure,
            Voxentrax enables businesses to simplify communication processes
            while maintaining exceptional reliability, compliance, and
            performance at every level.
          </p>
        </div>

        {/* Image — first on mobile, second on desktop */}
        <img
          src={aboutImg2}
          alt="Business Communication"
          className="w-full h-56 sm:h-72 md:h-[530px] object-cover rounded-xl order-1 md:order-2"
        />
      </div>
    </section>
  );
}