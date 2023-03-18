import React from 'react'
import homeinterior from '../../homeImages/image15.webp'


const Hero = () => {
  return (
    <>

      <div className=" flex w-[100%]  py-11 md:flex-row flex-col items-center relative">
  
        <img className="object-cover object-center rounded lg:w-[60%] lg:h-[50%]" alt="hero" src={homeinterior} />
       
        <div className="lg:w-[45%] lg:h-[55%] mx-auto max-md:mt-[22%] max-sm:mt-[20%] max-lg:mt-[35%]  lg:gap-[25px]  left-[5%] w-[90%]  h-[52%] flex justify-center absolute lg:left-[52%] bg-white bg-opacity-80    flex-col  items-center text-center">
          <h1 className="text-sm sm:text-xl lg:mb-4 lg:pl-[3%] font-normal ">Get personalised home interiors
            <p className='text-center font-semibold text-[#241330] text-lg sm:text-3xl'>  in just 50 days </p>
          </h1>
          <button className="inline-flex text-white max-sm:mt-[10px] max-lg:mt-[90px] lg:ml-[8%]  bg-[#4B2A63] border-0 sm:py-3 sm:px-6 p-2 focus:outline hover:bg-purple-900 font-semibold  md:text-lg lg:text-xl max-sm:text-xs">
            SPEAK WITH A ONLINE CONSULTANT</button>
        </div>
      </div>

   




    </>
  )
}

export default Hero