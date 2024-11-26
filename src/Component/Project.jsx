import React from 'react';
import { PROJECTS } from '../constants';
import hero from '../assets/projects/hero.png';
import hero1 from '../assets/projects/hero2.png';

// import Ecom from '../assets/projects/project2.jpeg';
import YT from '../assets/projects/project3.jpeg';
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';

function Project() {
  return (
    <div className='mt-20'>
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
    
      
      className='text-center font-thin text-5xl pb-4'>Projects</motion.h1>
      <div className='flex flex-wrap justify-center align-items-center'>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}  
        className='w-full lg:w-1/2  flex flex-col gap-40'>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}  
          
          className='img-fluid mx-auto'>
            <img src={hero} className='img-fluid w-96 rounded-md' alt='' />
          </motion.div>
          <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}}
          
          className='img-fluid mx-auto'>
            <img src={hero1} className='w-96 rounded-md' alt='' />
          </motion.div>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} 
          className='img-fluid mx-auto'>
            <img src='https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/02/youtube-generic-hero.png' className='w-96 rounded-md' alt='' />
          </motion.div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className='w-full lg:w-1/2 '>
          {PROJECTS.map((project, index) => {
            return (
              <motion.div  
              whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}}
              key={index} className='p-12'>
                <h2 className='font-bold'>{project.title}</h2>
                <p className='mt-3'>{project.description}</p>
                <div className='flex flex-wrap mt-4'>
                  {project.technologies.map((technology, index) => (
                    <div key={index} className='mr-2 mb-2'>
                      <button className='text-purple-700 font-bold py-2 px-4 rounded'>
                        {technology}
                      </button>
                      
                    </div>
                  ))}
                </div>
                <button key={index} className='bg-black shadow-2xl text-white p-2 rounded-lg '><a href={project.link} className= ''  target='_blank'>Preview Site</a></button>
                
                 <a href="" className=''></a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
