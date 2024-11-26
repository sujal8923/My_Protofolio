import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (


    <div className="mt-28  ">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="font-thin text-5xl text-center ">Experience</motion.h1>
      {EXPERIENCES.map((Experience, index) => {
        return ( <div 
        className="mt-10"> 
          <div key={index} className="flex flex-wrap justify-center">
            <motion.div 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
            
            className="w-full lg:w-1/4 ">
              <p className="text-center mt-8 lg:text-start">{Experience.year}</p>
            </motion.div>
            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}} 
            className="w-full lg:w-1/2  p-4">
              <h6>
                {Experience.role}{" "}
                <span className="ms-2 font-bold">- {Experience.company}</span>
              </h6>
              <p className="mt-3">{Experience.description}</p>
              <div className="flex flex-wrap gap-4">
                {Experience.technologies.map((ele, index) => {
                  return (
                    <div key={index} className="mt-4">
                      <p className="text-purple-800 font-extralight font-bold">{ele}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
