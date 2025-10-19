import React from 'react'
import deskIllustration from "../assets/signup-image.jpg";

const Field = ({ icon, placeholder, type = "text" }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 text-gray-500">{icon}</div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b-[1px] border-gray-300 py-3 focus:outline-none focus:border-b-2 focus:border-blue-400 placeholder-gray-400 text-sm"
    />
  </div>
);
const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column - form */}
        <div className="px-4 md:px-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign up</h2>

          <div className="space-y-4">
            <Field
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z" />
                </svg>
              }
              placeholder="John Doe"
            />

            <Field
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 01-8 0m8 0a4 4 0 00-8 0" />
                </svg>
              }
              placeholder="Your Email"
              type="email"
            />

            <Field
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.761 0 5-2.015 5-4.5S14.761 2 12 2 7 4.015 7 6.5 9.239 11 12 11zM6 20a6 6 0 0112 0" />
                </svg>
              }
              placeholder="Password"
              type="password"
            />

            <Field
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.761 0 5-2.015 5-4.5S14.761 2 12 2 7 4.015 7 6.5 9.239 11 12 11zM6 20a6 6 0 0112 0" />
                </svg>
              }
              placeholder="Repeat your password"
              type="password"
            />
          </div>

          <label className="mt-4 inline-flex items-center text-sm text-gray-600 space-x-2">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 focus:ring-0" />
            <span>
              I agree all statements in{" "}
              <a href="#" className="text-blue-500 underline">
                Terms of service
              </a>
            </span>
          </label>

          <button
            type="button"
            className="mt-6 bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded shadow-sm text-sm font-medium w-36"
          >
            Register
          </button>

          <div className="mt-8 text-xs text-gray-500">
            <a href="#" className="underline">
              I am already member
            </a>
          </div>
        </div>

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