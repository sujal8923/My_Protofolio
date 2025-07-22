import React, { useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/img.jpg";
import { motion } from "framer-motion";
import About from "./About";
import MovingText from "./MovingText";
import { div } from "framer-motion/client";

function Hero() {
  
  const fadeIn = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay },
    },
  });

  return (
    <div>
    <section className="mt-20 flex gap-x-36   justify-content-around  flex-col lg:flex-row items-center justify-between px-6 md:px-16 max-w-[90vw] mx-auto overflow-x-hidden" >
      
      {/* Left: Text Content */}
      <div className="w-full lg:w-[65vw]   flex  flex-col gap-4 text-left ">
        <motion.h1
          variants={fadeIn(0.0)}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-light tracking-wide"
        >
          Sujal Saxena
        </motion.h1>

        <motion.h2
          variants={fadeIn(0.5)}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
        >
          Software Developer
        </motion.h2>

        <motion.p
          variants={fadeIn(0.9)}
          initial="hidden"
          animate="visible"
          className="text-lg font-serif font-extralight leading-relaxed"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>

      {/* Right: Profile Image */}
    <motion.div 
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.5 }}
  className='w-full lg:w-[60vw] flex justify-center p-5  '
>
  <img 
    src={profilePic} 
    alt="Profile"
    className='w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-neutral-300'
  />
</motion.div>
    </section>


    </div>
  );
}

export default Hero;
