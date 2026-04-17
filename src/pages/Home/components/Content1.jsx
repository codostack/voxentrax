import React from "react";

import aboutImg from "../../../assets/Images/hom1.1.jpg";
import aboutImg2 from "../../../assets/Images/hom2.22.jpg";
import aboutImg3 from "../../../assets/Images/hom3.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
<h1 className="text-4xl md:text-3xl font-default text-gray-400 mb-4">
Intelligent Communication Solutions by 
  <span className="text-orange-500"> Voxentrax</span>
</h1>

<p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
 Voxentrax offers advanced VoIP and telecom solutions designed for smooth communication, reliable connectivity, and flexible collaboration in today’s fast-paced digital world.
</p>
      </div>

      {/* SECTION 1 — WHO WE ARE */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="About DialInfinity"
          className="w-full h-[450px] object-cover rounded-xl"
        />

<div className="max-w-[41rem]">
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
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

<div className="max-w-[41rem]">
  <h2 className="text-2xl font-default mb-4">
  <span className="text-gray-400">The Future with  </span>{" "}
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
          className="w-full h-[450px] object-cover rounded-xl mt-[40px]"
        />
      </div>

      {/* SECTION 3 — VISION */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src={aboutImg3}
          alt="DialInfinity Vision"
          className="w-full h-[490px] object-cover rounded-xl"
        />

<div className="max-w-[41rem]">
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