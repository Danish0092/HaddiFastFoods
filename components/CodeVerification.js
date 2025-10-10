"use client";
import React, { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function CodeVerification({ show, setShow }) {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const inputRefs = useRef([]);
    const [timer, setTimer] = useState(59);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        }
    }, [timer]);

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleVerify = () => {
        const entered = otp.join("");
        if (entered === "1234") {
            toast.success("Number verified successfully!");
        } else {
            toast.error("Invalid code. Please try again!");
        }
    };

    const handleResend = () => {
        setOtp(new Array(4).fill(""));
        setTimer(60);
        toast("Code resent!");
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-40 
      transition-opacity duration-300 ease-out
      ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => setShow(false)}
        >
            <Toaster position="top-center" />

            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-neutral-900 border border-gray-700 rounded-2xl shadow-xl p-8 w-full max-w-sm text-center relative 
        transform transition-all duration-300 ease-out
        ${show ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}`}
            >
                <h1 className="text-white font-bold text-lg">Phone Verify OTP</h1>

                <button
                    onClick={() => setShow(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-neutral-900 flex items-center justify-center rounded-full border-2 border-red-500 hover:bg-red-500 transition-colors"
                >
                    <i className="ri-close-line text-white text-2xl font-medium"></i>
                </button>

                <p className="text-white text-sm mb-6">
                    Please enter the OTP sent to your mobile number <br />
                    <span className="font-semibold">+923444767909</span>
                </p>

                <div className="flex justify-center gap-4 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="w-14 h-14 bg-transparent border-2 border-gray-400 rounded-md 
              text-white text-2xl font-semibold text-center focus:border-yellow-500 
              outline-none transition-all"
                        />
                    ))}
                </div>

                <div className="text-white font-medium mb-4">
                    0:{timer < 10 ? `0${timer}` : timer}
                </div>

                <div className="text-gray-300 text-sm mb-6">
                    Didn't receive OTP?{" "}
                    <button
                        onClick={handleResend}
                        className="text-red-500 font-medium hover:underline"
                    >
                        Resend
                    </button>
                </div>

                <button
                    onClick={handleVerify}
                    className="w-full px-1 py-2 bg-red-500 text-white font-bold text-lg rounded hover:bg-red-600 transition"
                >
                    VERIFY
                </button>
            </div>
        </div>
    );

}
