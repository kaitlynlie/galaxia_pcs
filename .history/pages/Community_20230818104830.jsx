import { Footer, Navbar } from '../components';
import { People, Video } from '../sections';
import styles from '../styles';
import { TypingText } from '../components';
import React from 'react'

const Community = () => (
  <div className='bg-primary-black overflow-hidden'>
    <div className='relative'>
    <div className={`${styles.xPaddings} font-normal text-center text-secondary-white mt-4 flex-col flex flex-center`}>
      <span className="font-extrabold text-white sm:text-[32px] text-[20px]">COMMUNITY</span>
    </div>
    {/* <span className={`${styles.xPaddings} font-extrabold text-white text-[40px]`}>COMMUNITY</span> */}
      <People />
      {/* <div className='gradient-03 z-0' /> */}
    </div>
    <div className='relative'>
      <img
        src='./testimonials.png'
        alt='testimonials'
        className="z-0 absolute w-screen object-cover object-center opacity-50"
      />
      <Video />
      <div className={`w-full ${styles.xPaddings} md:px-[100px] mt-10 items-center flex-col flex justify-between relative mb-20`}>
          <TypingText title='WHO WE ARE' textStyles='text-center' />
          <div className={`${styles.xPaddings} font-normal text-center text-secondary-white mt-4 flex-col flex flex-center`}>
              <span className="font-extrabold text-white sm:text-[32px] text-[20px]">THE PROCESS</span>
              <p className="text-[20px] text-white">Here at GALAXIA, our goal is to create the best PCs in the galaxy, and each one of us has a deep passion and takes pride in building and designing PCs. We are working to build top performance PCs that you will love, and we will enjoy the process of it.</p>
          </div>
        </div>   
      {/* <div className='gradient-04 z-0' /> */}
      <Footer />
    </div>
  </div>
);

export default Community;