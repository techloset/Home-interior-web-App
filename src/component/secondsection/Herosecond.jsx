import React from 'react'
import StepBG from '../../homeImages/image16.webp'
import landcalendear from '../../homeImages/group.svg'
import landhome from '../../homeImages/home.svg'
import landDesign from '../../homeImages/teenyicons.svg'

const Hero = () => {
  return (
    <>
    <h1 className='text-center font-medium text-3xl animate__rollIn animate__animated'>Why LAND Interiors</h1>
      <div className='flex justify-evenly  my-20  max-sm:flex-col max-sm:gap-4 max-sm:justify-center items-center'>
        <div  className='flex  flex-col items-center justify-center '>
          <img src={landcalendear} alt="" />
          <p className='py-8 text-center sm:max-w-[126px]'>50 days or we  pay you rent</p>
        </div>
        <div className='flex  flex-col items-center justify-center '>
          <img src={landhome} alt="" />
          <p className='py-8 text-center sm:max-w-[126px]'> 1500+happy  customers</p>
        </div>
        <div className='flex  flex-col items-center justify-center'> 
          <img src={landDesign} alt="" />
          <p className='py-8 text-center sm:max-w-[126px]'>300+ design  experties</p>
        </div>
      </div>

      <div className=" flex w-[100%]  lg:py-10 md:flex-row flex-col items-center  ">
      
        <div className="lg:w-[44%] lg:h-[530px]  md:h-[685px] md:w-[50%] w-[90%]   sm:py-8 py-6    flex flex-col justify-center absolute lg:right-[56%] lg:gap-10 sm:gap-10 bg-white bg-opacity-80  md:items-start md:text-left items-center text-center">
          <div className='max-lg:ml-[10%]   lg:self-center md:self-start'>

          <p className="lg:text-[32px] md:text-[25px]  md:text-lg  font-medium text-gray-900 text-[1rem]">Make your dream interior in</p>
            <h6 className='font-medium lg:text-center md:text-[25px] lg:py-4 md:text-lg lg:text-[3rem] text-[1rem] text-[#241330]'>  3 easy steps </h6>
          </div>
          <div className='flex flex-col lg:justify-center lg:items-center max-lg:ml-[10%] lg:text-center w-[80%] lg:pl-[20%] md:gap-5  lg:gap-10'>
            <div >
              <h1 className='xl:text-3xl text-[#4B2A63] font-semibold text-[12px]'>Explore</h1>
              <p className='max-sm:text-[10px]'>Explore more than just modular design ideas with our experts.</p>
            </div>
            <div>
              <h1 className='xl:text-3xl text-[#4B2A63] font-semibold text-[12px]'>Design</h1>
              <p className='max-sm:text-[10px]'>Complete the designs with painting, flooring and other decor solutions</p>
            </div>
            <div>
              <h1 className='xl:text-3xl text-[#4B2A63] font-semibold text-[12px]'>Move-in</h1>
              <p className='max-sm:text-[10px]'>Move in with ease, with our hassle-free civil work and installation services.</p>
            </div>
          </div>
        </div>
        <img className="object-cover object-center rounded w-[100%] lg:w-[70%] h-[60%]  lg:ml-[30%]" alt="hero" src={StepBG} />

      </div>

    </>
  )
}

export default Hero