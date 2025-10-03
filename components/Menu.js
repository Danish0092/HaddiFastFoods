"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./Overlay";   
import Item from "./Item";         
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Menu = () => {
  const [active, setActive] = useState("home");
  const navRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let scrollY = window.scrollY + 160;
      sections.forEach((sec) => {
        const offset = sec.offsetTop;
        const id = sec.getAttribute("id");
        if (scrollY >= offset) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "deals", label: "Deals" },
    { id: "offers", label: "Buy1 Get1 Free" },
    { id: "burgers", label: "Burgers" },
    { id: "shawarma", label: "Shawarma" },
    { id: "wraps", label: "Zinger Wraps" },
    { id: "pizza", label: "Pizza" },
    { id: "wings", label: "Wings" },
    { id: "nuggets", label: "Nuggets" },
    { id: "fries", label: "Fries" },
  ];

  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`#link-${active}`);
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [active]);

  const ProductCard = ({ product }) => (
    <div
      className="bg-neutral-800 relative rounded-md shadow-md cursor-pointer"
      onClick={() => setSelectedProduct(product)} 
    >
      <div className="aspect-square rounded-t-md overflow-hidden relative">
        <Image
          fill
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="sm:pb-8 pb-5 pt-2 sm:px-4 px-2">
        <p className="text-yellow-500 font-poppins text-lg sm:text-2xl font-bold">
          {product.title}
        </p>
        <p className="text-sm text-white font-poppins mt-1 line-clamp-3 sm:line-clamp-2">
          {product.description}
        </p>
        <p className="sm:text-3xl text-2xl font-poppins font-bold text-yellow-500">
          Rs. {product.price}
        </p>
      </div>
      <button className="absolute left-1/2 flex w-4/5 sm:w-3/4 items-center justify-center font-bold font-poppins -bottom-4 -translate-x-1/2 bg-red-500 text-white hover:text-red-500 hover:bg-white gap-1 px-1 py-2 rounded transition duration-500 hover:outline hover:outline-1 outline-red-500 cursor-pointer">
        <span className="text-sm">ADD TO CART</span>
      </button>
    </div>
  );

  return (
    <div>
      <nav
        ref={navRef}
        className="sticky top-20 z-20 flex px-4 sm:px-16 bg-neutral-900 h-20"
      >
        <div className="flex gap-8 items-center overflow-x-auto scrollbar-hide">
          {links.map((link) => (
            <Link
              id={`link-${link.id}`}
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition-colors duration-300 hover:text-yellow-500 text-lg sm:text-2xl font-bold font-poppins whitespace-nowrap
              ${active === link.id ? "text-yellow-500" : "text-white"}`}
            >
              {link.label}
              {active === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 bg-yellow-500 rounded-md w-full h-0.5"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {links.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="bg-neutral-950 p-4 sm:p-20 scroll-mt-40"
        >
          <span className="text-white font-bold font-poppins mb-6 text-3xl block">
            {section.label}
          </span>

          <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-3 gap-y-8 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <ProductCard
                key={i}
                product={{
                  title: `${section.label} Item ${i}`,
                  description:
                    "Crispy Sides Crust: Creamy Sauce, Extra Cheesy, Chicken Tikka, Fajita Mix, Black Olives, Sausages, and Vegetables.",
                  price: 999 + i * 100,
                  image: "/banners/thincrust.png",
                }}
              />
            ))}
          </div>
        </section>
      ))}

      <Overlay
        isOpen={!!selectedProduct}
        onClick={() => setSelectedProduct(null)}
      />
      {selectedProduct && (
        <Item
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Menu;
