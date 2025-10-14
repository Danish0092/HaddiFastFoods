"use client";
import React from "react";
import Link from "next/link";

export default function WhatsAppButton() {
    const phoneNumber = "923259726009";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-20 bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg flex items-center gap-2 transition-all"
        >
            <i className="ri-whatsapp-line text-2xl text-white"></i>
            Chat on WhatsApp
        </Link>
    );
}
