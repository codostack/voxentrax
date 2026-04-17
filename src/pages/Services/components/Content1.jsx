import React from "react";

import aboutImg from "../../../assets/Images/srv1.1.jpg";
import aboutImg2 from "../../../assets/Images/home1.jpg";
import aboutImg3 from "../../../assets/Images/srv3.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-20 mb-10 ">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-400 mb-4">
         Intelligent VoIP Solutions by
          <span className="text-orange-500"> Voxentrax</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Voxentrax delivers secure, scalable, and future-ready VoIP solutions designed to elevate business communication. Our advanced platforms enable seamless, high-performance connectivity—empowering organizations with faster interactions, greater reliability, and truly borderless communication experiences.
        </p>
      </div>

      {/* SECTION 1 — VOIP INFRASTRUCTURE */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20 mt-19">

        <img
          src={aboutImg}
          alt="VoIP Infrastructure"
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4 ">
            <span className="text-gray-400">Advanced</span>{" "}
            <span className="text-orange-500">VoIP Infrastructure</span>
          </h2>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
          At Voxentrax, we architect robust and intelligent VoIP infrastructures that deliver consistent, high-fidelity voice communication across global networks. Built on modern cloud architecture and enhanced with smart routing technologies, our platform ensures optimal performance, minimal latency, and exceptional call clarity—empowering businesses of every scale to communicate without compromise.
          </p>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
           From high-demand call centers to enterprise-grade communication systems and international operations, our infrastructure 
           dynamically adapts to evolving traffic patterns. This flexibility ensures uninterrupted connectivity, improved call success rates, and a seamless communication experience that organizations can rely on every day.
                  </p>
<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
             Security and resilience are embedded at every layer of our infrastructure. With encrypted voice channels, redundant network systems, and real-time monitoring, Voxentrax safeguards critical communications while maintaining continuous uptime. The result is a secure, scalable, and future-ready network designed to support modern business operations with confidence and reliability.
            </p>

   
        </div>
      </div>

      {/* SECTION 2 — BUSINESS COMMUNICATION SOLUTIONS */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">Business</span>{" "}
            <span className="text-orange-500">Communication Solutions</span>
          </h2>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
            Voxentrax delivers intelligent communication solutions designed to elevate productivity and streamline collaboration. Our advanced VoIP platforms integrate seamlessly with modern business workflows, enabling teams to manage inbound and outbound communications efficiently through unified, centralized systems.
          </p>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
           Powered by sophisticated analytics, real-time monitoring, and automation capabilities, our solutions provide complete visibility into communication performance. These actionable insights empower businesses to optimize operations, enhance customer engagement, and drive informed, data-driven decisions that support sustainable growth.
          </p>
<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
          Engineered for scalability, Voxentrax solutions adapt effortlessly to organizations of all sizes—from growing teams to large enterprises. With flexible deployment models, seamless CRM integrations, and highly customizable features, our platforms evolve alongside your business, delivering a refined, future-ready communication experience.
          </p>
        </div>
                <img
          src={aboutImg2}
          alt="Business Communication"
          className="w-full h-[450px] object-cover rounded-xl"
        />
      </div>

      {/* SECTION 3 — GLOBAL CONNECTIVITY */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <img
          src={aboutImg3}
          alt="Global Connectivity"
          className="w-full h-[500px] object-cover rounded-xl"
        />

        <div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">Global</span>{" "}
            <span className="text-orange-500">Connectivity Network</span>
          </h2>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
           Voxentrax enables businesses to expand beyond borders with secure, scalable, and high-performance telecom connectivity. Our global network empowers organizations to establish a strong international presence without the need for complex physical infrastructure, delivering seamless communication across regions with ease.
          </p>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
   Through optimized carrier relationships and intelligent traffic management, we ensure reliable voice transmission, low latency, and consistent communication quality worldwide. Our mission is to keep businesses effortlessly connected with customers, partners, and teams—anytime, anywhere, without compromise.
          </p>
<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
           Enhanced with advanced capabilities such as DID numbers, dynamic call routing, and seamless integration with existing VoIP ecosystems, our network is built for flexibility and control. Voxentrax allows businesses to manage global communications efficiently, strengthen brand credibility, and deliver a professional, unified experience across every market they serve.
          </p>
        </div>
      </div>

    </section>
  );
}