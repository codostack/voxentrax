import React from "react";

import aboutImg from "../../../assets/Images/abt1.jpg";
import aboutImg2 from "../../../assets/Images/abt2.2.jpg";
import aboutImg3 from "../../../assets/Images/abt3.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-400 mb-4">
     Business Connectivity
          <span className="text-orange-500">  with Voxentrax</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
    Voxentrax delivers advanced VoIP and telecom solutions designed to enable seamless communication, secure connectivity, and scalable collaboration for modern enterprises in a digitally driven world.
        </p>
      </div>

      {/* SECTION 1 — WHO WE ARE */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="About        Voxentrax"
          className="w-[600px] object-cover rounded-xl"
        />

        <div className="max-w-[41rem]">
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
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="max-w-[41rem]">
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

        <img
          src={aboutImg2}
          alt="Voxentrax Mission"
          className="w-full h-[370px] object-cover rounded-xl mt-[20px]"
        />
      </div>

      {/* SECTION 3 — VISION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src={aboutImg3}
          alt="Vision"
          className="w-[600px] object-cover rounded-xl"
        />

        <div className="max-w-[41rem]">
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