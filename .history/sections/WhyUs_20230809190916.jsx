'use client';

import { motion } from "framer-motion";
import { TypingText, WhyFeatures, TitleText } from '../components'
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { whyUs } from '../constants'

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10 flex justify-center items-center`}>
    <motion.div 
      className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center`}>
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
              className="h-[600px] w-[600px]"
        />

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-between flex-row">
            <div className="flex flex-col">
              <TypingText title="Why Us?" />
              <TitleText title={<>Why choose GALAXIA??</>} />
              <p className="text-white mt-10">Here at GALAXIA, our main goal is to provide the best service we can while having fun and making computers with high performance. We value the highest quality components, as well has hard work, kindness, and respect.</p>
            </div>

            <div className="flex flex-col gap-[24px]">
            {whyUs.map((feature) => (
            <WhyFeatures key={feature.subtitle} {...feature} />
              ))}
            </div>
          </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
