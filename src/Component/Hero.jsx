import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/image.png";
import { motion } from "framer-motion"

function Hero() {
  const container = (delay)=>({
hidden:{x:-100,opacity:0},
visible:{
  x:0,
  opacity:1,
  transition:{duration:0.8,delay:delay}
}
  })
  return (
    <div className="   flex flex-col md:flex-row justify-around ">
      <div className="border border-white w-full flex flex-col justify-center gap-2 p-4 md:w-1/2 md:p-0">
        <motion.h1
        variants = {container(0.2)}
        initial = 'hidden'
        animate = "visible"
        
        
        className="text-6xl font-thin tracking-tight letter-space-2 font">
          Sujal Saxena
        </motion.h1>
        <motion.h1
         variants = {container(0.5)}
        initial = 'hidden'
        animate = "visible"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font ">
          Frontend developer
        </motion.h1>
        <motion.p
         variants = {container(1.2)}
         initial = 'hidden'
         animate = "visible"
        className="font-serif font-extralight p-1">{HERO_CONTENT}</motion.p>
      </div>
      <div className=" border border-white w-2/2 md:w-[43%]">
        <div className="">
          <motion.img 
          initial={{x:100,opacity:0}}
          animate = {{x:0,opacity:1}}
          transition={{duration:1,delay:1.3}}

          
          
          src={profilePic} style={{borderRadius:"80%",opacity:"0.9"}} className=" mt-11 img-fluid p-5 md:p-0 " alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
