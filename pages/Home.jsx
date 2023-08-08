import { Footer, Navbar } from '../components';
import { Triton, Neptune, Jupiter, Hero, WhyUs } from '../sections';
import React from 'react'

const Home = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Hero />
    <div className='relative'>
      <Triton />
      {/* <div className='gradient-03 z-0' /> */}
      <Neptune />
    </div>
    <div className='relative'>
      <Jupiter />
    </div>
    <div className='relative'>
      <WhyUs />
      {/* <div className='gradient-04 z-0' /> */}
      <Footer />
    </div>
  </div>
);

export default Home;