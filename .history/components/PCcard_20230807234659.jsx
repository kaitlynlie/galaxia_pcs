'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { fadeIn } from '../utils/motion'
import Button from "./Button";

const PCcard = ({ imgUrl, title, price, xprice}) => (
  <motion.div
    variants={fadeIn('up', 'spring', 0.5, 0.75)}
    className={`flex flex-center flex-col items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer lg:mt-0 mt-12 text-white border-2 p-4 border-gray-500`}
  >
    <img 
      src={imgUrl}
      alt={title}
      className="w-[281px] h-[336px] hover:scale-110 hover:brightness-75 transition-all duration-300 border-1 border-gray-500"
    />
      <h3 className="font-semibold sm:text-[32px] text-[20px] text-white z-0 mt-[36px]">
        {title}
      </h3>
      <div className="flex flex-row items-center">
        <p className="text-white text-[20px]">{price}</p>
        <p className="text-white line-through text-[15px] ml-1">{xprice}</p>
      </div>
      <Button className='mt-[12px]'/>
  </motion.div>
);

export default PCcard;
