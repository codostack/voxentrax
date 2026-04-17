import React from "react";

import aboutImg from "../../../assets/Images/hom4.4.jpg";
import aboutImg2 from "../../../assets/Images/hom5.5.jpg";
import aboutImg3 from "../../../assets/Images/hom6.6.jpg";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

      {/* MAIN HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-3xl font-default text-gray-400 mb-4">
          Our Telecom & VoIP
          <span className="text-orange-500"> Services</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
We deliver enterprise-grade VoIP solutions engineered to provide seamless connectivity, exceptional call clarity, and scalable communication systems tailored for businesses operating in a global environment.
        </p>
      </div>

      {/* SECTION 1 - VOIP ROUTES */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        <img
          src={aboutImg}
          alt="VoIP Routes"
          className="w-full h-[520px] object-cover rounded-xl"
        />

<div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">VoIP</span>{" "}
            <span className="text-orange-500">CC & CLI Routes</span>
          </h2>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
Our VoIP routing solutions are meticulously monitored and continuously optimized to ensure consistent performance—even during high traffic volumes. Through intelligent load balancing and advanced carrier management, Voxentrax delivers stable communication channels that support mission-critical operations without compromise.
</p>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
We focus on providing secure, scalable routing environments that seamlessly adapt to evolving business needs. Whether enabling call centers, enterprise communication, or global outreach initiatives, our infrastructure ensures reliable voice delivery, higher call completion rates, and enhanced customer engagement.
</p>
<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
Built on a resilient architecture with redundancy and real-time quality monitoring, our routing systems guarantee uninterrupted communication across global networks. By continuously analyzing performance metrics and optimizing routing paths, Voxentrax ensures superior voice clarity, minimal latency, and dependable connectivity for both everyday operations and large-scale communication requirements.
</p>
        </div>
      </div>

      {/* SECTION 2 - DIALER */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

<div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">Advanced</span>{" "}
            <span className="text-orange-500">Dialer Solutions</span>
          </h2>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
 Our dialer platforms are intelligently engineered with advanced automation capabilities, enabling businesses to enhance workforce productivity while maintaining consistent communication excellence. Features such as call scheduling, automated workflows, and intelligent queue management empower teams to execute campaigns with precision and achieve superior operational outcomes.
</p>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
Security and reliability remain at the core of our dialer technology. With robust data protection, role-based access controls, and comprehensive performance monitoring, organizations can manage communication processes with confidence while ensuring compliance and full operational visibility across all levels.
</p>
<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
  Built for scalability and flexibility, our dialer solutions seamlessly adapt to organizations of every size—from growing teams to large-scale enterprise call centers. With effortless integrations and real-time analytics, businesses can refine calling strategies, boost agent performance, and deliver highly personalized customer experiences while maintaining complete control and communication excellence.
</p>
        </div>

        <img
          src={aboutImg2}
          alt="Dialer"
          className="w-full object-cover rounded-xl mt-[40px]"
        />
      </div>

      {/* SECTION 3 - DID NUMBERS */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

<img
  src={aboutImg3}
  alt="DID Numbers"
  className="w-full max-w-[90%] h-[520px] object-cover rounded-xl"
/>

<div className="max-w-[41rem]">
          <h2 className="text-2xl font-default mb-4">
            <span className="text-gray-400">Global</span>{" "}
            <span className="text-orange-500">DID Numbers</span>
          </h2>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
Voxentrax’s global DID network empowers businesses to expand their presence without the need for physical infrastructure. Organizations can instantly establish localized communication channels, enabling meaningful customer engagement in multiple regions while managing all interactions through a centralized, cloud-based platform.
</p>

<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
Our solution supports flexible call forwarding, seamless IVR integration, and advanced routing capabilities—ensuring every inbound call is directed efficiently to the right destination. This enhances response times, strengthens brand credibility, and delivers a professional communication experience for customers worldwide.
</p>
<p className="text-[#4d5156] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[0.01em] font-normal text-justify">
With instant provisioning and effortless scalability, Voxentrax’s DID services enable businesses to adapt quickly to evolving communication demands across global markets. Backed by a highly reliable infrastructure, we ensure maximum uptime, superior voice clarity, and uninterrupted connectivity—helping organizations deliver consistent customer experiences while confidently expanding their international footprint.
</p>
        </div>
      </div>

    </section>
  );
}