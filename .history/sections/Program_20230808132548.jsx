import React from 'react'
import { Button, TypingText } from '../components'
import styles from '../styles'

const Program = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-8 flex flex-col justify-center items-center mt-10`}>
      <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-col flex justify-center`}>
          <TypingText title='EARN 5% COMMISSION' textStyles='text-center' />
          <div className="font-normal text-center text-secondary-white mt-10 flex-col flex flex-center items-center justify-center">
              <span className="font-extrabold text-white sm:text-[32px] text-[20px]">GALAXIA Creator Program</span>
              <p className="text-[20px] text-white">We would love to work with creators to empower those who are stars in making or are already shining! We focus on making items that we find interesting and would love to work with creators that do the same.</p>  
          <button 
            type="button"
            className="flex w-[127px] h-[44px] mt-[22px] items-center justify-center gap-[12px] bg-[#25618B] text-white text-[16px] rounded-[32px] pointer tracking-[0.08px] shrink-0 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >APPLY NOW
        </button>
      </div>
        </div>

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
    </section>
  )
}

export default Program