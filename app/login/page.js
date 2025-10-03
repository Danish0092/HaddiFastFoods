import React from 'react';
import { Poppins, Inter } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const page = () => {
    return (
        <div className='bg-neutral-900 font-poppins text-white min-h-screen flex items-center justify-center p-4'>
            <div className='flex flex-col md:flex-row w-full md:w-2/3 relative bg-neutral-800 rounded-md overflow-hidden'>
                
                <Link className='absolute z-50 top-4 left-4 w-8 h-8 bg-neutral-900 flex items-center justify-center rounded-full border-2 border-red-500 hover:bg-red-500 transition-colors duration-300 ease-in-out' href="/">
                    <i className="ri-arrow-left-s-line text-2xl font-medium"></i>
                </Link>

                <div className='w-full flex items-center justify-center p-6 md:w-1/2 h-64 md:h-auto'>
                <Image
                width={400}
                height={400}
                    src="/banners/ManWithBurger.png" 
                        alt="" 
                        className='bject-cover'
                    />

              
                </div>

                <div className='w-full md:w-1/2 p-6 flex flex-col justify-center space-y-4'>
                    <p className='text-3xl md:text-4xl font-semibold'>Welcome</p>

                    <div className="w-full flex flex-col bg-neutral-600 border-b-2 border-white hover:border-red-500 rounded-t-md p-2 transition-colors duration-300">
                        <label className="text-sm text-white">Phone Number (3XXXXXXXXX)</label>
                        <div className="flex gap-2 items-center">
                            <span className="font-semibold text-white">+92 | </span>
                            <input
                                type="text"
                                className="text-gray-300 outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    <button className="flex w-full items-center justify-center font-medium rounded-sm bg-red-500 text-white gap-4 px-4 py-3 cursor-pointer">
                        <i className="ri-phone-fill"></i>
                        <span className="text-sm">LOGIN WITH PHONE</span>
                    </button>


                    <Link href={'account-info'}>
                    <button className="flex w-full items-center justify-center font-medium rounded-sm bg-red-500 text-white gap-4 px-4 py-3 cursor-pointer">
                        <i className="ri-google-fill"></i>
                        <span className="text-sm">LOGIN WITH GOOGLE</span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default page;
