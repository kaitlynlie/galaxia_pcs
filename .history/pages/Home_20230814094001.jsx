import { Footer, Navbar } from '../components';
import { Triton, Neptune, Jupiter, Hero, WhyUs, Member, Testimonials, Tiles } from '../sections';
import React from 'react'
import PickPC from '../sections/PickPC';

const Home = () => (
  <div className='bg-primary-black overflow-hidden'>
        {/* <img
          src='./stars.png'
          alt='stars'
          className="z-0 absolute w-screen h-screen object-cover object-center opacity-50"
    /> */}
    <Hero />
    <div className='relative'>
      <Triton />
      
      <Tiles />
      {/* <div className='gradient-03 z-0' /> */}
      <PickPC />
      <Member />
      {/* <Neptune /> */}
    </div>
    <div className='relative'>
      {/* <Jupiter /> */}
    </div>
    <div className='relative'>
      <WhyUs />
      <img
            src='./testimonials.png'
            alt='testimonials'
            className="z-0 absolute w-screen h-screen object-cover object-center opacity-50"
      />
      <Testimonials />
      {/* <div className='gradient-04 z-0' /> */}
      <Footer />
    </div>
  </div>
);

export default Home;