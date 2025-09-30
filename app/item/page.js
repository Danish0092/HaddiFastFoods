"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";

export default function Item() {
  const [drink, setDrink] = useState("Mirinda");
  const drinks = ["Mirinda", "Dew", "Pepsi", "7up"];

  return (
    <main className="min-h-screen bg-neutral-950 text-white grid place-items-center p-8">
      <div className="relative h-[500px] flex items-center gap-10 bg-neutral-900 p-6 rounded-lg">
        <button
          className="absolute top-3 right-3 text-yellow-500 text-3xl hover:text-red-600"
          aria-label="Close"
          //   onClick={() => alert("Close clicked")}
        >
          ×
        </button>

        <div className="w-1/2">
          <img
            src="/banners/BRONCO.webp"
            alt="Bronco Chicken Burger"
            className="object-cover w-full h-[350px] rounded-lg"
          />
        </div>

        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-neutral-250">
            Bronco Chicken Burger
          </h2>
          <p className="text-neutral-300">
            Juicy Zinger, smothered in hot sauce, delivering a scorching hot and
            sour taste.
          </p>
          <p className="text-2xl font-bold">Rs. 749</p>

          <div className="mt-6">
            <div className="flex items-center gap-6 flex-wrap">
              {drinks.map((d) => (
                <label
                  key={d}
                  className="inline-flex items-center gap-2 cursor-pointer select-none"
                >
                  <span
                    className={`grid place-items-center h-5 w-5 rounded-full border-[2px] ${
                      drink === d ? "border-yellow-500" : "border-neutral-500"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        drink === d ? "bg-yellow-500" : "bg-transparent"
                      }`}
                    />
                  </span>
                  <input
                    type="radio"
                    name="drink"
                    value={d}
                    checked={drink === d}
                    onChange={() => setDrink(d)}
                    className="sr-only"
                  />
                  <span className="text-lg">{d}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xl font-extrabold">Quantity</p>
            <div className="mt-3 flex items-center gap-3">
              <button
                className="h-10 w-10 grid place-items-center rounded-md bg-yellow-500 text-black text-xl  hover:bg-red-900"
                aria-label="Decrease"
              >
                –
              </button>
              <div className="min-w-[2ch] text-center text-xl font-bold">1</div>
              <button
                className="h-10 w-10 grid place-items-center rounded-md bg-yellow-500  text-black text-xl hover:bg-red-900"
                aria-label="Increase"
              >
                +
              </button>
            </div>
          </div>
          <button className="px-15 py-2 rounded-lg bg-yellow-500 text-black font-bold hover:bg-red-900">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
