"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomToaster, { showToast } from "@/components/CustomToaster";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();

  const handleLogin = () => {
    if (email === "usmanjamil@gmail.com" && password === "usman123") {
      showToast("success", "Login successful!");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } else {
      showToast("error", "Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 font-poppins p-4 relative">
      <CustomToaster />

      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-gray">
        <div className="w-full md:w-[50%] bg-yellow text-white flex flex-col items-center justify-center text-center p-10 rounded-b-[120px] md:rounded-l-none md:rounded-r-[120px]">
          <h2 className="text-3xl font-bold mb-2">Hello Welcome!</h2>
          <p className="mb-6">Don’t have an account?</p>

          <Link
            href="/signup"
            className="font-bold py-2 px-8 rounded-md bg-red text-white cursor-pointer hover:bg-red-600 transition-colors duration-300"
          >
            SIGNUP
          </Link>
        </div>

        <div className="w-full md:w-[75%] flex flex-col items-center justify-center gap-6 p-8 md:p-12">
          <p className="text-4xl font-semibold mb-2">Login</p>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="relative bg-neutral rounded-t-md p-2">
              <input
                ref={emailRef}
                type="email"
                className="peer bg-transparent outline-none w-full pt-6 text-white"
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
                className="peer bg-transparent outline-none w-full pt-6 text-white"
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

          <Link href={"/"} className="text-red py-2">
            Forgot Password?
          </Link>

          <button
            onClick={handleLogin}
            className="font-bold w-full max-w-sm rounded-md bg-red text-white px-4 py-3 cursor-pointer hover:bg-red-600 transition-colors duration-300"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
