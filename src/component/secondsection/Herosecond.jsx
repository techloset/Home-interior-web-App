import React from 'react'
import StepBG from '../../homeImages/step_bg.svg'

const Hero = () => {
  return (
    <>

      <div className=" flex w-[100%]  py-24 md:flex-row flex-col items-center  ">
        {/* <div class="lg:max-w-lg w-full lg:w-full md:w-1/2  mb-10 md:mb-0 h-[50%]"> */}
        {/* </div> */}
        <div className="w-[44%] h-[89%]   flex justify-center absolute right-[56%] gap-2 bg-white bg-opacity-80    flex-col md:items-start md:text-left items-center text-center">
          <p className="text-3xl  pl-[20%] font-medium text-gray-900">Make your dream interior in</p>
            <h6 className='text-center font-medium pl-[35%] pb-14 text-4xl'>  3 easy steps </h6>
          
          <div className='flex flex-col justify-center items-center text-center w-[80%] pl-[20%] gap-9'>
            <div >
              <h1 className='text-3xl text-purple-900 font-semibold '>Explore</h1>
              <p>Explore more than just modular design ideas with our experts.</p>
            </div>
            <div>
              <h1 className='text-3xl text-purple-900 font-semibold'>Design</h1>
              <p>Complete the designs with painting, flooring and other decor solutions</p>
            </div>
            <div>
              <h1 className='text-3xl text-purple-900 font-semibold'>Move-in</h1>
              <p>Move in with ease, with our hassle-free civil work and installation services.</p>
            </div>
          </div>
        </div>
        <img className="object-cover object-center rounded w-[70%] h-[60%]  ml-[30%]" alt="hero" src={StepBG} />

      </div>

    </>
  )
}

export default Hero