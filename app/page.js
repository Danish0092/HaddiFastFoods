"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Corousel from "@/components/Carousel";
import Menu from "@/components/Menu";




export default function Home() {
 
  return (
    <>

      <Corousel />

      <Menu/>

      <div className="h-screen"></div>
    </>
  );
}
