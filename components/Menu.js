"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Product from "./Product";
import Item from "./Item";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`#link-${activeSection}`);
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeSection]);

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

  const productsData = {
    deals: [
      {
        title: "Family Deal",
        description: "2 Large Pizzas + 1.5L Drink + Garlic Bread",
        price: 2999,
        image: "/deals/burgers/crispy.png",
      },
      {
        title: "Friends Deal",
        description: "2 Regular Pizzas + 2 Drinks",
        price: 1899,
        image: "/deals/burgers/crispyMonster.png",
      },
      {
        title: "Mega Feast",
        description: "1 Large Pizza + 1 Burger + Fries + Drink",
        price: 1599,
        image: "/deals/burgers/jumboPatty.png",
      },
      {
        title: "Lunch Special",
        description: "1 Burger + Fries + Drink",
        price: 699,
        image: "/deals/burgers/shamiDeal.png",
      },
      {
        title: "Lunch Special",
        description: "1 Burger + Fries + Drink",
        price: 699,
        image: "/deals/burgers/tower.png",
      },
    ],
    burgers: [
      {
        title: "Jumbo Crispy",
        description: "Juicy beef patty with cheese, lettuce, tomato & sauce",
        price: 370,
        image: "/burgers/crispy.png",
      },
      {
        title: "Crispy Monster",
        description: "Juicy beef patty with cheese, lettuce, tomato & sauce",
        price: 539,
        image: "/burgers/crispyMonster.png",
      },
      {
        title: "Jumbo Patty",
        description:
          "Double cheese layers with grilled chicken & signature sauce",
        price: 349,
        image: "/burgers/jumboPatty.png",
      },
      {
        title: "Shami",
        description:
          "Beef patty, BBQ sauce, caramelized onions, cheddar cheese",
        price: 150,
        image: "/burgers/shami.png",
      },
      {
        title: "Tower",
        description:
          "Beef patty, BBQ sauce, caramelized onions, cheddar cheese",
        price: 520,
        image: "/burgers/tower.png",
      },
    ],

    pizza: [
      {
        title: "Fajita",
        description: "Juicy beef patty with cheese, lettuce, tomato & sauce",
        price: 370,
        image: "/pizza/fajita.png",
      },
      {
        title: "Cheese Lover",
        description: "Juicy beef patty with cheese, lettuce, tomato & sauce",
        price: 539,
        image: "/pizza/cheeseLover.png",
      },
      {
        title: "Jumbo Patty",
        description:
          "Double cheese layers with grilled chicken & signature sauce",
        price: 349,
        image: "/pizza/malaiBoti.png",
      },
      {
        title: "Shami",
        description:
          "Beef patty, BBQ sauce, caramelized onions, cheddar cheese",
        price: 150,
        image: "/pizza/periPeri.png",
      },
      {
        title: "Tower",
        description:
          "Beef patty, BBQ sauce, caramelized onions, cheddar cheese",
        price: 520,
        image: "/pizza/seekhKabab.png",
      },
      {
        title: "Tower",
        description:
          "Beef patty, BBQ sauce, caramelized onions, cheddar cheese",
        price: 520,
        image: "/pizza/tikka.png",
      },
      {
        title: "Tower",
        description:
          "Beef patty, BBQ sauce, caramelized onions, cheddar cheese",
        price: 520,
        image: "/pizza/veggieLover.png",
      },
    ],

    wings: [
      {
        title: "Jumbo Crispy",
        description: "Juicy beef patty with cheese, lettuce, tomato & sauce",
        price: 370,
        image: "/wings/bbqSauce.png",
      },
      {
        title: "Crispy Monster",
        description: "Juicy beef patty with cheese, lettuce, tomato & sauce",
        price: 539,
        image: "/wings/crispyHot.png",
      },
      {
        title: "Jumbo Patty",
        description:
          "Double cheese layers with grilled chicken & signature sauce",
        price: 349,
        image: "/wings/ovenBaked.png",
      },
      {
        title: "Shami",
        description:
          "Beef patty, BBQ sauce, caramelized onions, cheddar cheese",
        price: 150,
        image: "/wings/periPeri.png",
      },
    ],

    fries: [
      {
        title: "Jumbo Crispy",
        description: "Juicy beef patty with cheese, lettuce, tomato & sauce",
        price: 370,
        image: "/fries/regular.png",
      },
      {
        title: "Crispy Monster",
        description: "Juicy beef patty with cheese, lettuce, tomato & sauce",
        price: 539,
        image: "/fries/loaded.png",
      },
      
    ],
  };

  return (
    <div>
      <nav
        ref={navRef}
        className="sticky top-20 z-10 flex px-4 sm:px-16 bg-neutral-900 h-20">
        <div className="flex gap-8 items-center overflow-x-auto scrollbar-hide">
          {links.map((link) => (
            <Link
              id={`link-${link.id}`}
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition-colors duration-300 hover:text-yellow-500 text-lg sm:text-2xl font-bold font-poppins whitespace-nowrap
              ${activeSection === link.id ? "text-yellow-500" : "text-white"
                }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 bg-yellow-500 rounded-md w-full h-0.5"
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {links.map((section) => {
        const products = productsData[section.id];

        return (
          <section
            key={section.id}
            id={section.id}
            className="bg-neutral-950 pb-20 px-2 sm:px-10 scroll-mt-40"
          >
            <span className="text-white font-bold font-poppins mb-6 text-3xl block">
              {section.label}
            </span>

            {products && products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
                {products.map((product, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedProduct(product);
                      setShow(true);
                    }}
                  >
                    <Product product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-green text-lg">
                No products available in this category yet.
              </p>
            )}
          </section>
        );
      })}

      <Item
        show={show}
        product={selectedProduct}
        onClose={() => {
          setSelectedProduct(null);
          setShow(false);
        }}
      />
    </div>
  );
};

export default Menu;