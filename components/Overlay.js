"use client";
import { useEffect } from "react";

export default function Overlay({ isOpen, onClick }) {
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (isOpen) {
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
    }, [isOpen]);

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClick}
        />
    );
}
