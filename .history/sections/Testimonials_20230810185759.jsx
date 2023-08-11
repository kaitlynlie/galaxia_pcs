import React from 'react'
import styles from '../styles'
import { TypingText } from '../components'

const Testimonials = () => {
  return (
    <section className={`${styles.xPaddings} relative z-10 py-20 flex flex-col justify-center items-center`}>
    <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-col flex justify-center`}>
        <TypingText title='REVIEWS' textStyles='text-center' />
        <div className="font-normal text-center text-secondary-white flex-col flex flex-center items-center justify-center">
            <span className="font-extrabold text-white sm:text-[32px] text-[20px]">Testimonials by our Customers</span>
            <p className="text-[20px] text-white mt-6">Our customers have experienced our service and results, and they are eager to share their positive experience with you.</p>  
      </div>

      <div className='justify-between flex-row flex gap-10 mt-10'>
        <div className='bg-white shadow-lg w-[456px] h-[372px] shadow-[#<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_119_203)">
<path d="M34.746 49.5247V42.0003C37.1244 41.8691 38.9254 41.4341 40.1469 40.6963C41.3694 39.9594 42.2282 38.7622 42.7241 37.1066C43.2191 35.4509 43.4675 33.0819 43.4675 29.9994H34.746V12.0491H52.6344V29.1144C52.6344 36.1634 51.1232 41.3281 48.1007 44.6066C45.0772 47.885 40.626 49.5247 34.746 49.5247ZM7.74036 49.5247V42.0003C10.1188 41.8691 11.9188 41.4509 13.1413 40.7459C14.3638 40.0409 15.2479 38.8438 15.7925 37.1553C16.3372 35.4669 16.61 33.0819 16.61 29.9994H7.74036V12.0491H25.7272V29.1144C25.7272 36.1634 24.2244 41.3281 21.2188 44.6066C18.2122 47.885 13.7197 49.5247 7.74036 49.5247Z" fill="#25618B"/>
</g>
<defs>
<clipPath id="clip0_119_203">
<rect width="60" height="60" fill="white" transform="translate(0.240356 0.804688)"/>
</clipPath>
</defs>
</svg>
]'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>"Been using it for a few months now. PC looks great and runs every game I play very nicely. Customer service was top notch, had great communication all the way through."</p>
            <div className='flex-row flex items-end'>
                <img src='./people-01.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                <div className='flex flex-col'>
                    <p className='mt-10 font-bold'>Valued Customer</p>
                    <p>Nereid</p>
                </div>
                <img src='quote.svg' className='w-[60px] h-[60px] ml-28' />
            </div>
        </div>

        <div className='bg-white shadow-lg w-[456px] h-[372px] shadow-white'>
            <p className='mt-10 text-black font-medium text-2xl mx-10'>"Works great, fast, and quiet. Shipped super secure. No problems with it for streaming any game. Very glad with our selection and happy with purchase."</p>
                <div className='flex-row flex'>
                    <img src='./people-02.png' className='w-[50px] h-[50px] mx-10 mt-10'/>
                    <div className='flex flex-col'>
                        <p className='mt-10 font-bold'>Valued Customer</p>
                        <p>Triton</p>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials