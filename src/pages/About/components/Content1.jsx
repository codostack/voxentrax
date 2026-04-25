import React from "react";

import aboutImg from "../../../assets/Images/abt1.jpg";
import aboutImg2 from "../../../assets/Images/abt2.2.jpg";
import aboutImg3 from "../../../assets/Images/abt3.jpg";

export default function AboutUs() {
  return (
    <section className="ab-root w-full bg-white py-16 px-6 md:px-20">
      <style>{`
        /* ===== Responsive overrides — desktop view unchanged ===== */
        /* Tablet */
        @media (max-width: 1023px) {
          .ab-root { padding-left: 32px !important; padding-right: 32px !important; }
          .ab-hero h1 { font-size: 30px !important; }
          .ab-hero p { font-size: 16px !important; }
          .ab-img { width: 100% !important; max-width: 560px !important; height: auto !important; margin: 0 auto !important; display: block; }
        }
        /* Mobile — stacked image → title → description */
        @media (max-width: 767px) {
          .ab-root { padding: 36px 18px !important; }
          .ab-hero { margin-bottom: 36px !important; }
          .ab-hero h1 { font-size: 24px !important; line-height: 1.25 !important; margin-bottom: 12px !important; }
          .ab-hero p { font-size: 14px !important; line-height: 1.6 !important; }

          .ab-section {
            display: flex !important;
            flex-direction: column !important;
            gap: 18px !important;
            margin-bottom: 44px !important;
          }
          /* Force image to render before the text in every section */
          .ab-img-wrap { order: 1 !important; }
          .ab-text-wrap { order: 2 !important; max-width: 100% !important; }

          .ab-img {
            width: 100% !important;
            max-width: 100% !important;
            height: 220px !important;
            object-fit: cover !important;
            margin-top: 0 !important;
            border-radius: 12px !important;
          }
          .ab-text-wrap h2 { font-size: 22px !important; margin-bottom: 12px !important; }
          .ab-text-wrap p {
            font-size: 14px !important;
            line-height: 1.7 !important;
            text-align: justify !important;
            margin-bottom: 12px !important;
          }
        }
        /* Tiny phones */
        @media (max-width: 380px) {
          .ab-hero h1 { font-size: 21px !important; }
          .ab-img { height: 190px !important; }
          .ab-text-wrap h2 { font-size: 20px !important; }
          .ab-text-wrap p { font-size: 13px !important; }
        }
      `}</style>

      {/* MAIN HEADING */}
      <div className="ab-hero max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-400 mb-4">
          Business Connectivity
          <span className="text-orange-500">  with Voxentrax</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Voxentrax delivers advanced VoIP and telecom solutions designed to enable seamless communication, secure connectivity, and scalable collaboration for modern enterprises in a digitally driven world.
        </p>
      </div>

      {/* SECTION 1 — WHO WE ARE */}
      <div className="ab-section grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="ab-img-wrap">
          <img
            src={aboutImg}
            alt="About Voxentrax"
            className="ab-img w-[600px] object-cover rounded-xl"
          />
        </div>

        <div className="ab-text-wrap max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">About </span>{" "}
            <span className="text-orange-500">Voxentrax</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Voxentrax is a next-generation VoIP and telecom solutions provider dedicated to redefining business communication through advanced cloud-driven technologies. We empower organizations to move beyond traditional telephony by delivering reliable, flexible, and high-performance communication platforms built for today’s connected and dynamic workforce.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our team brings together deep telecom expertise and forward-thinking engineering to create solutions that enhance collaboration, elevate customer engagement, and ensure seamless, uninterrupted connectivity. At Voxentrax, we believe communication should be intuitive, powerful, and accessible—anytime, anywhere.
          </p>
          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            By blending innovation with a customer-centric approach, Voxentrax enables businesses to streamline communication workflows and adapt to rapidly evolving digital landscapes. Our commitment to reliability, scalability, and continuous advancement helps organizations stay connected, improve operational efficiency, and foster stronger relationships with customers across global markets.
          </p>
        </div>
      </div>

      {/* SECTION 2 — MISSION */}
      <div className="ab-section grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="ab-text-wrap max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">Our </span>{" "}
            <span className="text-orange-500">Mission</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our mission is to empower businesses with secure, scalable VoIP communication solutions that streamline operations and strengthen global connectivity. We are dedicated to eliminating communication barriers through cloud-driven platforms that deliver clarity, speed, and reliability across every interaction.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Through continuous innovation and a customer-centric approach, Voxentrax creates intelligent communication environments that enhance productivity, support seamless remote collaboration, and enable organizations to grow with confidence in an increasingly digital landscape.
          </p>
          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We are committed to delivering solutions that not only address today’s business needs but also prepare organizations for future growth. By leveraging advanced VoIP technologies, automation, and secure cloud infrastructure, Voxentrax enables businesses to operate more efficiently, respond swiftly to customer demands, and maintain uninterrupted connectivity in a dynamic global marketplace.
          </p>
        </div>

        <div className="ab-img-wrap">
          <img
            src={aboutImg2}
            alt="Voxentrax Mission"
            className="ab-img w-full h-[370px] object-cover rounded-xl mt-[20px]"
          />
        </div>
      </div>

      {/* SECTION 3 — VISION */}
      <div className="ab-section grid md:grid-cols-2 gap-12 items-center">

        <div className="ab-img-wrap">
          <img
            src={aboutImg3}
            alt="Vision"
            className="ab-img w-[600px] object-cover rounded-xl"
          />
        </div>

        <div className="ab-text-wrap max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">Our</span>{" "}
            <span className="text-orange-500">Vision</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our vision is to shape the future of global communication by building intelligent VoIP ecosystems that seamlessly connect people and businesses without limitations. We aim to redefine telecom experiences through continuous innovation, intelligent automation, and advanced cloud-driven infrastructure.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Voxentrax aspires to be a trusted global leader in VoIP technology, setting new benchmarks for communication quality, reliability, and user experience. By evolving alongside emerging technologies, we empower businesses to stay connected, competitive, and future-ready.
          </p>
          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Looking ahead, Voxentrax envisions a world where communication is seamless, intelligent, and accessible across every device and location. Through strategic investment in innovation and ongoing platform enhancement, we aim to deliver solutions that enable businesses to collaborate globally, drive innovation, and achieve sustainable growth in the digital era.
          </p>
        </div>
      </div>

    </section>
  );
}