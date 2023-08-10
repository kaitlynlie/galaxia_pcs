'use client';

import { motion } from "framer-motion";
import { TypingText, WhyFeatures, TitleText } from '../components'
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { whyUs } from '../constants'

const GetStarted = () => (
  // <section className={`${styles.paddings} relative z-10 flex justify-center items-center`}>
  //   <div className={`${styles.innerWidth} mx-auto flex flex-col justify-between items-center`}>
  //       <img src='./whyus.png'
  //             alt='why us'
  //             className="h-[600px] w-[600px] mb-20"
  //       />

  //       <div
  //         className="flex justify-between">
  //           <div className="flex flex-col">
  //             <TypingText title="Why Us?" />
  //             <TitleText title={<>Why choose GALAXIA??</>} />
  //             <p className="text-white mt-10">Here at GALAXIA, our main goal is to provide the best service we can while having fun and making computers with high performance. We value the highest quality components, as well has hard work, kindness, and respect.</p>
  //           </div>

  //           <div className="flex flex-col gap-10">
  //             {whyUs.map((feature) => (
  //             <WhyFeatures key={feature.subtitle} {...feature} />
  //               ))}
  //           </div>
  //         </div>
  //   </div>
  // </section>

<section className={`${styles.xPaddings} relative z-10 py-8 flex flex-col justify-center items-center mt-10`}>
<div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-col flex justify-between`}>

        <img src='./whyus.png'
              alt='why us'
              className="h-[600px] w-[600px] mb-20"
        />



  <div className='mr-24 max-[1234px]:mr-0'>
    <TypingText title='WHO WE ARE' textStyles='text-start max-[1234px]:text-center' />
    <div className="font-normal text-start max-[1234px]:text-center text-secondary-white mt-10 flex-col flex flex-center">
        <span className="font-extrabold text-white sm:text-[32px] text-[20px]">THE TEAM</span>
        <p className="text-[20px] text-white">Here at GALAXIA, our goal is to create the best PCs in the galaxy, and each one of us has a deep passion and takes pride in building and designing PCs. We are working to build top performance PCs that you will love, and we will enjoy the process of it.</p>
    </div>
  </div>    
        
    <img
      src="/team.png"
      alt="team"
      className="z-10 relative w-[90%] h-[90%] max-[1234px]:mt-20 max-[1234px]:hidden"
    />
</div>
</section>
);

export default GetStarted;
