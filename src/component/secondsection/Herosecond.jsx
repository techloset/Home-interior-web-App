import React, { useEffect, useState } from 'react'
import StepBG from '../../homeImages/image16.webp'
import landcalendear from '../../homeImages/group.svg'
import landhome from '../../homeImages/home.svg'
import landDesign from '../../homeImages/teenyicons.svg'
import Maxbg from '../../homeImages/maxbg.webp'

const Hero = () => {
  const [image,setImage] =useState(window.innerWidth)
  // useEffect(()=>{
    // window.addEventListener('resize', function(event) {
    //   setImage(window.innerWidth)
    //   console.log('Window was resized');
    // });
  // },[])
 
  

  return (
    <>
      <h1 className='text-center lg:mt-[141px] max-lg:mt-[87px] font-medium text-3xl animate__rollIn animate__animated'>Why LAND Interiors</h1>
      <div className='flex justify-evenly  mt-20  max-sm:flex-col max-sm:gap-4 max-sm:justify-center items-center'>
        <div className='flex  flex-col items-center justify-center '>
          <img src={landcalendear} alt="" />
          <p className='pt-[25px] text-center sm:max-w-[126px]'>50 days or we  pay you rent</p>
        </div>
        <div className='flex  flex-col items-center justify-center '>
          <img src={landhome} alt="" />
          <p className='pt-[25px] text-center sm:max-w-[126px]'> 1500+happy  customers</p>
        </div>
        <div className='flex  flex-col items-center justify-center'>
          <img src={landDesign} alt="" />
          <p className='pt-[25px] text-center sm:max-w-[126px]'>300+ design  experties</p>
        </div>
      </div>

      <div className=" flex w-[100%]  lg:pt-[110px] max-lg:mt-[84px] md:flex-row  items-center justify-end ">

        <div className="lg:w-[825px] max-lg:w-[600px] max-sm:w-[100%] flex flex-col justify-center absolute left-0 sm:pl-[95px] lg:pl-0 pl-[30px]
          bg-[#FFFFFF] bg-opacity-80  items-start  text-center">
          <div className='mt-[62px] lg:items-center lg:self-center '>
            <p className="sm:text-[36px]  text-[26px] leading-[54px] max-lg:text-left  font-medium text-[#241330] ">Make your dream interior in</p>
            <h6 className='font-medium max-lg:text-left   leading-[74px] text-[30px]  sm:text-[3rem]  text-[#241330]'>  3 easy steps </h6>
          </div>
          <div className='flex flex-col self-center max-lg:self-start max-lg:text-left'>
            <div className='sm:mt-[76px]'>
              <h1 className='text-[36px] text-[#4B2A63] font-semibold '>Explore</h1>
              <p className='text-[18px]  text-[#000000] font-normal pt-[7px] sm:pr-[119px] lg:pr-0'>Explore more than just modular design <br className='max-lg:hidden'/> ideas with our experts.</p>
            </div>
            <div className='sm:mt-[57px]'>
              <h1 className='text-[36px] text-[#4B2A63] font-semibold '>Design</h1>
              <p className='text-[18px] text-[#000000] font-normal pt-[7px] sm:pr-[45px] lg:pr-0'>Complete the designs with painting, flooring <br className='max-lg:hidden'/> and other decor solutions</p>
            </div>
            <div className='sm:mt-[58px] mb-[83px]'>
              <h1 className='text-[36px] text-[#4B2A63] font-semibold '>Move-in</h1>
              <p className='text-[18px] text-[#000000] font-normal pt-[7px]'>Move in with ease, with our hassle-free civil work <br className='max-lg:hidden'/> and installation services.</p>
            </div>
          </div>
        </div>

        <img className="  lg:w-[1386px] lg:h-[924px]    " alt="hero" src={StepBG } />
        <img src={Maxbg} alt=""  className='max-lg:block hidden max-lg:h-[809px] lg:w-[1386px]'/>
      </div>

    </>
  )
}

export default Hero