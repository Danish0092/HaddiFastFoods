"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ show, setShow }) => {
  return (
    <div
      className={`fixed z-40 inset-0 bg-black/40 
      transition-opacity duration-300  
      ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`fixed left-0 top-0 
        flex flex-col gap-4 w-3/4 sm:w-1/4 h-full py-6 px-3
       bg-neutral transform transition-transform duration-300
        ${show ? "-translate-x-0" : "-translate-x-full"}`}
      >
        <i
          className="ri-arrow-left-s-line absolute top-7 right-4
          text-yellow text-4xl cursor-pointer"
          onClick={() => setShow(false)}
        ></i>

        <div className="flex items-center gap-4">
          <Image
            src="/profile.png"
            alt="Profile png"
            width={50}
            height={50}
            className="rounded-full"
          />

          <span className="text-xl font-medium">Usman & Danish</span>
        </div>

        <span className="bg-gray h-0.5 my-2 mb-10"></span>

        <div className="flex flex-col gap-3 mt-2">
          <Link onClick={()=>setShow(false)}
            href={"/store-locator"}
            className="flex items-center gap-2 p-3 w-full
            hover:bg-gray text-lg rounded-sm cursor-pointer
             transition-all duration-300 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center bg-red px-2 py-1 rounded-xs">
              <i className="ri-map-pin-2-line"></i>
            </span>
            Store Location
          </Link>

          <Link
            href={"/explore-menu"}
            className="flex items-center gap-2 p-3 w-full
            hover:bg-gray text-lg rounded-sm cursor-pointer
             transition-all duration-300 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center bg-red px-2 py-1 rounded-xs">
              <i className="ri-restaurant-2-line"></i>
            </span>
            Explore Menu
          </Link>

          <button
            onClick={() => setShow(false)}
            className="flex items-center gap-2 p-3 w-full
            hover:bg-gray text-lg rounded-sm cursor-pointer
             transition-all duration-300 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center bg-red px-2 py-1 rounded-xs">
              <i className="ri-logout-circle-r-line"></i>
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
