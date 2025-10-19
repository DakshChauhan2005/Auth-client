import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SigninCard from './pages/SigninCard'
import OtpVerification from './pages/OtpVerification'
import SignUp from './pages/Register'
// import Verify from './pages'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={ <Profile/> } />
      <Route path='/register' element={<SignUp/>} />
      <Route path='/login' element={<SigninCard/>} />
      <Route path='/register/verify' element={<OtpVerification/>}  />

    </Routes>
  )
}

export default App
