import { useState } from "react";

/* ───────────────── DATA ───────────────── */
const FEATURES = [
  {
    icon: "⚡",
    title: "Lightning Fast Setup",
    desc: "Get your account running in under 2 minutes.",
  },
  {
    icon: "🌐",
    title: "Global Connectivity",
    desc: "Connect users across 180+ countries instantly.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    desc: "End-to-end encrypted infrastructure by default.",
  },
  {
    icon: "📡",
    title: "Real-time Communication",
    desc: "Ultra-low latency voice and data transmission.",
  },
];

/* ───────────────── FIELD ───────────────── */
function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  textarea,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-gray-500 tracking-wide">
        {label} <span className="text-red-400">*</span>
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60">
          {icon}
        </span>

        {textarea ? (
          <textarea
            name={name}
            rows={4}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-white border transition-all
            ${
              error
                ? "border-red-400"
                : "border-gray-200 focus:border-blue-400"
            }
            focus:ring-2 focus:ring-blue-200 outline-none`}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-white border transition-all
            ${
              error
                ? "border-red-400"
                : "border-gray-200 focus:border-blue-400"
            }
            focus:ring-2 focus:ring-blue-200 outline-none`}
          />
        )}
      </div>

      {error && <span className="text-xs text-red-500">⚠ {error}</span>}
    </div>
  );
}

/* ───────────────── SUCCESS ───────────────── */
function SuccessScreen({ name, email }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-14 text-center shadow-xl max-w-md border">
        <span className="text-6xl">🎉</span>

        <h2 className="text-2xl font-bold mt-5 text-gray-800">
          You're all set!
        </h2>

        <p className="text-gray-500 mt-3 text-sm leading-7">
          Welcome <strong>{name}</strong>! We'll contact you at{" "}
          <strong className="text-blue-600">{email}</strong>.
        </p>
      </div>
    </div>
  );
}

/* ───────────────── MAIN ───────────────── */
export default function RegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [hoverBtn, setHoverBtn] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name required";
    if (!form.email.includes("@")) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone required";
    if (!form.description.trim()) e.description = "Add short description";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) return <SuccessScreen name={form.name} email={form.email} />;

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-100" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* ───────── LEFT SIDE ───────── */}
        <div className="space-y-10">
          
          <div>
            <h1 className="text-4xl text-gray-800 leading-tight">
              Build Faster With{" "}
              <span className="text-blue-600">Modern Infrastructure</span>
            </h1>

            <p className="text-gray-500 mt-5 max-w-lg leading-relaxed">
              A premium platform trusted by developers and enterprises worldwide
              to launch scalable digital experiences faster than ever.
            </p>
          </div>


{/* FEATURES */}
<div className="bg-white rounded-2xl border shadow-sm p-6">
  <h3 className="text-lg font-bold text-gray-800 mb-5">
    Why people choose us
  </h3>

  <div className="grid sm:grid-cols-2 gap-5">
    {FEATURES.map((f, i) => (
      <div
        key={i}
        className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition bg-white"
      >
        {/* icon */}
        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-lg">
          {f.icon}
        </div>

        {/* text */}
        <div>
          <div className="font-semibold text-gray-800">
            {f.title}
          </div>
          <div className="text-sm text-gray-500 mt-1 leading-snug">
            {f.desc}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>

        {/* ───────── FORM CARD ───────── */}
        <div className="bg-white rounded-3xl border shadow-xl p-10">
          
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Create Free Account
          </h2>

          <div className="space-y-5">
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />

              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <Field
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <Field
              label="Message"
              name="description"
               textarea
              value={form.description}
              onChange={handleChange}
              error={errors.description}
            />

            <button
              onClick={handleSubmit}
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              className="w-full py-4 rounded-2xl text-white font-semibold bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              {hoverBtn ? "✨ Let's Go →" : "Create My Free Account"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}