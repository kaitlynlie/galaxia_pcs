import React from 'react'
import { TypingText } from '../components'
import styles from '../styles'

const Program = () => {
  return (
    <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-row max-[1234px]:flex-col flex justify-between`}>
      <TypingText title='EARN 5% COMMISSION' textStyles='text-start max-[1234px]:text-center' />
      <div className="font-normal text-start max-[1234px]:text-center text-secondary-white mt-10 flex-col flex flex-center">
          <span className="font-extrabold text-white sm:text-[32px] text-[20px]">GALAXIA Creator Program</span>
          <p className="text-[20px] text-white">Here at GALAXIA, our goal is to create the best PCs in the galaxy, and each one of us has a deep passion and takes pride in building and designing PCs. We are working to build top performance PCs that you will love, and we will enjoy the process of it.</p>
      </div>
    </div>
  )
}

export default Program