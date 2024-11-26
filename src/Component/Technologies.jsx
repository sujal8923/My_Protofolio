import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
<FaReact />;

function Technologies() {
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div>
      <div className="main pb-4 mt-28">
        <motion.h1
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        
        className="text-center text-4xl font-thin">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className=" mt-5 flex flex-wrap align-items-center justify-center gap-4 ">
          <motion.div
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-800 text-8xl p-2 p-2"
          >
            <FaReact className="text-cyan-400 shadow-lg" />
          </motion.div>
          <motion.div
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-800 text-8xl p-2"
          >
            <AiOutlineHtml5 />
          </motion.div>
          <motion.div
            variants={iconVariant(6)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-800 text-8xl p-2"
          >
            {/* <SiMongodb className="text-green-500 shadow-lg" /> */}
            <IoLogoFirebase className="text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariant(4)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-800 text-8xl p-2"
          >
            <SiRedux className="text-red-700 shadow-lg" />
          </motion.div>
          <motion.div
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-800 text-8xl p-2"
          >
            <SiTailwindcss className="text-blue-500 shadow-lg" />
          </motion.div>
          <motion.div
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-lg border-4 border-neutral-800 text-8xl p-2"
          >
            <TbBrandJavascript className="text-yellow-300 shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
