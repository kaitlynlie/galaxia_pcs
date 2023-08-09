import React from 'react'

import { motion } from "framer-motion";
import { TypingText, Button } from '../components'
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const People = () => (
    <section className={`${styles.xPaddings} relative z-10 py-8 flex flex-col justify-center items-center mt-10`}>
      <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-row max-[1234px]:flex-col flex justify-between`}>

        {/* <div className='mr-24 max-[1234px]:mr-0'> */}
        <div>
          <TypingText title='WHO WE ARE' textStyles='text-start max-[1234px]:text-center' />
          <div className="font-normal text-start max-[1234px]:text-center text-secondary-white mt-10 flex-col flex flex-center">
              <span className="font-extrabold text-white sm:text-[32px] text-[20px]">THE TEAM</span>
              <p className="text-[20px] text-white">Here at GALAXIA, our goal is to create the best PCs in the galaxy, and each one of us has a deep passion and takes pride in building and designing PCs. We are working to build top performance PCs that you will love, and we will enjoy the process of it.</p>
          </div>
        </div>    
              
          <img
            src="/team.png"
            alt="team"
            className="z-10 relative w-[90%] h-[90%] max-[1234px]:mt-20 max-[1234px]:hidden"
          />
    </div>

    <div 
        className={`${styles.innerWidth} ${styles.xPaddings} md:px-[100px] mb-0 items-center flex-row max-[1234px]:flex-col flex flex-start justify-between mt-20`}>     
          <img
            src="/process.png"
            alt="process"
            className="z-10 relative w-[90%] h-[90%]"
          />

        <div className='ml-24 max-[1234px]:ml-0 max-[1234px]:mt-20'>
          <TypingText title='WHO WE ARE' textStyles='text-start max-[1234px]:text-center' />
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            viewport={{ once: true, amount: 0.25}}
            className="font-normal max-[1234px]:text-center text-start text-secondary-white mt-10 flex-col flex flex-center">
              <span className="font-extrabold text-white sm:text-[32px] text-[20px]">THE TEAM</span>
              <p className="text-[20px] text-white">Here at GALAXIA, our goal is to create the best PCs in the galaxy, and each one of us has a deep passion and takes pride in building and designing PCs. We are working to build top performance PCs that you will love, and we will enjoy the process of it.</p>
          </motion.div>
        </div>  
    </div>
</section>
);

export default People