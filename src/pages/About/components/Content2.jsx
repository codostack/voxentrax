import React from "react";

import aboutImg from "../../../assets/Images/abt4.jpg";
import aboutImg2 from "../../../assets/Images/abt6.jpg";

export default function AboutUsContent2() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">

{/* MAIN HEADING */}
<div className="max-w-6xl mx-auto text-center mb-16">
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
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

   <img
  src={aboutImg}
  alt="About"
  className="w-[500px]  object-cover rounded-xl mt-[20px]"
/>
<div className="max-w-xl">
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
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

<div className="max-w-xl">
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

        <img
          src={aboutImg2}
          alt="Mission"
          className="w-full  object-cover rounded-xl mt-[40px]"
        />
      </div>
    </section>
  );
}