'use client';

import { motion } from "framer-motion";
import { TypingText, WhyFeatures, TitleText } from '../components'
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { whyUs } from '../constants'

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col`}>
        {/* <motion.div
          variants={planetVariants('left')}
          className={`flex-1 flex items-center justify-between max-[1024px]:justify-center`}
        >
          <img  
            src="/planet.png"
            alt="planet"
            className="w-[421px] sm:h-[452px] h-[350px]"
            />
        </motion.div> */}
        <img src='./whyus.png'
              alt='why us'
        />

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col">
            <TypingText title="Why Us?" />
            <TitleText title={<>Why GALAXIA?</>} />
            <div className="mt-[31px] flex flex-wrap justify-between gap-[24px]">
            {whyUs.map((feature) => (
            <WhyFeatures key={feature.subtitle} {...feature} />
              ))}
            </div>
          </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
