'use client';

import { motion } from "framer-motion";
import { TypingText, WhyImages, TitleText } from '../components'
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { whyUs } from '../constants'

const WhyUs = () => (
  <section className={`${styles.paddings} relative z-10 flex flex-col justify-center items-center mt-28 `}>
    <img src='./whyus.png'
              alt='why us'
              className="h-[50%] w-[50%] mb-20"
        />
    <div className={`${styles.innerWidth} flex flex-col justify-between items-center bg-[url('/pcbg.png')]`}>

        <div
          className="flex justify-between gap-20 max-[1074px]:flex-col flex-row">
            <div className="flex-1 flex-col max-w-[800px]">
              <TypingText title="Why Us?" />
              <TitleText title={<>Why choose GALAXIA??</>} />
              <p className="text-white mt-10">Here at GALAXIA, our main goal is to provide the best service we can while having fun and making computers with high performance. We value the highest quality components, as well has hard work, kindness, and respect.</p>
            </div>

            <div className="flex-1 flex-col gap-10">
              {whyUs.map((feature) => (
              <WhyImages key={feature.subtitle} {...feature} />
                ))}
            </div>
          </div>
    </div>
  </section>
);

export default WhyUs;
