import React from 'react'

const Footer = () => {
    return (



        <footer className="text-white bg-neutral-800 p-6">
            <div className="grid grid-col-1 sm:grid-cols-3 gap-4">


                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-baloo text-[#bb4b1b] font-black text-4xl">Haddi
                        <span className="text-white"> Fast Foods</span>
                    </h2>


                    <div className="flex gap-2">
                        <span className="flex items-center justify-center 
                        bg-white hover:bg-[#3c5a99] rounded-full w-8 h-8 cursor-pointer">
                            <i className="ri-facebook-fill text-black hover:text-white"></i>
                        </span>

                        <span className="flex items-center justify-center 
                    bg-white hover:bg-[#d53474] rounded-full w-8 h-8 cursor-pointer">
                            <i className="ri-instagram-fill text-black hover:text-white"></i>
                        </span>
                    </div>


                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="font-poppins font-bold text-xl">Quick Links</span>
                    <a href="" className="font-baloo hover:text-[#bb4b1b] text-lg">Home</a>
                    <a href="" className="font-baloo hover:text-[#bb4b1b] text-lg">About</a>
                    <a href="" className="font-baloo hover:text-[#bb4b1b] text-lg">Contact</a>
                </div>

                <div className="flex flex-col items-center justify-center text-xl">
                    <span className="font-poppins font-bold text-xl">Contact Info</span>
                    <a className="flex gap-2" href="">
                        <i className="ri-map-pin-2-line text-xl"></i>
                        <span className="font-baloo hover:text-[#bb4b1b] text-lg text-center w-40">Branch Johar Town,
                            Lahore, 54000</span>
                    </a>

                    <a className="flex gap-2 items-center justify-center" href="">
                        <i className="ri-mail-line text-xl"></i>
                        <span className="font-baloo hover:text-[#bb4b1b] text-lg">info@cafedemax.com</span>
                    </a>

                    <a className="flex gap-2 items-center justify-center" href="">
                        <i className="ri-phone-line text-xl"></i>
                        <span className="font-baloo hover:text-[#bb4b1b] text-lg">+92 3498789189</span>
                    </a>

                </div>

            </div>


            <div className="bg-[#f9c311] h-[1px] my-3 w-full"></div>

            <div className="font-baloo m-auto text-center">© 2025 Haddi Fast Foods ~ By Team. All rights reserved.</div>




        </footer >




    )
}

export default Footer
