"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomToaster, { showToast } from "@/components/CustomToaster";

export default function CheckoutPage() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const fullNameRef = useRef(null);
    const phoneNoRef = useRef(null);
    const addressRef = useRef(null);
    const router = useRouter();

    const handleOrder = (e) => {

        e.preventDefault(); 

        if (!fullName || !phone || !address) {
            showToast("error", "Please fill all required fields!");
            return;
        }

        showToast("success", "Order placed successfully!");

        setTimeout(() => {
            router.push("/");
        }, 2500);
    };

    return (
        <>
            <CustomToaster   />
            <div className="min-h-screen bg-gray flex flex-col items-center justify-center mt-10 py-10 px-4">
                <div className="w-full md:w-2/3 bg-neutral shadow-lg rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-8">
                    {/* LEFT: Order Summary */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-yellow text-center">
                            Order Summary
                        </h2>

                        <div className="space-y-4 max-h-72 overflow-y-auto pr-2 scrollbar-hide">
                            {[
                                { name: "Cheese Burger", price: 599, img: "/banners/BRONCO.webp" },
                                { name: "Zinger Roll", price: 399, img: "/banners/BRONCO.webp" },
                                { name: "Fries with Mayo", price: 249, img: "/banners/BRONCO.webp" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between bg-gray rounded-lg p-3 hover:bg-neutral-200 transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 relative">
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                fill
                                                className="object-cover rounded-md"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-yellow-600 font-bold text-sm">
                                                Rs {item.price}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="font-bold ">x1</span>
                                </div>
                            ))}
                        </div>

                        {/* TOTAL */}
                        <div className="mt-6 border-t pt-4 space-y-2">
                            <div className="flex justify-between ">
                                <span>Subtotal</span>
                                <span>Rs 1247</span>
                            </div>
                            <div className="flex justify-between ">
                                <span>Delivery Charges</span>
                                <span>Rs 150</span>
                            </div>

                            <div className="flex justify-between text-lg font-semibold text-gray-800 border-t pt-3">
                                <span>Total</span>
                                <span className="text-yellow-600">Rs 1497</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Contact + Delivery */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-yellow text-center">
                            Contact & Delivery
                        </h2>

                        <form onSubmit={handleOrder} className="space-y-4">
                            {/* Full Name */}
                            <div className="relative p-3 bg-gray rounded-t-md">
                                <input
                                    ref={fullNameRef}
                                    type="text"
                                    className="pt-6 bg-transparent outline-none peer w-full"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                                <label
                                    onClick={() => fullNameRef.current.focus()}
                                    className={`absolute left-2 text-lg uppercase cursor-text transition-all duration-300
                  ${fullName ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
                                >
                                    Full Name*
                                </label>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red peer-focus:w-full transition-all duration-300" />
                            </div>

                            {/* Phone */}
                            <div className="relative p-3 bg-gray rounded-t-md">
                                <input
                                    ref={phoneNoRef}
                                    type="text"
                                    className="pt-6 bg-transparent outline-none peer w-full"
                                    value={phone}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <label
                                    onClick={() => phoneNoRef.current.focus()}
                                    className={`absolute left-2 text-lg uppercase cursor-text transition-all duration-300
                    ${phone ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
                                >
                                    Phone*
                                </label>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red peer-focus:w-full transition-all duration-300" />
                            </div>

                            {/* Address */}
                            <div className="relative p-3 bg-gray rounded-t-md">
                                <input
                                    ref={addressRef}
                                    type="text"
                                    className="pt-6 bg-transparent outline-none peer w-full"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <label
                                    onClick={() => addressRef.current.focus()}
                                    className={`absolute left-2 text-lg uppercase cursor-text transition-all duration-300
                    ${address ? "top-1 text-sm" : "top-5 peer-focus:top-1 peer-focus:text-sm"}`}
                                >
                                    Complete Address*
                                </label>
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red peer-focus:w-full transition-all duration-300" />
                            </div>

                            {/* Payment */}
                            <div>
                                <h3 className="font-medium text-yellow mt-6 mb-2">Payment Method</h3>
                                <div
                                    className="flex items-center gap-2 p-3 w-full
                bg-gray text-lg rounded-sm cursor-pointer
                transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span className="flex items-center justify-center bg-red px-2 py-1 rounded-xs">
                                        <i className="ri-hand-coin-fill"></i>
                                    </span>
                                    Cash On Delivery
                                </div>
                            </div>

                            {/* Confirm Button */}
                            <button
                                type="submit"
                                className="bg-yellow w-full font-bold text-lg rounded-sm p-3"
                            >
                                Confirm Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
