"use client";
import React, { useState, useRef } from "react";
import { Poppins, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <div className="relative bg-neutral-900 font-poppins flex-col gap-4 h-screen text-white flex items-center justify-center p-4">
      <Link
        className="absolute z-50 top-20 left-4 md:left-20 w-8 h-8 bg-neutral-900 flex items-center justify-center rounded-full border-2 border-red-500 hover:bg-red-500 transition-colors duration-300 ease-in-out"
        href="/"
      >
        <i className="ri-arrow-left-s-line text-2xl font-medium"></i>
      </Link>

      <p className="text-4xl font-medium">My Details</p>
      <p className="text-center">
        To update your details, edit the information below
      </p>

      <div className="flex items-center justify-center gap-2">
        <Image
          width={100}
          height={100}
          src="/banners/profile.png"
          className="rounded-full"
          alt="Profile"
        />

        <button className="font-medium rounded-sm bg-red-500 text-white px-4 py-2 cursor-pointer">
          UPLOAD
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 w-full md:w-3/4">
        <div className="relative text-white bg-neutral-800 rounded-t-md p-2">
          <input
            ref={firstNameRef}
            type="text"
            className="peer bg-transparent outline-none w-full pt-6"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder=" "
          />
          <label
            onClick={() => firstNameRef.current.focus()}
            className={`absolute left-2 text-lg cursor-text transition-all duration-300
            ${firstName ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
          >
            FIRST NAME*
          </label>
          <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 w-0 peer-focus:w-full transition-all duration-300" />
        </div>

        <div className="relative text-white bg-neutral-800 rounded-t-md p-2">
          <input
            ref={lastNameRef}
            type="text"
            className="peer bg-transparent outline-none w-full pt-6"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder=" "
          />
          <label
            onClick={() => lastNameRef.current.focus()}
            className={`absolute left-2 text-lg cursor-text transition-all duration-300
            ${lastName ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
          >
            LAST NAME*
          </label>
          <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 w-0 peer-focus:w-full transition-all duration-300" />
        </div>

        <div className="relative text-white bg-neutral-800 rounded-t-md p-2">
          <input
            ref={phoneRef}
            type="tel"
            className="peer bg-transparent outline-none w-full pt-6"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder=" "
          />
          <label
            onClick={() => phoneRef.current.focus()}
            className={`absolute left-2 text-lg cursor-text transition-all duration-300
            ${phone ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
          >
            PHONE NUMBER*
          </label>
          <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 w-0 peer-focus:w-full transition-all duration-300" />
        </div>

        <div className="relative text-white bg-neutral-800 rounded-t-md p-2">
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
            className={`absolute left-2 text-lg cursor-text transition-all duration-300
            ${email ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
          >
            EMAIL ADDRESS*
          </label>
          <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 w-0 peer-focus:w-full transition-all duration-300" />
        </div>
      </div>

      <button className="font-bold w-full md:w-1/4 rounded-md bg-red-500 text-white px-4 py-3 cursor-pointer">
        SAVE
      </button>
    </div>
  );
};

export default Account;
