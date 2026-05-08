import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import axios from "axios";
import toast from "react-hot-toast";

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Reusable input styles
  const inputStyle =
    "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none transition focus:bg-white/15";

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login",
      {
        email: formData.email,
        password: formData.password,
      }
    );
      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data.user));
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register",formData);
      // Auto switch to login
      dispatch(login(res.data.user));
      toast.success("Account Created Successfully");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
        <h1
          className={`text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r ${
            isLogin
              ? "from-cyan-400 to-blue-500"
              : "from-pink-400 to-purple-500"
          }`}
        >
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <form
          className="space-y-5"
          onSubmit={isLogin ? handleLogin : handleRegister}
        >
          {/* Username */}
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className={`${inputStyle} focus:border-pink-400`}
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputStyle} focus:border-cyan-400`}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder={isLogin ? "Enter your password" : "Create password"}
            value={formData.password}
            onChange={handleChange}
            className={`${inputStyle} focus:border-cyan-400`}
          />

          {/* Submit Button */}
          <button
            className={`w-full py-3 rounded-xl font-semibold transition bg-gradient-to-r ${
              isLogin
                ? "from-cyan-500 to-blue-600"
                : "from-pink-500 to-purple-600"
            }`}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-300">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className={`ml-2 font-semibold ${
              isLogin ? "text-cyan-400" : "text-pink-400"
            }`}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
