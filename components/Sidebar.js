"use client";
import React from "react";
import Image from "next/image";

const Sidebar = ({ show, setShow }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setShow(false)}
    >
      <div
        className={`bg-neutral-900 w-11/12 sm:w-1/3 h-full p-2.5 flex flex-col justify-between fixed left-0 top-0 transform transition-transform duration-300
        ${show ? "-translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <i
            className="ri-close-line text-white text-3xl cursor-pointer"
            onClick={() => setShow(false)}
          ></i>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <button className="bg-yellow-500 w-full font-bold text-lg rounded-sm p-3">
            Store Location
          </button>
          <button className="bg-yellow-500 w-full font-bold text-lg rounded-sm p-3">
            Explore Menu
          </button>
          <button className="bg-yellow-500 w-full font-bold text-lg rounded-sm p-3">
            Login
          </button>
        </div>
        <div className="mt-auto">
          <hr className="bg-neutral-800 h-0.5" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
