import React from "react";

import aboutImg from "../../../assets/Images/abt4.jpg";
import aboutImg2 from "../../../assets/Images/abt6.jpg";

export default function AboutUsContent2() {
  return (
    <section className="ab2-root w-full bg-white py-16 px-6 md:px-20">
      <style>{`
        /* ===== Responsive overrides — desktop view unchanged ===== */
        /* Tablet */
        @media (max-width: 1023px) {
          .ab2-root { padding-left: 32px !important; padding-right: 32px !important; }
          .ab2-hero h1 { font-size: 30px !important; }
          .ab2-hero p { font-size: 16px !important; }
          .ab2-img { width: 100% !important; max-width: 560px !important; height: auto !important; margin: 0 auto !important; display: block; }
        }
        /* Mobile — stacked image → title → description */
        @media (max-width: 767px) {
          .ab2-root { padding: 36px 18px !important; }
          .ab2-hero { margin-bottom: 36px !important; }
          .ab2-hero h1 { font-size: 24px !important; line-height: 1.25 !important; margin-bottom: 12px !important; }
          .ab2-hero p { font-size: 14px !important; line-height: 1.6 !important; }

          .ab2-section {
            display: flex !important;
            flex-direction: column !important;
            gap: 18px !important;
            margin-bottom: 44px !important;
          }
          .ab2-img-wrap { order: 1 !important; }
          .ab2-text-wrap { order: 2 !important; max-width: 100% !important; }

          .ab2-img {
            width: 100% !important;
            max-width: 100% !important;
            height: 220px !important;
            object-fit: cover !important;
            margin-top: 0 !important;
            border-radius: 12px !important;
          }
          .ab2-text-wrap h2 { font-size: 22px !important; margin-bottom: 12px !important; }
          .ab2-text-wrap p {
            font-size: 14px !important;
            line-height: 1.7 !important;
            text-align: left !important;
            margin-bottom: 12px !important;
          }
        }
        /* Tiny phones */
        @media (max-width: 380px) {
          .ab2-hero h1 { font-size: 21px !important; }
          .ab2-img { height: 190px !important; }
          .ab2-text-wrap h2 { font-size: 20px !important; }
          .ab2-text-wrap p { font-size: 13px !important; }
        }
      `}</style>

      {/* MAIN HEADING */}
      <div className="ab2-hero max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-400 mb-4">
          Enabling Intelligent
          <span className="text-orange-500"> Business Communication</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          We deliver advanced VoIP and cloud communication solutions that help businesses
          connect seamlessly and communicate without limits.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="ab2-section grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="ab2-img-wrap">
          <img
            src={aboutImg}
            alt="About"
            className="ab2-img w-[500px]  object-cover rounded-xl mt-[20px]"
          />
        </div>

        <div className="ab2-text-wrap max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">About</span>{" "}
            <span className="text-orange-500">Our Company</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            We are a future-focused VoIP and telecom solutions provider committed to transforming the way businesses communicate. Through advanced cloud-based technologies and next-generation communication infrastructure, we deliver dependable voice, messaging, and connectivity solutions designed to adapt to the evolving demands of modern enterprises. Our platforms replace complex legacy systems with streamlined, scalable, and flexible digital communication ecosystems built for growth.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our team blends deep technical expertise with strong industry understanding to engineer solutions that elevate collaboration, strengthen customer engagement, and ensure seamless global connectivity. With a core focus on performance, security, and simplicity, we empower businesses to operate with confidence—staying connected anytime, anywhere through intelligent and innovative VoIP technology.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="ab2-section grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="ab2-text-wrap max-w-xl">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">Driving</span>{" "}
            <span className="text-orange-500">Innovation</span>
          </h2>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Innovation drives every aspect of our work. We consistently design and evolve advanced VoIP and cloud communication solutions that enable businesses to stay seamlessly connected in an ever-changing digital landscape. By combining cutting-edge technologies with robust telecom infrastructure, we build systems that improve communication efficiency while ensuring outstanding voice clarity, strong security, and reliable performance.
          </p>

          <p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Our philosophy centers on simplifying complex communication ecosystems through intelligent automation and highly scalable platforms. We empower organizations with flexible, future-ready tools that enhance collaboration, support remote and hybrid work models, and deliver uninterrupted global connectivity. Through continuous innovation, we help businesses adapt with confidence, scale effortlessly, and thrive in a rapidly evolving communications world.
          </p>
        </div>

        <div className="ab2-img-wrap">
          <img
            src={aboutImg2}
            alt="Mission"
            className="ab2-img w-full  object-cover rounded-xl mt-[40px]"
          />
        </div>
      </div>
    </section>
  );
}