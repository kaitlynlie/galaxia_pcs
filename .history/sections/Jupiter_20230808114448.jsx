'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, PCcard, TitleText } from '../components'
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { jupiterSet } from '../constants'

const Jupiter = () => {
  return (
    <section className={`${styles.paddings}`}>
      <motion.div 
        variants={staggerContainer}
        initial='show'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <TypingText title='The Jupiter Set' textStyles='text-center' />
          <TitleText title={"Shop Jupiter's Collection"} textStyles='text-center'/>
          <div className="mt-[50px] flex lg:flex-row flex-col justify-center items-center">
            {jupiterSet.map((feature) => (
                <PCcard key={feature.title} {...feature}/>
              ))}
          </div>
      </motion.div>
    </section>

  )};

export default Jupiter;
