import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../../api/axios";

const AdminLogin = () => {
  const [step, setStep] = useState(1);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post(
        "http://localhost:5000/api/auth/login-step1",
        { username, password }
      );

      setEmail(res.data.email);
      setStep(2);
      setError("");

    } catch (err) {
      setError(err.response?.data?.msg || "Error");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await api.post(
        "http://localhost:5000/api/auth/verify-otp",
        { email, otp }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");

    } catch (err) {
      setError(err.response?.data?.msg || "Invalid OTP");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">

      <div className="bg-white w-[360px] rounded-2xl shadow-xl p-6">

        <h2 className="text-2xl font-bold text-center mb-1">
          Admin Panel
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Secure Login System
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-3 text-center">
            {error}
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-3">

            <input
              placeholder="Username"
              className="w-full border rounded-lg p-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* PASSWORD WITH EYE ICON */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border rounded-lg p-3 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="text-right">
              <Link
                to="/admin/forgot"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Login
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-3">

            <p className="text-sm text-center">
              OTP sent to <b>{email}</b>
            </p>

            <input
              placeholder="Enter OTP"
              className="w-full border rounded-lg p-3 text-center tracking-widest"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Verify OTP
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminLogin;