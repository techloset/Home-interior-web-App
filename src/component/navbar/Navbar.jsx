import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import artboard from '../../homeImages/Artboard21.webp'
import Menu from '../../homeImages/menu.svg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  function clickMe() {
    setIsOpen(!isOpen);
  }
  return (
    <>

      <header className=" body-font bg-[#F8F8F8] ">
        <div className=" flex  justify-between   flex-col lg:flex-row items-center">
          <div className='flex flex-row w-[100%] lg:w-auto justify-between lg:ml-[37px]  lg:mt-[37px]'>

            <a className="flex ">
              <img src={artboard} alt="" className='  lg:w-[111px] lg:h-[111px] w-[133px] h-[133px] max-lg:mb-[44px] max-lg:mt-[39px] cursor-pointer' />
            </a>
            <button className=' lg:hidden max-lg:mt-[72px] mr-[30px] sm:mr-[64px] mb-[78px] '> <Hamburger easing="ease-in" onToggle={clickMe} color='black' size={60} direction='left' toggled={isOpen} toggle={setIsOpen} /></button>
          </div>
          <div className='mr-[94px] lg:mt-[37px] justify-center items-center  lg:flex hidden '>
            <p className="items-center border-0  pr-[108px]  text-[#451A64] rounded text-xl font-medium   cursor-pointer ">Join as Design Expert
            </p>
            <p className=" items-center border-0     text-[#451A64] rounded text-xl font-medium  cursor-pointer ">Partner with LAND Interiors
            </p>
          </div>
        </div>
        <div>

          <nav className={` mt-[38px] pb-[58px] cursor-pointer gap-[40px] md:gap-[80px] list-none ${isOpen ? 'flex' : 'hidden'} animate__bounceInDown  animate__animated max-sm:flex-col    lg:flex  flex-wrap font-normal items-center text-[#000000] justify-center`}>


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