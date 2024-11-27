import { motion } from 'framer-motion'
import React from 'react'


function Contact() {
   
  return (
    <div className='mt-10 text-center flex flex-col gap-6 ' style={{overflowX:"hidden"}}>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className='text-5xl font-thin '>Get in Touch</motion.h1>
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}} 
        className='font-bold'>Aligarh UP-(202001)</motion.p>
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}  
        >9870973383</motion.p>
        <motion.p>Sujalroy1822@gmail.com</motion.p>
    </div>
  )
}

export default Contact
