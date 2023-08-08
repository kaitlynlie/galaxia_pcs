import React from 'react'
import { motion } from 'framer-motion'
import { Button, TypingText, WhyFeatures, TitleText } from '../components'
import styles from '../styles'
import { creators } from '../constants'

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

        <div
          className="flex justify-center items-center max-[1364px]:flex-col flex-row mt-20 px-10 relative">
            <img
                src='/creator.jpg'
                alt='creator'
            />
            <div className='max-[1364px]:ml-0 ml-20 mt-20'>
                <TypingText title="Process" />
                <TitleText title={<>HOW IT WORKS</>} />
                <div className="mt-[31px] flex flex-wrap items-center gap-[24px]">
                {creators.map((feature) => (
                <WhyFeatures key={feature.subtitle} {...feature} />
                ))}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Program