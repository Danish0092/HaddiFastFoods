"use client";
import React, { useState } from "react";
import Login from "@/components/Login";
import Signup from "@/components/SignUp";

const AuthPage = () => {
  const [showSignup, setShowSignup] = useState(true);

  const toggleForm = () => setShowSignup(!showSignup);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray overflow-hidden ">
      <Signup toggleForm={toggleForm} show={showSignup} />
      <Login toggleForm={toggleForm} show={!showSignup} />
    </div>
  );
};

export default AuthPage;
