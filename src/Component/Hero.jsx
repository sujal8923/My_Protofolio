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
    <div className="flex flex-wrap  ">
      <div className="w-full  lg:ms-14 justify-center sm:p-5 lg:w-1/2  lg:p-7 mt-5 flex flex-col gap-4 main">
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
      <div className="w-full lg:w-1/3 lg:p-8 md:p-5">
        <div className="flex justify-center">
          <motion.img 
          initial={{x:100,opacity:0}}
          animate = {{x:0,opacity:1}}
          transition={{duration:1,delay:1.3}}

          
          
          src={profilePic} style={{borderRadius:"80%",width:"40vw",opacity:"0.9"}} className=" mt-5 pb-3 lg:pb-0 img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
