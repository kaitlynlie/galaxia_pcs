import React from 'react'
import { TypingText } from '../components'
import styles from '../styles'

const Member = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-20 flex flex-col justify-center items-center mb-40 bg-[url('banner.jpeg')]`}>
      <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-col flex justify-center`}>
          <TypingText title='ONE OF US' textStyles='text-center' />
          <div className="font-normal text-center text-secondary-white mt-10 flex-col flex flex-center items-center justify-center">
              <span className="font-extrabold text-white sm:text-[32px] text-[20px]">Interested in joining the GALAXIA Creator Program?</span>
              <p className="text-[20px] text-white">We would love to work with creators to empower those who are stars in making or are already shining! We focus on making items that we find interesting and would love to work with creators that do the same.</p>  
            <button 
                type="button"
                className="flex w-[127px] h-[44px] mt-[22px] items-center justify-center gap-[12px] bg-[#25618B] text-white text-[16px] rounded-[32px] pointer tracking-[0.08px] shrink-0 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >APPLY NOW
            </button>
        </div>
        </div>
        </section>
  )
}

export default Member