import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lottie/lottie.json';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


function Hero() {
  return (
    <section className='bg-white_main flex justify-between'>

      <div className='flex items-center'>
        <h3 className='text-2xl font-display ml-2 sm:text-3xl md:text-4xl'>Start The Test</h3>
      </div>

      <div className='w-80 sm:w-96 md:w-[25rem]'>
        <Lottie options={defaultOptions} />
      </div>

    </section>

  )
}

export default Hero