import React from 'react'
import p1 from '../../homeImages/image11.webp'
import p2 from '../../homeImages/image17.webp'
import p3 from '../../homeImages/image19.webp'
import p4 from '../../homeImages/image18.webp'

const Foursection = () => {
    return (
        <>

            <div className=" flex w-[80%]  max-lg:py-6 lg:py-14 max-lg:ml-10  lg:flex-row max-lg:flex-col   ">
            <h6 className='font-medium self-start pb-6 text-4xl text-[#241330] lg:hidden max-lg:block'>  Our Projects </h6>
                <div className='flex  gap-x-6'>
                    <div className='flex flex-col gap-3 '>
                        <img src={p1} alt="" height='auto'  />
                        <img src={p3} alt="" height='auto' />
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <img src={p4} alt="" height='auto' />
                        <img src={p2} alt="" height='auto' />
                    </div>
                </div>
                <div className="lg:w-[52%] animate__animated animate__slideInLeft mt-[5%] lg:right-[1%] py-8 text-black 
                 flex flex-col justify-center items-center text-center lg:absolute  gap-5 sm:gap-10 bg-white bg-opacity-80">
                    <h6 className='font-medium self-center text-[#241330] text-4xl lg:block max-lg:hidden'>  Our Projects </h6>
                            <p className='font-normal lg:pl-20  text-start lg:text-center text-[15px] sm:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                                porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                            <p  className='font-normal lg:pl-20  text-start lg:text-center text-[15px] sm:text-[18px]'> magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                            <button className='px-20 py-5 bg-[#4B2A63] font-semibold text-2xl text-white'>View all</button>
                </div>
            </div>





        </>
    )
}

export default Foursection