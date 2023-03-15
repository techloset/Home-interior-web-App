import React from 'react'
import product1 from '../../homeImages/product_jkl.svg'
import product2 from '../../homeImages/product_uio.svg'
import product3 from '../../homeImages/product_rty.svg'
import product4 from '../../homeImages/product_qwe.svg'
import product5 from '../../homeImages/product_xyz.svg'
import product6 from '../../homeImages/product_abc.svg'


const Fivesection = () => {
    return (
        <>
      <h1 className='text-center text-4xl font-medium text-gray-900 py-10'>Our Interior Design Products</h1>
     <div className='flex  flex-row mx-10 '>
      <div className='space-y-2  '>
        <img src={product1} alt="" />
        <img src={product2} alt="" className='pb-2' />
      </div>
      <div className='pl-4'>
        <img src={product3} alt="" />
      </div>
      <div className='space-y-3 pl-4'>
        <img src={product4} alt="" />
        <img src={product5} alt="" />
      </div>
      <div className='pl-4'>
        <img src={product6} alt="" />
      </div>
     </div>
    
     <div className='flex justify-center items-center  flex-col py-10'>
      <p className='w-[40%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
purus sit amet luctus venenatis, lectus magna fringilla urna,
 porttitor rhoncus dolor purus non enim</p>
        <button className='w-[270px] h-[80px] my-6 bg-purple-900 font-semibold text-2xl text-white'>View all</button>
      </div>




        </>
    )
}

export default Fivesection