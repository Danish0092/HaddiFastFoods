"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Item({ product, onClose }) {
  const [drink, setDrink] = useState("Mirinda");
  const [qty, setQty] = useState(1);
  const drinks = ["Mirinda", "Dew", "Pepsi", "7up"];

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => q + 1);

  if (!product) return null;

  return (
    <main className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-6 md:p-8">
      <section
        aria-label="Product details"
        className="relative w-full max-w-5xl bg-neutral-900 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-yellow-500 text-2xl sm:text-3xl hover:text-red-500 focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="w-full">
            <div className="relative w-full aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full space-y-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-200">
              {product.title}
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg">
              {product.description}
            </p>

            <p className="text-xl sm:text-2xl font-bold text-neutral-200">
              Rs. {product.price}
            </p>

              <legend className="sr-only">Choose a drink</legend>
            <fieldset className="mt-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {drinks.map((d) => {
                  const checked = drink === d;
                  return (
                    <label
                      key={d}
                      className="inline-flex items-center gap-2 cursor-pointer select-none"
                    >
                      <span
                        className={`grid place-items-center h-5 w-5 rounded-full border-2 transition-colors ${
                          checked ? "border-yellow-500" : "border-neutral-600"
                        }`}
                        aria-hidden
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full transition-colors ${
                            checked ? "bg-yellow-500" : "bg-neutral-900"
                          }`}
                        />
                      </span>

                      <input
                        type="radio"
                        name="drink"
                        value={d}
                        checked={checked}
                        onChange={() => setDrink(d)}
                        className="sr-only"
                      />
                      <span className="text-base sm:text-lg text-neutral-200">{d}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6 sm:mt-8">
              <p className="text-lg sm:text-xl font-extrabold text-neutral-200">Quantity</p>

              <div className="mt-3 flex items-center gap-3">
                <button
                  onClick={dec}
                  className="h-10 w-10 sm:h-11 sm:w-11 grid place-items-center rounded-md bg-yellow-500 text-neutral-900 text-xl hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 active:scale-95 transition"
                >
                  –
                </button>

                <output className="min-w-[2ch] text-center text-xl font-bold text-neutral-200">
                  {qty}
                </output>

                <button
                  onClick={inc}
                  className="h-10 w-10 sm:h-11 sm:w-11 grid place-items-center rounded-md bg-yellow-500 text-neutral-900 text-xl hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 active:scale-95 transition"
                >
                  +
                </button>
              </div>
            </div>

            <button className="mt-4 inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-yellow-500 text-neutral-900 font-bold hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 active:scale-95 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
