import React from "react";

import aboutImg from "../../../assets/Images/hom1.1.jpg";
import aboutImg2 from "../../../assets/Images/hom2.22.jpg";
import aboutImg3 from "../../../assets/Images/hom3.jpg";

export default function AboutUs() {
  return (
    <section className="ab3-root w-full bg-white py-12 md:py-16 px-4 md:px-20">
      <style>{`
        /* ===== Responsive overrides — desktop view unchanged ===== */
        /* Tablet */
        @media (max-width: 1023px) {
          .ab3-root { padding-left: 28px !important; padding-right: 28px !important; }
          .ab3-hero h1 { font-size: 30px !important; }
          .ab3-hero p { font-size: 16px !important; }
          .ab3-img { height: 360px !important; }
        }
        /* Mobile */
        @media (max-width: 767px) {
          .ab3-root { padding: 32px 16px !important; }
          .ab3-hero { margin-bottom: 32px !important; }
          .ab3-hero h1 { font-size: 24px !important; line-height: 1.25 !important; margin-bottom: 12px !important; }
          .ab3-hero p { font-size: 14px !important; line-height: 1.6 !important; }

          .ab3-section {
            gap: 18px !important;
            margin-bottom: 36px !important;
          }
          .ab3-img {
            height: 220px !important;
            margin-top: 0 !important;
            border-radius: 12px !important;
          }
          .ab3-text { max-width: 100% !important; }
          .ab3-text h2 { font-size: 22px !important; margin-bottom: 12px !important; }
          .ab3-text p {
            font-size: 14px !important;
            line-height: 1.7 !important;
            text-align: left !important;
            margin-bottom: 12px !important;
          }
        }
        /* Tiny phones */
        @media (max-width: 380px) {
          .ab3-hero h1 { font-size: 21px !important; }
          .ab3-img { height: 190px !important; }
          .ab3-text h2 { font-size: 20px !important; }
          .ab3-text p { font-size: 13px !important; }
        }
      `}</style>

      {/* MAIN HEADING */}
      <div className="ab3-hero max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-400 mb-4">
          Intelligent Communication Solutions by
          <span className="text-orange-500"> Voxentrax</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Voxentrax offers advanced VoIP and telecom solutions designed for smooth communication, reliable connectivity, and flexible collaboration in today’s fast-paced digital world.
        </p>
      </div>

      {/* SECTION 1 — WHO WE ARE */}
      <div className="ab3-section grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="About DialInfinity"
          className="ab3-img w-full h-[450px] object-cover rounded-xl order-1 md:order-none"
        />

        <div className="ab3-text max-w-[41rem] order-2 md:order-none">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">Expertise </span>{" "}
            <span className="text-orange-500">We Deliver</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Voxentrax delivers advanced VoIP communication solutions that empower businesses with seamless voice connectivity through secure, cloud-driven infrastructure. Our platform is designed to overcome traditional telecom constraints, offering flexible and cost-efficient communication environments that enhance everyday business efficiency.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            From enterprise-grade calling to global connectivity, our solutions ensure crystal-clear voice quality, intelligent call routing, and effortless integration with modern business applications. Organizations can streamline communication workflows, gain real-time performance insights, and maintain dependable connections across diverse locations and distributed teams.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Built to support expanding businesses, remote operations, and customer-centric environments, our services provide scalable communication capabilities that adapt to evolving business needs—while upholding the highest standards of security, reliability, and user experience.
          </p>
        </div>
      </div>

      {/* SECTION 2 — MISSION */}
      <div className="ab3-section grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="ab3-text max-w-[41rem] order-2 md:order-none">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">The Future with </span>{" "}
            <span className="text-orange-500">Voxentrax</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Businesses choose Voxentrax for its robust infrastructure, enterprise-grade security, and highly scalable communication architecture. Our VoIP ecosystem is engineered to deliver consistent, high-performance connectivity—empowering organizations to operate seamlessly without disruptions or latency concerns.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We emphasize clarity, reliability, and operational visibility through advanced analytics, real-time call monitoring, and flexible configuration capabilities. This enables businesses to optimize communication workflows while retaining complete control over their telecom environment.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Driven by continuous innovation and a customer-centric approach, Voxentrax helps organizations reduce communication costs, enhance team collaboration, and build stronger customer relationships through reliable and high-quality voice connectivity.
          </p>
        </div>

        <img
          src={aboutImg2}
          alt="DialInfinity Mission"
          className="ab3-img w-full h-[450px] object-cover rounded-xl mt-[40px] order-1 md:order-none"
        />
      </div>

      {/* SECTION 3 — VISION */}
      <div className="ab3-section grid md:grid-cols-2 gap-12 items-center">

        <img
          src={aboutImg3}
          alt="DialInfinity Vision"
          className="ab3-img w-full h-[490px] object-cover rounded-xl order-1 md:order-none"
        />

        <div className="ab3-text max-w-[41rem] order-2 md:order-none">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">The Voxentrax </span>{" "}
            <span className="text-orange-500">Technology Advantage</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            At Voxentrax, technology is the foundation of every communication experience we deliver. Our cloud-powered VoIP infrastructure is meticulously engineered for speed, resilience, and global accessibility—enabling businesses to communicate effortlessly without the limitations of legacy systems.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We leverage advanced networking technologies, intelligent call routing, and scalable architecture to ensure optimized performance across diverse regions and network environments. This ensures consistently high voice quality and uninterrupted service delivery at every touchpoint.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Through continuous innovation and strategic development, Voxentrax builds future-ready communication platforms that empower digital transformation, enhance remote collaboration, and support sustainable business growth in an ever-evolving technological landscape.
          </p>
        </div>
      </div>

    </section>
  );
}