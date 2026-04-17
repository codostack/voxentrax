import { useState } from "react";

/* ───────────────── DATA ───────────────── */
const FEATURES = [
  {
    icon: "🚀",
    title: "Lightning Fast Setup",
    desc: "Get your account running in under 2 minutes.",
  },
];

const STATS = [
  { val: "50K+", label: "Registered Users" },
  { val: "99.9%", label: "Uptime Guarantee" },
  { val: "4.9★", label: "Average Rating" },
  { val: "180+", label: "Countries" },
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
      <label className="text-xs font-semibold text-gray-600 tracking-wide">
        {label} <span className="text-red-400">*</span>
      </label>

      <div className="relative group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50">
          {icon}
        </span>

        {textarea ? (
          <textarea
            name={name}
            rows={4}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-gray-50 border transition-all
            ${
              error
                ? "border-red-400"
                : "border-gray-200 focus:border-[#004c4c]"
            }
            focus:ring-2 focus:ring-[#004c4c]/20 outline-none`}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-gray-50 border transition-all
            ${
              error
                ? "border-red-400"
                : "border-gray-200 focus:border-[#004c4c]"
            }
            focus:ring-2 focus:ring-[#004c4c]/20 outline-none`}
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
    <div className="min-h-screen bg-gradient-to-br from-[#004c4c] to-[#002626] flex items-center justify-center">
      <div className="bg-white rounded-3xl p-16 text-center shadow-2xl max-w-md">
        <span className="text-6xl">🎉</span>

        <h2 className="text-2xl font-extrabold mt-5">You're all set!</h2>

        <p className="text-gray-500 mt-3 text-sm leading-7">
          Welcome <strong>{name}</strong>! We'll contact you at{" "}
          <strong className="text-[#004c4c]">{email}</strong>.
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
    if (!form.description.trim())
      e.description = "Add short description";
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

  if (submitted)
    return <SuccessScreen name={form.name} email={form.email} />;

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#004c4c22,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-12 items-center">

        {/* ───────── LEFT SIDE ───────── */}
        <div className="space-y-10">

          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Build Faster With{" "}
              <span className="text-[#004c4c]">Modern Infrastructure</span>
            </h1>

            <p className="text-gray-500 mt-5 max-w-lg leading-relaxed">
              A premium platform trusted by developers and enterprises worldwide
              to launch scalable digital experiences faster than ever.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition"
              >
                <div className="text-xl font-extrabold text-[#004c4c]">
                  {s.val}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div className="bg-white rounded-2xl border p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">
              Why people choose us
            </h3>

            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#004c4c]/10 flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-800">
                    {f.title}
                  </div>
                  <div className="text-sm text-gray-400">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── FORM CARD ───────── */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-10">

          <h2 className="text-2xl font-extrabold mb-6">
            Create Free Account
          </h2>

          <div className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Full Name"
                name="name"
                icon="👤"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />

              <Field
                label="Email"
                name="email"
                type="email"
                icon="✉️"
                placeholder="john@email.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <Field
              label="Phone"
              name="phone"
              icon="📞"
              placeholder="+1 555 000"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <Field
              label="About You"
              name="description"
              icon="💬"
              textarea
              placeholder="Tell us about your project..."
              value={form.description}
              onChange={handleChange}
              error={errors.description}
            />

            <button
              onClick={handleSubmit}
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              className="w-full py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#004c4c] to-[#002626] hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              {hoverBtn ? "✨ Let's Go →" : "Create My Free Account"}
            </button>

            <div className="flex justify-center gap-6 text-xs text-gray-400 pt-2">
              <span>🔒 SSL Secured</span>
              <span>🛡 No Spam</span>
              <span>✅ Free Forever</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}