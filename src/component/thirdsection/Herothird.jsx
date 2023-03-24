import React from 'react'
import dokitchen from '../../homeImages/image3.webp'
import dobedroom from '../../homeImages/image4.webp'
import doliveroom from '../../homeImages/image8.webp'
import dooffice from '../../homeImages/image9.webp'

const Herothird = () => {
    return (
        <>
                <h1  className='text-center mt-[7.7rem] text-4xl font-medium animate__animated animate__wobble title-font  text-[#000000]"'>What we do?</h1>
                <div className='flex justify-center max-lg:flex-wrap items-center gap-[4.7rem] mt-[3.7rem] px-[20px]'>
                    <div><img src={dokitchen} alt="" /><h1 className='text-center mt-[2rem] font-semibold text-2xl text-[#4B2A63]'>Modular Kitchen</h1></div>
                    <div><img src={dobedroom} alt="" /><h1 className='text-center mt-[2rem] font-semibold text-2xl text-[#4B2A63]'>Bedroom</h1></div>
                    <div><img src={doliveroom} alt="" /><h1 className='text-center mt-[2rem] font-semibold text-2xl text-[#4B2A63]'>Living room</h1></div>
                    <div><img src={dooffice} alt="" /><h1 className='text-center mt-[2rem] font-semibold text-2xl text-[#4B2A63]'>Home office</h1></div>
                </div>
                <div className='px-[28rem]  text-[#000000] font-normal text-[18px] mt-[3rem] text-center max-xl:hidden'>
                    Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                     lectus magna fringilla urna,</div>


        </>
    )
}

export default Herothird