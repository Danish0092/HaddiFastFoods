"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Corousel from "@/components/Carousel";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";




export default function Home() {
 
  return (
    <>

      <Corousel />

      <Menu/>
      <Footer/>

    </>
  );
}
