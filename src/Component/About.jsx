import React from 'react'
import AboutPic from "../assets/Mes.jpg";
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div className='' style={{overflowX:"hidden"}} >
        <div className="main    mt-7 p-3 md:p-10 " id='about'>
<h1 className='text-center font-thin text-5xl font-serif'>About <span className='text-neutral-500'>Me</span></h1>
<div className='flex flex-wrap  justify-items-evenly  items-center  mt-28 '>
<motion.div 
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:-100}}
transition={{duration:0.5}}
className='w-full   lg:w-1/2     '>
<img src={AboutPic} className='w-1/2 m-auto rounded-lg shadow-xl  object-contain 
             bg-neutral-900 p-2 border border-neutral-700' 
 alt="" />
</motion.div>
<motion.div 
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:100}}
transition={{duration:0.5}}

className='w-full  lg:w-1/2 mt-14 lg:mt-0  '>
<p className=' text-start font-serif text-[18px] ' style={{lineHeight:"35px"}}>{ABOUT_TEXT}</p>
</motion.div>

</div>
        </div>
    </div>
  )
}

export default About