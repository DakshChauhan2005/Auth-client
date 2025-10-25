import otpIllustration from "../assets/verification.jpeg";
import React, { useRef, useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext.jsx';
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function OtpVerification() {
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_API_URL

    const { formData, setFormData, clearFormData } = useAuth();
    const length = 6;
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        // focus first input on mount
        if (inputRefs.current[0]) inputRefs.current[0].focus();
    }, []);

    const focusInput = (index) => {
        const el = inputRefs.current[index];
        if (el) el.focus();
    };

    // handle single input change (including replacing via typing)
    const handleChange = (e, index) => {
        const raw = e.target.value;
        // keep only digits
        const val = raw.replace(/\D/g, "");

        // if user pasted multiple digits into a single box, distribute them
        if (val.length > 1) {
            const next = [...otp];
            let i = index;
            for (const ch of val) {
                if (i >= length) break;
                next[i] = ch;
                i++;
            }
            setOtp(next);
            // focus next empty or last filled
            const nextFocus = Math.min(i, length - 1);
            focusInput(nextFocus);
            return;
        }

        // single char or empty
        const next = [...otp];
        next[index] = val; // if val === "" this clears the slot
        setOtp(next);

        if (val && index < length - 1) {
            focusInput(index + 1);
        }

    };

    const handleKeyDown = (e, index) => {
        const key = e.key;

        if (key === "Backspace") {
            e.preventDefault(); // prevent default browser behavior to manage focus/state manually
            const next = [...otp];

            if (next[index]) {
                // If current has a value, clear it (stay on same box)
                next[index] = "";
                setOtp(next);
                focusInput(index);
            } else if (index > 0) {
                // If current empty, move to previous and clear it
                next[index - 1] = "";
                setOtp(next);
                focusInput(index - 1);
            }
            return;
        }

        if (key === "Delete") {
            e.preventDefault();
            const next = [...otp];
            next[index] = "";
            setOtp(next);
            focusInput(index);
            return;
        }

        if (key === "ArrowLeft" && index > 0) {
            e.preventDefault();
            focusInput(index - 1);
            return;
        }

        if (key === "ArrowRight" && index < length - 1) {
            e.preventDefault();
            focusInput(index + 1);
            return;
        }

        // allow digits (handled in onChange) and ignore other keys
    };

    // handle paste at a specific input index
    const handlePaste = (e, index) => {
        e.preventDefault();
        const clipboard = (e.clipboardData || window.clipboardData).getData("text");
        const digits = clipboard.replace(/\D/g, "").split("");
        if (digits.length === 0) return;

        const next = [...otp];
        let i = index;
        for (const ch of digits) {
            if (i >= length) break;
            next[i] = ch;
            i++;
        }
        setOtp(next);

        // focus the next empty or the last filled
        const nextFocus = i < length ? i : length - 1;
        focusInput(nextFocus);
    };
    // otp.join("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(otp);
        // console.log("FormData: ", formData);
        for (const ele of otp) {
            if (ele === "") {
                toast.error("Enter proper OTP");
                return;
            }
        }
        if (formData.otp) {
            axios.post(`${baseUrl}/otp/verify`, formData)
                .then((res) => {
                    console.log("response: ", res);
                    axios.post(`${baseUrl}/auth/register`, formData)
                        .then((resp) => {
                            console.log("Register response", resp);
                            toast(resp.data.message || "OTP is verified")
                            clearFormData();
                            // console.log("data is cleared", formData)
                            navigate("/profile")
                        }).catch((error) => {
                            console.log("Registration error", error);
                            toast.error("Registerration issue")
                        });
                }).catch((err) => {
                    toast.error(err.response.data.message);
                });
        }

    };
    useEffect(() => {
        const finalOtp = otp.join("");
        setFormData((prev) => ({
            ...prev,
            otp: finalOtp
        }))
    }, [otp])

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left column - illustration */}
                    <div className="flex items-center justify-center p-6">
                        <img
                            src={otpIllustration}
                            alt="illustration"
                            className="max-w-[320px] w-full object-contain"
                        />
                    </div>

                    {/* Right column - OTP form */}
                    <div className="px-4 md:px-6 flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Verify your account
                        </h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Enter the {length}-digit code sent to{" "}
                            <span className="font-medium text-gray-800">{formData.email}</span>
                        </p>

                        {/* OTP Boxes */}
                        <div className="flex justify-between gap-3 mb-6">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="one-time-code"
                                    pattern="\d{1}"
                                    maxLength={length} // allow paste of multiple to trigger distribution
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onPaste={(e) => handlePaste(e, index)}
                                    className="w-12 h-12 text-center text-lg font-medium border-b-2 border-gray-300 focus:border-blue-400 focus:outline-none rounded-sm bg-transparent"
                                />
                            ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                <span>Remember this device</span>
                            </div>

                            <div className="text-right">
                                <span className="text-gray-500 mr-2">Didn't get it?</span>
                                <button type="button" className="text-blue-500 underline text-sm">
                                    Resend code
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-40 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded shadow-sm text-sm font-medium mb-4"
                        >
                            Verify
                        </button>

                        <div className="text-sm text-gray-500">
                            <a href="#" className="underline mr-4">
                                Change number
                            </a>
                            <a href="#" className="underline">
                                Contact support
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
