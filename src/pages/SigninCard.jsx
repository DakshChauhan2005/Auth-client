import React from "react";
import signinIllustration from "../assets/signin.jpeg"; // update path if needed
import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_API_URL
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";

export default function SigninCard() {
  const navigate = useNavigate();
  const {user , setUser } = useUser()
  if(user){
    navigate('/profile')
  }
  const {formData, setFormData} = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit")
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, formData,{ withCredentials: true });
      toast(res.data.message);
      console.log(res);
      setUser(res.data.user)
      navigate('/profile')
    } catch (error) {
      console.error(error)
      toast.warning(error.response.data.message)
    }
  }
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Illustration */}
        <div className="flex items-center justify-center p-6">
          <img
            src={signinIllustration}
            alt="signin"
            className="max-w-[320px] w-full object-contain"
          />
        </div>

        {/* Right - Sign in form */}
        <form onSubmit={handleSubmit}>
          <div className="px-4 md:px-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign in</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-gray-500"><i className="fa-solid fa-at"></i></div>
                <input
                  type="email"
                  placeholder="Your Email"
                  name='email'
                  className="w-full bg-transparent border-0 border-b-[1px] border-gray-300 py-3 focus:outline-none focus:border-b-2 focus:border-blue-400 placeholder-gray-400 text-sm"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-gray-500"><i className="fa-solid fa-lock"></i></div>
                <input
                  type="password"
                  placeholder="Password"
                  name='password'
                  className="w-full bg-transparent border-0 border-b-[1px] border-gray-300 py-3 focus:outline-none focus:border-b-2 focus:border-blue-400 placeholder-gray-400 text-sm"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded shadow-sm text-sm font-medium w-36"
            >
              Log in
            </button>

            <div className="flex flex-col items-start mt-6 space-y-3 text-sm text-gray-500">
              <a href="#" className="underline">
                Create an account
              </a>
              <div className="flex items-center gap-2">
                <span>Or login with</span>
                <div className="flex gap-2">
                  <button className="bg-blue-600 text-white w-7 h-7 rounded flex items-center justify-center text-xs">
                    f
                  </button>
                  <button className="bg-sky-400 text-white w-7 h-7 rounded flex items-center justify-center text-xs">
                    t
                  </button>
                  <button className="bg-red-500 text-white w-7 h-7 rounded flex items-center justify-center text-xs">
                    G
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
