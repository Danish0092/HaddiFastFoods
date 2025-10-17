  "use client";
  import React from "react";
  import Image from "next/image";
  import { useEffect } from "react";
  import Link from "next/link";


  const Cart = ({ show, setShow }) => {
    useEffect(() => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      if (show) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }

      return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      };
    }, [show]);


    return (

      <div
        className={`fixed z-40 inset-0 bg-black/40 
        transition-opacity duration-300  
        ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`} >


        <div
          className={`fixed right-0 top-0 
          flex flex-col justify-between w-full sm:w-1/3 h-full py-8 px-3
        bg-neutral transform transition-transform duration-300
          ${show ? "translate-x-0" : "translate-x-full"}`}>

          <i
            className="ri-arrow-right-s-line absolute top-7 
            text-yellow text-4xl cursor-pointer"
            onClick={() => setShow(false)}
          ></i>

          <p className="w-full text-yellow text-2xl sm:text-4xl text-center font-bold">
            Your Cart
          </p>

          <span className="bg-gray h-0.5 my-2"></span>

          <ul className="p-2 h-2/3 space-y-2 sm:space-y-4 overflow-y-scroll scrollbar-hide">

            <li
              className="grid grid-cols-3 p-2 gap-3 
              place-items-center items-center bg-gray">

              <div className="w-full h-24 relative">
                <Image
                  src="/banners/BRONCO.webp"
                  alt="Sample Product"
                  fill
                  className="object-cover rounded"
                />
              </div>

              <div>
                <p className="text-xl leading-none line-clamp-3  font-bold break-words">
                  Sample Product Name
                </p>
                <p className="text-yellow font-bold">Rs: 809</p>
              </div>


              <div className="flex flex-col items-center">

                <div className="flex gap-2">
                  <button className="bg-yellow rounded-sm px-1">
                    <i className="ri-subtract-line text-neutral"></i>
                  </button>
                  <span className="font-bold">1</span>
                  <button className="bg-yellow rounded-sm px-1">
                    <i className="ri-add-line text-neutral"></i>
                  </button>
                </div>

                <i className="ri-delete-bin-3-fill text-yellow text-2xl mt-1"></i>
              </div>
            </li>

          </ul>

          <span className="bg-gray h-0.5 my-2"></span>

          <div className="flex justify-between items-center font-bold text-lg mb-2">
            <span>Sub Total</span>
            <span>Rs. 809</span>
          </div>

          <Link href={'/checkout'} onClick={() => setShow(false)}
          className="bg-yellow w-full font-bold text-lg text-centzer rounded-sm p-3">
            Proceed To Checkout
          </Link>
        </div>

      </div>
    );
  };

  export default Cart;
