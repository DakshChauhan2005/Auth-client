import React from 'react'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const baseUrl = import.meta.env.VITE_API_URL

const Add = () => {
    const navigate = useNavigate()
    const { formData } = useAuth();
    useEffect(() => {
        register()
    },[])
    console.log(formData);

    const register = async () => {
        axios.post(`${baseUrl}/auth/register`, formData).then((res) => {
            toast(res.response.data.message)
            navigate("/profile")
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    }
    return (
        <div>

        </div>
    )
}

export default Add
