import React from 'react'
import profilePic from "../assets/signin.jpeg"; // place your image in src/assets/

const Profile = () => {
  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-10 flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-blue-400"
          />
          <button className="mt-4 text-sm px-4 py-1 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">
            Edit Photo
          </button>
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Daksh Chauhan
          </h2>
          <p className="text-gray-500 text-sm mb-6">Frontend Developer</p>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="font-medium">Email:</span>
              <span className="text-gray-600">daksh@example.com</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="font-medium">Phone:</span>
              <span className="text-gray-600">+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="font-medium">Location:</span>
              <span className="text-gray-600">New Delhi, India</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium transition">
              Edit Profile
            </button>
            <button className="border border-blue-400 text-blue-500 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
