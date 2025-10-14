"use client";
import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

const TOAST_TYPES = {
    success: {
        progress: "bg-green-500",
        icon: <i className="ri-verified-badge-fill text-2xl text-green-500"></i>,
    },
    error: {
        progress: "bg-red-500",
        icon: <i className="ri-close-circle-fill text-2xl text-red-500"></i>,
    },
};

export const showToast = (type, message) => {
    const toastType = TOAST_TYPES[type] || TOAST_TYPES.success;

    toast.custom(
        (t) => (
            <div
                onClick={() => toast.dismiss(t.id)}
                className={`relative  cursor-pointer 
          rounded-lg p-4  text-gray-800 shadow-lg 
          bg-white flex items-center gap-3 transition-all duration-300 overflow-hidden
          ${t.visible ? "animate-toast-in" : "animate-toast-out"} 
          ${toastType.border}`}
            >
                <div>{toastType.icon}</div>
                <p className="font-medium text-sm sm:text-base">{message}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 overflow-hidden ">
                    <div
                        className={`h-full ${toastType.progress} animate-progress`}
                    ></div>
                </div>
            </div>
        ),
        {
            duration: 3000,
        }
    );
};

const CustomToaster = () => {
    useEffect(() => { }, []);

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <style jsx global>{`
        @keyframes toast-in {
          0% {
            opacity: 0;
            transform: translateY(-15px) scale(0.95);
          }
          60% {
            opacity: 1;
            transform: translateY(0px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes toast-out {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px) scale(0.9);
          }
        }
        .animate-toast-in {
          animation: toast-in 0.4s ease-out forwards;
        }
        .animate-toast-out {
          animation: toast-out 0.25s ease-in forwards;
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-progress {
          animation: progress 3s linear forwards;
        }
      `}</style>
        </>
    );
};

export default CustomToaster;
