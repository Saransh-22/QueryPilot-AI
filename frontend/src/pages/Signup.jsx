import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useDatabase } from "../context/DatabaseContext";

function Signup() {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();
  const { fetchActiveDatabase } = useDatabase();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await api.post("/auth/signup", {
        full_name: form.name,
        email: form.email,
        password: form.password,
      });
      localStorage.setItem(
        "token",
        response.data.access_token
      );
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );
      await checkAuth();
      await fetchActiveDatabase();
      alert("Signup Successful!");
      navigate("/app/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.detail ||
        "Signup Failed"
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-600">
          QueryPilot AI
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Create your account
        </p>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-6"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-medium"
          >
            Create Account
          </button>
        </form>
        <p className="text-center mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 font-medium ml-1 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;