import React from 'react'
import product1 from '../../homeImages/image24.webp'
import product2 from '../../homeImages/image25.webp'
import product3 from '../../homeImages/image23.webp'
import product4 from '../../homeImages/image26.webp'
import product5 from '../../homeImages/image27.webp'
import product6 from '../../homeImages/image28.webp'


const Fivesection = () => {
  return (
    <>
    <div className='  flex justify-center lg:items-center ml-[3rem] sm:ml-[4rem] lg:mx-[8rem] flex-col  '>
      <h1 className='    max-lg:text-[30px] max-sm:text-[25px] lg:text-4xl font-normal sm:font-medium text-[#241330] py-10'>Our Interior Design Products</h1>
      <div className='flex overflow-hidden w-[80%] flex-row  '>
        <div className='space-y-2  '>
          <img src={product1} alt=""  height='auto'/>
          <img src={product2} alt="" height='auto' className='pb-2' />
        </div>
        <div className='pl-4'>
          <img src={product3} alt="" height='auto' />
        </div>
        <div className='space-y-3 pl-4 lg:block hidden'>
          <img src={product4} alt="" height='auto' />
          <img src={product5} alt="" height='auto' />
        </div>
        <div className='pl-4 lg:block hidden'>
          <img src={product6} alt=""  height='auto'/>
        </div>
      </div>

    </div>
      <div className='flex justify-center items-center lg:items-center     flex-col py-9 lg:py-[30px]'>
        <p className=' text-[18px] w-[80%] sm:w-[70%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] font-normal max-lg:self-start pl-[3rem] sm:pl-[4rem] lg:px-[8rem] lg:text-center'>Lorem ipsum dolor
         sit amet, consectetur adipiscing elit ut  aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim</p>
        <button className=' px-16 sm:px-[87px] py-5 mt-[3rem] bg-[#4B2A63] font-semibold self-center  text-lg sm:text-2xl text-white'>View all</button>
      </div>
      



    </>
  )
}

export default Fivesection