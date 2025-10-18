import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={ <Profile/> } />
      <Route path='/register'  />
      <Route path='/login'  />
      <Route path='/register/verify'  />

    </Routes>
  )
}

export default App
