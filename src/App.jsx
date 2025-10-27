import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SigninCard from './pages/SigninCard'
import OtpVerification from './pages/OtpVerification'
import SignUp from './pages/Register'
import Add from './pages/Add'
import { useUser } from './context/UserContext'
import axios from 'axios'
// import { useAuth } from './context/AuthContext'
import PrivateRoute from './pages/PrivateRoute'
const baseUrl = import.meta.env.VITE_API_URL
// import { authDataPorvider } from './context/AuthContext.jsx'
// import Verify from './pages'
const App = () => {

  const { user, setUser } = useUser()
  useEffect(() => {
    if (!user) {
      axios.get(`${baseUrl}/auth/me`, { withCredentials: true })
        .then((res) => {
          // console.log("");
          setUser(res.data.user)
        })
        .catch((error) => { console.log(error) })
    }
  }, [])
  // const func = async () => {

  // }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
      {/* <authDataPorvider> */}
      <Route path='/register' element={<SignUp />} />
      <Route path='/register/verify' element={<OtpVerification />} />
      <Route path='/register/done' element={<Add />} />
      {/* </authDataPorvider> */}
      <Route path='/login' element={<SigninCard />} />

    </Routes>
  )
}

export default App
