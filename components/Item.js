"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Item({ show, product, onClose }) {
  console.log(product);

  const [selected, setSelected] = useState([]);

  const drinks = ["Mirinda", "Dew", "Pepsi", "7up"];

  const toggleSelect = (drink) => {
    setSelected((prev) =>
      prev.includes(drink)
        ? prev.filter((d) => d !== drink)
        : [...prev, drink]
    );
  };


  return (


    <div
      className={`fixed inset-0 flex items-center justify-center 
              bg-neutral/40  z-40 backdrop-blur-xs 
                transition-opacity duration-300 ease-out
        ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}>


      <section
        className={`relative bg-gray sm:w-2/3 w-full p-4 rounded-sm
                         
                        transform transition-all duration-300 ease-out
                        ${show ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}`}>

        <button
          onClick={onClose}
          className="absolute  flex items-center justify-center top-4 right-4 
                        w-8 h-8 bg-transparent hover:bg-red 
                        rounded-full border-2 border-red transition-colors cursor-pointer">

          <i className="ri-close-line text-2xl font-medium"></i>
        </button>

        {
          product &&
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center  gap-6  items-center">

            <Image

              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover rounded-xl"
              priority
            />


            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="text-3xl font-bold text-yellow">{product.title}</h1>

              <p className="text-center">{product.description}</p>
              <p className="text-2xl font-bold">Rs. {product.price}</p>

              <div className="flex gap-x-6 text-center justify-around flex-wrap ">
                {drinks.map((drink) => (
                  <label
                    key={drink}
                    className="flex items-center  gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(drink)}
                      onChange={() => toggleSelect(drink)}
                      className="appearance-none w-4 h-4 rounded-full border-2 border-gray-500 
                  checked:bg-yellow-400
                    transition-all duration-200 cursor-pointer"
                    />
                    <span className="text-lg text-white transition-colors duration-200">
                      {drink}
                    </span>
                  </label>
                ))}
              </div>


              <div className="flex gap-2 text-2xl">
                <button className="bg-yellow rounded-sm px-1">
                  <i className="ri-subtract-line text-neutral"></i>
                </button>
                <span className="font-bold">1</span>
                <button className="bg-yellow rounded-sm px-1">
                  <i className="ri-add-line text-neutral"></i>
                </button>
              </div>

              <button className="bg-yellow-500 w-full hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer">
                Add to Cart
              </button>

            </div>
          </div>
        }
      </section >
    </div >
  );
}
