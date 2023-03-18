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
    <div className='w-[100%] flex justify-center flex-col items-center '>
      <h1 className='lg:text-center  w-[80%]  max-lg:text-[30px] max-sm:text-[25px] lg:text-4xl font-medium text-[#241330] py-10'>Our Interior Design Products</h1>
      <div className='flex  flex-row  w-[80%]'>
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

      <div className='flex justify-center items-center lg:items-center w-[80%] sm:w-[80%]  lg:w-[40%] flex-col py-5 lg:py-10'>
        <p className=' text-[18px]  font-normal self-start text-start lg:text-center'>Lorem ipsum dolor
         sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim</p>
        <button className=' px-16 sm:px-20 py-5 my-6 bg-[#4B2A63] font-semibold text-lg sm:text-2xl text-white'>View all</button>
      </div>
      



    </div>
    </>
  )
}

export default Fivesection