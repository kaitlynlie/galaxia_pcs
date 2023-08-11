import React from 'react'
import styles from '../styles'
import { TypingText } from '../components'

const Testimonials = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-20 flex flex-col justify-center items-center`}>
    <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-col flex justify-center`}>
        <TypingText title='REVIEWS' textStyles='text-center' />
        <div className="font-normal text-center text-secondary-white flex-col flex flex-center items-center justify-center">
            <span className="font-extrabold text-white sm:text-[32px] text-[20px]">Interested in joining the GALAXIA Creator Program?</span>
            <p className="text-[20px] text-white mt-6">We would love to work with creators to empower those who are stars in making or are already shining! We focus on making items that we find interesting and would love to work with creators that do the same.</p>  
      </div>
    </div>
  </section>
  )
}

export default Testimonials