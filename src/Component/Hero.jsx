import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/image.png";
import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

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
    <div className=" flex justify-center  items-center flex-wrap border border-red">
      <div className="  w-full lg:w-1/2 flex flex-col justify-center gap-2 p-5 lg:p-0">
        <motion.h1
        variants = {container(0.2)}
        initial = 'hidden'
        animate = "visible"
        
        
        className="text-6xl font-thin tracking-tight letter-space-2 font ">
          Sujal Saxena
        </motion.h1>
        <motion.h1
         variants = {container(0.5)}
        initial = 'hidden'
        animate = "visible"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font  ">
          Frontend developer
        </motion.h1>
        <motion.p
         variants = {container(1.2)}
         initial = 'hidden'
         animate = "visible"
        className="font-serif font-extralight w-full lg:w-[45vw] text-[18px]  ">{HERO_CONTENT}</motion.p>
        <div className="flex gap-8 text-2xl">
        <a href="https://www.linkedin.com/in/sujal-saxena-384701288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='text-white inline-flex'>
          <FaLinkedinIn/>

          </a>
          <a href="https://github.com/sujal8923" className='text-white inline-flex'>
          <FaGithub/>

          </a>
        </div>
        
      </div>
      <div className="w-1/1 lg:w-1/2  lg:p-8 md:p-10">
        <div className="flex justify-center p-5 w-[530px] mx-auto md:w-[800px] lg:w-[50vw]">
          <motion.img 
          initial={{x:100,opacity:0}}
          animate = {{x:0,opacity:1}}
          transition={{duration:1,delay:1.3}}

          
          
          src={profilePic} style={{borderRadius:"80%",opacity:"0.9"}} className="  " alt="" />
         
        </div>
      </div>
    </div>
  );
}

export default Hero;
