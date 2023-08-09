import { motion } from "framer-motion";
import styles from '../styles'
import { navVariants, textVariant } from '../utils/motion'
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return(
   <motion.nav
    variants={navVariants}
    initial="show"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 inline-block`}>
      <div className="flex flex-row gap-4">
        <img
          src='./logo.svg'
          alt='logo'
          />
          <Link onClick={openNav} to="/"><motion.h1 variants={textVariant(1.1)} className="flex text-white font-bold text-[24px]">
            <a>GALAXIA</a>
          </motion.h1></Link>
      </div>

      <ul className='flex justify-center items-center text-white max-[880px]:hidden block'>
        <Link onClick={openNav} to='/pc'><li className="mr-12"><a>Gaming PCs</a></li></Link>
        <Link onClick={openNav} to='/community'><li className="mr-12"><a>Community</a></li></Link>
        <Link onClick={openNav} to='/creator'><li><a>Creator Program</a></li></Link>
      </ul>

      <div className="relative ml-1 pointer max-[880px]:block hidden z-10">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="flex justify-end items-end flex-col text-end bg-[#026884ce] p-3 absolute top-[40px] right-[10px] mt-1 rounded-[5px] shadow z-10">
          <div className="none">
            <ul className='flex justify-end items-end flex-col text-white text-end p-1'>
              <Link onClick={openNav} to='/pc'><li><a>Gaming PCs</a></li></Link>
              <Link onClick={openNav} to='/community'><li className="mt-2 pointer"><a>Community</a></li></Link>
              <Link onClick={openNav} to='/creator'><li className="mt-2 pointer"><a>Creator Program</a></li></Link>
            </ul>
          </div>
        </div>
        )}
        </div>

        <div className="flex flex-row gap-4 items-center max-[880px]:hidden block">
        <img
          src='./user.svg'
          alt='user'
          className="pointer"
        />
        <img
          src='./cart.svg'
          alt='cart'
          className="pointer"
        />
      </div>
      </div>

  </motion.nav>
  );
};

export default Navbar;