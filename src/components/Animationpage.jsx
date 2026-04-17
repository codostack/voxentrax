import { useState } from "react";
import {
  FaPhoneAlt,
  FaHeadset,
  FaGlobe,
  FaShieldAlt
} from "react-icons/fa";

const features = [
  {
    icon: <FaPhoneAlt />,
    title: "HD Voice Quality",
    desc: "Ultra clear calls powered by advanced VoIP routing."
  },
  {
    icon: <FaGlobe />,
    title: "Global Coverage",
    desc: "Connect worldwide with reliable telecom infrastructure."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Expert assistance whenever your business needs help."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Network",
    desc: "Enterprise-grade encryption and secure communication."
  }
];

export default function VoipFeaturesWithForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Demo Request Submitted!");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#e6f6f9] via-white to-[#e6f6f9]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">

        {/* LEFT SIDE — FEATURES */}
        <div style={{marginTop:"38px"}}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Powerful <span className="text-[#0891b2]">VoIP Features</span>
          </h2>

          <p className="text-gray-500 mb-7">
            Upgrade your communication with modern cloud VoIP solutions
            designed for performance, scalability, and reliability.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-[#0891b2] text-xl mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8 sticky top-24">

          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Request a Free Demo
          </h3>

          <p className="text-gray-500 text-sm mb-6">
            Start your VoIP journey today. Our team will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 focus:outline-none focus:border-[#0891b2]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 focus:outline-none focus:border-[#0891b2]"
              required
            />

            <input
              name="company"
              placeholder="Company Name"
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 focus:outline-none focus:border-[#0891b2]"
            />

            <textarea
              name="message"
              rows="3"
              placeholder="Your Requirement"
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 focus:outline-none focus:border-[#0891b2]"
            />

            <button
              type="submit"
              className="mt-2 py-3 rounded-lg text-white font-semibold
              bg-[#0891b2] hover:bg-[#06748e] transition"
            >
              Get Started
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}