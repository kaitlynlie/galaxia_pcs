'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { slideIn, staggerContainer, fadeIn } from '../utils/motion'
import { TypingText, Button } from '../components'

const Hero = () => (
  <section className={`${styles.topPaddings} ${styles.xPaddings} flex flex-row items-center justify-center mt-10`}>
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} flex-col relative w-full flex justify-between items-center z-0`}
    >
      <div className="absolute z-0"/>
      <img
        src="/pc1.png"
        alt="pc"
        className="object z-10 sm:w-[357px] sm:h-[420px] w-[281px] h-[336px] relative mt-24 z-10"
      />
    </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25}}
        className={`${styles.innerWidth} ${styles.xPaddings} md:px-[100px] max-[1000px]:hidden block mb-0 items-center z-10`}>
          <TypingText title='FEATURED' textStyles='text-start' />
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            viewport={{ once: true, amount: 0.25}}
            className="mt-[8px] font-normal text-start text-secondary-white mt-9 flex-col flex flex-center">
              <span className="font-extrabold text-white sm:text-[32px] text-[20px]">TRITON </span>
              <p className="text-[20px] text-white">Triton, dedicated to users who want to travel past gaming experiences, uses high level components on the cutting edge of computers. Bold, beautiful, and a new reality for all users.</p>
          </motion.div>
        
          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="flex flex-col justify-between">
            <div className="flex flex-col justify-start items-start max-[880px]:flex-row mt-[38px]">
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

export default Hero;
