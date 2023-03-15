import React from 'react'
import homeinterior from '../../homeImages/home-interiors.svg'
import landcalendear from '../../homeImages/land_iop.svg'
import landhome from '../../homeImages/land_xyz.svg'
import landDesign from '../../homeImages/land_abc.svg'

const Hero = () => {
  return (
    <>

      <div className=" flex w-[100%]  py-11 md:flex-row flex-col items-center relative">
  
        <img className="object-cover object-center rounded lg:w-[60%] lg:h-[50%]" alt="hero" src={homeinterior} />
       
        <div className="lg:w-[45%] lg:h-[55%] mx-auto max-md:mt-[22%] max-sm:mt-[20%] max-lg:mt-[35%]  lg:gap-[25px]  left-[5%] w-[90%]  h-[52%] flex justify-center absolute lg:left-[52%] bg-white bg-opacity-80    flex-col  items-center text-center">
          <h1 className="text-sm sm:text-xl lg:mb-4 lg:pl-[21%] font-normal ">Get personalised home interiors
            <p className='text-center font-semibold text-lg sm:text-3xl'>  in just 50 days </p>
          </h1>
          <button className="inline-flex text-white max-sm:mt-[10px] max-lg:mt-[80px] lg:ml-[19%]  bg-purple-900 border-0 sm:py-3 sm:px-6 p-2 focus:outline hover:bg-purple-900 font-semibold  md:text-lg lg:text-xl max-sm:text-xs">
            SPEAK WITH A ONLINE CONSULTANT</button>
        </div>
      </div>

      <h1 className='text-center font-medium text-3xl animate__rollIn animate__animated'>Why LAND Interiors</h1>
      <div className='flex justify-evenly items-center my-20  max-sm:flex-col max-sm:gap-4 max-sm:justify-center items-center'>
        <div>
          <img src={landcalendear} alt="" />
          <p>50 days or we pay you rent</p>
          {/* <p>50 days or we <p> pay you rent </p></p> */}
        </div>
        <div>
          <img src={landhome} alt="" />
          <p> 1500+happy customers</p>
          {/* <p>1500+happy <p>customers </p> </p> */}
        </div>
        <div>
          <img src={landDesign} alt="" />
          <p>300+ design experties</p>
          {/* <p>300+ design <p> experties </p></p> */}
        </div>
      </div>




    </>
  )
}

export default Hero