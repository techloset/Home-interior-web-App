import React from 'react'
import homeinterior from '../../homeImages/image15.webp'


const Hero = () => {
  return (
    <>

      <div className=" flex w-[100%]  lg:mt-[68px] md:flex-row flex-col items-center relative">
  
        <img className="object-cover object-center rounded  lg:w-[1090px]" alt="hero" src={homeinterior} />
       
        <div className="lg:w-[978px]   right-[5%] max-lg:left-[5%]  max-lg:bottom-0
           flex justify-center absolute lg:right-0 bg-white bg-opacity-80   
            flex-col  items-center text-center">
          <h1 className="sm:pt-[61px] md:text-4xl sm:text-[28px] text-[18px]  sm:leading-[54px] font-normal ">Get personalised home interiors
          </h1>
            <h1 className=' font-semibold text-[#241330]  md:text-5xl text-[32px] sm:leading-[72px]'>  in just 50 days </h1>
          <button className="lg:mt-[44px] lg:mb-[77px] md:mt-[80px]    text-white    bg-[#4B2A63] border-0 md:py-[25px] md:px-[50px] py-[12px] px-[25px]   font-semibold md:text-3xl sm:text-2xl text-[13px]">
            SPEAK WITH A ONLINE CONSULTANT</button>
        </div>
      </div>

   




    </>
  )
}

export default Hero