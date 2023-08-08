'use client';

import { motion } from "framer-motion";
import { TypingText, Button } from '../components'
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Triton = () => (
  <section className={`${styles.xPaddings} relative z-10 py-8`}>
      <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto md:px-[100px] max-[1000px]:block hidden`}>
          <TypingText title='FEATURED' textStyles='text-center' />
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            viewport={{ once: true, amount: 0.25}}
            className="mt-[8px] font-normal text-center text-secondary-white mt-9 ${styles.flexCenter} flex-col">
              <span className="font-extrabold text-white sm:text-[32px] text-[20px]">TRITON </span>
              <p className="text-[20px] text-white">Triton, dedicated to users who want to travel past gaming experiences, uses high level components on the cutting edge of computers. Bold, beautiful, and a new reality for all users.</p>
          </motion.div>
        
          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="flex flex-row max-[880px]:flex-col justify-between max-[880px]:items-center">
            
          
            <div className="flex flex-col justify-start items-start max-[880px]:items-center mt-[38px]">
              <div className="flex flex-row justify-center items-center">
               <img
                src="/core.svg"
                alt="core"
                className="w-[37px] h-[37px] mt-[23px] justify-center items-center" />
                <p className="text-[20px] mt-[23px] ml-[19px] text-white">Earth Core e2-1023</p>
              </div>
              <div className="flex flex-row justify-center items-center">
               <img
                src="/card.svg"
                alt="card"
                className="w-[37px] h-[37px] mt-[23px] justify-start items-center" />
                <p className="text-[20px] mt-[23px] ml-[19px] text-white">KForce MTX 2390 Ti 12GB</p>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start max-[880px]:items-center mt-[38px]">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[20px] mt-[23px] text-white leading-9">$1,599.99 USD</p>
                <p className="text-[15px] mt-[23px] text-white line-through leading-[27px] ml-1">$1,999.99 USD</p>
              </div>
              <div className="flex flex-row justify-center items-center max-[880px]:flex-col">
                <Button />
              </div>
            </div>
              
          </motion.div>
      </motion.div>
  </section>
);

export default Triton;
