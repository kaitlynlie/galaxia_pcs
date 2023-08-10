'use client';

import { motion } from "framer-motion";
import { TypingText, WhyFeatures, TitleText } from '../components'
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { whyUs } from '../constants'

const GetStarted = () => (
  <section className={`relative z-10 flex justify-center items-center`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col justify-between items-center`}>
        <img src='./whyus.png'
              alt='why us'
              className="h-[600px] w-[600px] mb-20"
        />

        <div
          className="flex justify-around gap-[20px]">
            <div className="flex flex-col">
              <TypingText title="Why Us?" />
              <TitleText title={<>Why choose GALAXIA??</>} />
              <p className="text-white mt-10">Here at GALAXIA, our main goal is to provide the best service we can while having fun and making computers with high performance. We value the highest quality components, as well has hard work, kindness, and respect.</p>
            </div>

            <div className="flex flex-col gap-10">
              {whyUs.map((feature) => (
              <WhyFeatures key={feature.subtitle} {...feature} />
                ))}
            </div>
          </div>

    </div>
  </section>
);

export default GetStarted;
