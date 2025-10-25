import { createContext, useContext, useState } from 'react';

// context for register details
const AuthContext = createContext();

// context provider
export const AuthDataPorvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        purpose: "auth",
        otp: null
    });
    const clearFormData = () => {
        setFormData({
            name: "",
            email: "",
            mobile: "",
            password: "",
            purpose: "auth",
            otp: null,
        });
    };


    return (
        <AuthContext.Provider value={{ formData, setFormData, clearFormData  }} >
            {children}
        </AuthContext.Provider>
    )
};
// ciustom hook for ease
export const useAuth = () => useContext(AuthContext);