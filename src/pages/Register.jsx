import React, { useEffect, useState } from 'react'
import deskIllustration from "../assets/signup-image.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../context/AuthContext.jsx';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useUser } from '../context/UserContext.jsx';

const baseUrl = import.meta.env.VITE_API_URL

const SignUp = () => {
  const navigate = useNavigate();
  const { user } = useUser()
  useEffect(()=>{
    if (user) navigate('/profile')
  },[user, navigate])
  const { formData, setFormData } = useAuth();
  const [term, setTerm] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log(formData);

  // structure of context
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   password: "",
  //   term: false
  // });


  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTerms = (e) => {
    setTerm(e.target.checked);
  }
  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!term) {
      toast.error("Agree with terms");
      return;
    } else {
      setLoading(true);
      axios.post(`${baseUrl}/otp/send`, formData).then((res) => {
        // console.log(res);
        toast(res.data.message);
        navigate("/register/verify");
      }).catch((error) => {
        toast.warning(error.response.data.message);
      }).finally(() => {
        setLoading(false);

      })
    }

  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column - form */}
        <form action="" onSubmit={handleSubmit}>
          <div className="px-4 md:px-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign up</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-gray-500"><i className="fa-solid fa-user"></i></div>
                <input
                  type="text"
                  name='name'
                  placeholder="Full Name"
                  className="w-full bg-transparent border-0 border-b-[1px] border-gray-300 py-3 focus:outline-none focus:border-b-2 focus:border-blue-400 placeholder-gray-400 text-sm"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>

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
                <div className="w-5 h-5 text-gray-500"><i className="fa-solid fa-phone"></i></div>
                <input
                  type="tel"
                  placeholder="Mobile no"
                  name='mobile'
                  className="w-full bg-transparent border-0 border-b-[1px] border-gray-300 py-3 focus:outline-none focus:border-b-2 focus:border-blue-400 placeholder-gray-400 text-sm"
                  onChange={handleChange}
                  value={formData.mobile}
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

            <label className="mt-4 inline-flex items-center text-sm text-gray-600 space-x-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 focus:ring-0" onChange={handleTerms} value={term} />
              <span>
                I agree all statements in{" "}
                <Link to="#" className="text-blue-500 underline" >Terms of service</Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded shadow-sm text-sm font-medium w-36"
            >
              {loading ? "Registering..." : "Register"}
            </button>
            <div className="mt-8 text-xs text-gray-500">
              <Link to="/login">I am already member</Link>
            </div>
          </div>
        </form>

        {/* Right column - illustration */}
        <div className="flex items-center justify-center p-6">
          <img
            src={deskIllustration}
            alt="desk"
            className="max-w-[320px] w-full object-contain transform translate-y-2"
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp