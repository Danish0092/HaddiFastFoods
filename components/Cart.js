"use client";
import React from "react";
import { Poppins, Inter } from "next/font/google";
import Overlay from "./Overlay";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Cart = ({ show, setShow }) => {
  return (
    <>
      <Overlay isOpen={show} onClick={() => setShow(false)} />

      <div
        className={`fixed z-50 right-0 top-0 flex flex-col justify-between
           bg-neutral-900 font-poppins w-full sm:w-1/3 h-full py-8 px-3 
          transform transition-transform duration-300
        ${show ? "translate-x-0" : "translate-x-full"}`}
      >
        <p className="font-bold text-2xl sm:text-4xl text-yellow-500 w-full text-center">
          Your Cart
        </p>

        <i
          className="ri-arrow-right-s-line absolute top-7 text-yellow-500 text-4xl cursor-pointer"
          onClick={() => setShow(false)}
        ></i>

        <hr className="bg-neutral-800 h-0.5 my-2" />

        <ul className="p-2 h-2/3 space-y-2 sm:space-y-4 overflow-y-scroll scrollbar-hide">
          <li className="grid grid-cols-3 p-2 bg-neutral-800 gap-3 place-items-center items-center">
          
            
            <div className="w-full">
              <p className="text-xl sm:text-2xl leading-none line-clamp-3 sm:line-clamp-4 font-bold text-white break-words">
                Sample Product Name
              </p>
              <p className="text-neutral-500 font-bold">Rs: 809</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-2">
                <button className="bg-yellow-500 rounded-sm px-1">
                  <i className="ri-subtract-line text-black"></i>
                </button>
                <span className="text-white font-bold">1</span>
                <button className="bg-yellow-500 rounded-sm px-1">
                  <i className="ri-add-line text-black"></i>
                </button>
              </div>
              <i className="ri-delete-bin-3-fill text-yellow-500 text-2xl mt-1"></i>
            </div>
          </li>


        </ul>

        <hr className="bg-neutral-800 h-0.5 my-2" />

        <div className="flex justify-between items-center text-white font-bold text-lg mb-2">
          <span>Sub Total</span>
          <span>Rs. 809</span>
        </div>

        <button className="bg-yellow-500 w-full font-bold text-lg rounded-sm p-3">
          Proceed To Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
