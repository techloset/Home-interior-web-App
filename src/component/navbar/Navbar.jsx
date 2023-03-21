import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import artboard from '../../homeImages/Artboard21.webp'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  function clickMe() {
    setIsOpen(!isOpen);
  }
  return (
    <>

      <header className=" body-font lg:bg-[#F8F8F8] ">
        <div className=" flex  justify-between   flex-col lg:flex-row items-center">
          <div className='flex flex-row w-[100%] lg:w-auto justify-between sm:ml-[37px]  sm:mt-[37px]'>

            <a className="flex title-font  font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={artboard} alt="" className='  sm:w-[111px] sm:h-[111px] w-[133px] h-[133px] ' />
            </a>
            <button className=' lg:hidden max-lg:pt-4  mt-[39px] ml-[10px] '> <Hamburger easing="ease-in" onToggle={clickMe} color='black' size={30} direction='left' toggled={isOpen} toggle={setIsOpen} /></button>
          </div>
          <div className='mr-[94px] mt-[78px] lg:block hidden '>
            <p className="inline-flex items-center border-0  pr-[108px]  text-[#451A64] rounded text-xl font-medium  mt-4  md:mt-0">Join as Design Expert
            </p>
            <p className="inline-flex items-center border-0     text-[#451A64] rounded text-xl font-medium mt-4 md:mt-0">Partner with LAND Interiors
            </p>
          </div>
        </div>
        <div>

          <nav className={` mt-[38px] pb-[58px]  gap-[80px] list-none ${isOpen ? 'flex' : 'hidden'} animate__bounceInDown  animate__animated max-sm:flex-col    lg:flex  flex-wrap font-normal items-center text-[#000000] justify-center`}>


            <li className=" text-[20px]">About   </li>
            <li className=" text-[20px]">Projects</li>
            <li className=" text-[20px]">Studio  </li>
            <li className=" text-[20px]">Blog    </li>
            <li className=" text-[20px]">Contact </li>


          </nav>
        </div>
      </header>




    </>
  )
}

export default Navbar