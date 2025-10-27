import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthDataPorvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify';
import { UserPorvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthDataPorvider>
      <UserPorvider>
        {/* <StrictMode> */}
          <App />
          <ToastContainer />
        {/* </StrictMode> */}
      </UserPorvider>
    </AuthDataPorvider>
  </BrowserRouter>
)
