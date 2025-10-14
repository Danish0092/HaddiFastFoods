"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import CustomToaster, { showToast } from "@/components/CustomToaster";
import CodeVerification from "@/components/CodeVerification";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerify, setShowVerify] = useState(false);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = () => {
    showToast("success", "OTP sent to your phone!");
    setShowVerify(true)

  };

  return (
    <>
      <CustomToaster />
      <CodeVerification show={showVerify} setShow={setShowVerify} />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 font-poppins p-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-gray">
          <div className="order-1 md:order-2 w-full md:w-[50%] bg-yellow text-white flex flex-col items-center justify-center text-center p-10 rounded-b-[120px] md:rounded-r-none md:rounded-l-[120px]">
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <p className="mb-6">Already have an account?</p>
            <Link
              href="/login"
              className="font-bold py-2 px-8 rounded-md bg-red text-white cursor-pointer hover:bg-red-600 transition-colors duration-300"
            >
              LOGIN
            </Link>
          </div>

          <div className="order-2 md:order-1 w-full md:w-[75%] flex flex-col items-center justify-center gap-6 p-8 md:p-12">
            <p className="text-4xl font-semibold mb-2">Create Account</p>

            <div className="flex flex-col gap-4 w-full max-w-sm">
              <div className="relative bg-neutral rounded-t-md p-2">
                <input
                  ref={fullNameRef}
                  type="text"
                  className="peer bg-transparent outline-none w-full pt-6"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder=" "
                />
                <label
                  onClick={() => fullNameRef.current.focus()}
                  className={`absolute left-2 text-lg text-neutral-500 cursor-text transition-all duration-300
                  ${fullName ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
                >
                  FULL NAME*
                </label>
                <span className="absolute left-0 bottom-0 h-0.5 bg-red w-0 peer-focus:w-full transition-all duration-300" />
              </div>

              <div className="relative bg-neutral rounded-t-md p-2">
                <input
                  ref={emailRef}
                  type="email"
                  className="peer bg-transparent outline-none w-full pt-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                />
                <label
                  onClick={() => emailRef.current.focus()}
                  className={`absolute left-2 text-lg text-neutral-500 cursor-text transition-all duration-300
                  ${email ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
                >
                  EMAIL ADDRESS*
                </label>
                <span className="absolute left-0 bottom-0 h-0.5 bg-red w-0 peer-focus:w-full transition-all duration-300" />
              </div>

              <div className="relative bg-neutral rounded-t-md p-2">
                <input
                  ref={passwordRef}
                  type="password"
                  className="peer bg-transparent outline-none w-full pt-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                />
                <label
                  onClick={() => passwordRef.current.focus()}
                  className={`absolute left-2 text-lg text-neutral-500 cursor-text transition-all duration-300
                  ${password ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
                >
                  PASSWORD*
                </label>
                <span className="absolute left-0 bottom-0 h-0.5 bg-red w-0 peer-focus:w-full transition-all duration-300" />
              </div>
            </div>

            <button
              onClick={handleSignup}
              className="font-bold w-full max-w-sm rounded-md bg-red text-white px-4 py-3 cursor-pointer hover:bg-red-600 transition-colors duration-300"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
