'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, PCcard, TitleText } from '../components'
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { neptuneSet } from '../constants'

const Neptune = () => {

  return (
  <section className={`${styles.paddings}`} id='pc'>
    <motion.div 
      variants={staggerContainer}
      initial='show'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-start`}>
        <TypingText title='The Neptune Set' textStyles='text-center' />
        <TitleText title={"Shop Neptune's Collection"} textStyles='lg:text-start text-center'/>
        <div className="mt-[50px] flex lg:flex-row flex-col justify-center items-center">
          {neptuneSet.map((feature) => (
              <PCcard key={feature.title} {...feature}/>
            ))}
        </div>
    </motion.div>
  </section>
)};

export default Neptune;
