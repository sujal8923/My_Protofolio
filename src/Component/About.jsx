import React from 'react'
import AboutPic from "../assets/about.jpg";
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div className=''>
        <div className="main    mt-7 p-10">
<h1 className='text-center font-thin text-5xl font-serif'>About <span className='text-neutral-500'>Me</span></h1>
<div className='flex flex-wrap  justify-items-evenly  mt-28'>
<motion.div 
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:-100}}
transition={{duration:0.5}}
className='w-full  lg:w-1/2   '>
<img src='https://badiyamarketing.com/wp-content/uploads/2024/03/software-1024x683.jpg' className='w-2/3 m-auto rounded-lg shadow-lg' alt="" />
</motion.div>
<motion.div 
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:100}}
transition={{duration:0.5}}

className='w-full lg:w-1/2 mt-14 lg:mt-0'>
<p className='p-1 text-start font-serif mt-14'>{ABOUT_TEXT}</p>
</motion.div>

</div>
        </div>
    </div>
  )
}

export default About