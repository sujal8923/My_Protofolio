import React from "react";
import { motion } from "framer-motion";

const MovingText = () => {
  const text = "🚀 Software Developer";
  const repeatedText = Array(10).fill(text).join("   •   ");

  return (
    <div className="w-full h-[50px] overflow-hidden  flex items-center relative mt-[60px]">
      <motion.div
        className="whitespace-nowrap absolute text-white text-xl font-semibold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Repeat twice for seamless loop */}
        <span className="mx-10">{repeatedText}</span>
        <span className="mx-10">{repeatedText}</span>
      </motion.div>
    </div>
  );
};

export default MovingText;
