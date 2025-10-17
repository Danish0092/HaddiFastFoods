"use client";
import React from "react";

export default function StoreLocator() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center py-10 px-4">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-600">
          Store Locator
        </h1>
        <p className="text-gray-500 mt-2">
          Find our fast food outlet near you
        </p>
      </div>

      {/* MAIN GRID SECTION */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* MAP SECTION */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps?q=24.8607,67.0011&z=15&output=embed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-none w-full h-[400px] md:h-[500px]"
          ></iframe>
        </div>

        {/* STORE DETAILS */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Main Branch
          </h2>
          <p className="text-gray-600 mb-3">
            <i className="ri-map-pin-2-line text-yellow-500 text-xl align-middle"></i>{" "}
            Main Boulevard, Clifton, Karachi, Pakistan
          </p>
          <p className="text-gray-600 mb-1">
            <i className="ri-phone-line text-yellow-500 text-xl align-middle"></i>{" "}
            +92 300 1234567
          </p>
          <p className="text-gray-600 mb-4">
            <i className="ri-time-line text-yellow-500 text-xl align-middle"></i>{" "}
            Open: 11:00 AM – 11:00 PM
          </p>

          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/dir/?api=1&destination=24.8607,67.0011",
                "_blank"
              )
            }
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Get Directions
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <p className="text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} FastBite. All rights reserved.
      </p>
    </div>
  );
}
