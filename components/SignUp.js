"use client";
import React, { useState, useRef } from "react";
import CustomToaster, { showToast } from "@/components/CustomToaster";
import CodeVerification from "@/components/CodeVerification";

const Signup = ({ toggleForm, show }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = () => {
    showToast("success", "OTP sent to your phone!");
    setShowVerification(true);
  };

  return (
    <>
      <CustomToaster />
      <CodeVerification show={showVerification} setShow={setShowVerification} />

      <div
        className={`absolute flex flex-col md:flex-row 
        w-full md:w-2/3 h-3/4 md:h-2/3 bg-neutral rounded-3xl
        transition-all duration-900 ease-in-out  overflow-hidden
        ${show ? "opacity-100 translate-x-0 z-10" : "opacity-0 -translate-x-50 z-0"}`}>


        {/* Left Panel */}
        <div
          className="flex flex-col items-center justify-center gap-4 order-1 md:order-2 
          w-full md:w-1/2 h-2/5 md:h-full bg-yellow 
          rounded-b-[120px] md:rounded-r-none md:rounded-l-[120px] text-center">

          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p>Already have an account?</p>

          <button
            onClick={toggleForm}
            className="bg-red rounded-md px-8 py-2 font-bold 
            uppercase cursor-pointer" >
            login
          </button>
        </div>



        {/* Right Panel */}
        <div
          className="flex flex-col items-center justify-center gap-4 order-2 md:order-1
          w-full md:w-1/2 h-3/5 md:h-full px-4 md:p-12">

          <p className="text-4xl font-semibold">Create Account</p>

          <div className="w-full flex flex-col gap-4">

            {/* FullName */}
            <div className="relative p-2 bg-gray rounded-t-md">

              <input
                ref={fullNameRef}
                type="text"
                className="pt-6 bg-transparent outline-none peer"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)} />

              <label
                onClick={() => fullNameRef.current.focus()}
                className={`absolute left-2 text-yellow text-lg 
                uppercase cursor-text transition-all duration-300
                ${fullName ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}>
                full name*
              </label>

              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red peer-focus:w-full transition-all duration-300" />
            </div>

            
            {/* Email */}
            <div className="relative p-2 bg-gray rounded-t-md">
              <input
                ref={emailRef}
                type="email"
                className="pt-6 bg-transparent outline-none peer"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <label
                onClick={() => emailRef.current.focus()}
                className={`absolute left-2 text-yellow text-lg 
                uppercase cursor-text transition-all duration-300
                ${email ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}>
                email address*
              </label>

              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red peer-focus:w-full transition-all duration-300" />
            </div>


            {/* Password */}
            <div className="relative p-2 bg-gray rounded-t-md">
              <input
                ref={passwordRef}
                type="password"
                className="pt-6 bg-transparent outline-none peer"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

              <label
                onClick={() => passwordRef.current.focus()}
                className={`absolute left-2 text-yellow text-lg 
                uppercase cursor-text transition-all duration-300
                ${password ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}>
                password*
              </label>

              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red peer-focus:w-full transition-all duration-300" />
            </div>
          </div>

          {/* Sign Up */}
          <button
            onClick={handleSignup}
            className="w-full px-4 py-3 bg-red rounded-md 
            font-bold uppercase cursor-pointer">
            sign up
          </button>

        </div>
      </div>
    </>
  );
};

export default Signup;
