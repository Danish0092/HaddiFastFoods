"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-30 flex items-center justify-between 
      w-full h-20 text-xl sm:text-2xl bg-neutral px-2.5 sm:px-5">

        <div className="flex items-center gap-2 sm:gap-6">
          <i
            onClick={() => setSidebar(true)}
            className="ri-menu-line font-bold cursor-pointer"
          ></i>

          <Link href={'/'}>
            <Image
              width={100}
              height={100}
              alt="logo"
              src="/logo.png"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <Link href="/login">
            <button className=" flex items-center gap-2 bg-gray rounded-sm 
            py-1 sm:py-2.5 px-2 sm:px-5 cursor-pointer">
              <i className="ri-account-circle-line"></i>
            </button>
          </Link>

          <button
            onClick={() => setShowCart(true)}
            className="relative bg-gray rounded-sm py-1 sm:py-2.5 px-2 sm:px-5 cursor-pointer">
            <i className="ri-shopping-bag-line"></i>
            <span className="absolute flex items-center justify-center 
            -top-1 sm:top-1 -right-1 sm:right-1 bg-red 
            text-sm w-4 sm:w-5 h-4 sm:h-5 rounded-full">
              1
            </span>
          </button>
        </div>
      </nav>

      <Sidebar show={showSidebar} setShow={setSidebar} />
      <Cart show={showCart} setShow={setShowCart} />
    </>
  );
};

export default Navbar;
