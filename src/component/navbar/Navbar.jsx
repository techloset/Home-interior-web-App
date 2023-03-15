import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import artboard from '../../homeImages/Artboard.svg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  function clickMe() {
    setIsOpen(!isOpen);
  }
  return (
    <>

      <header className=" body-font lg:bg-gray-100 lg:h-[274px]">
        <div className="container mx-auto flex flex-wrap justify-between  p-5 flex-col lg:flex-row items-center">
          <div className='flex flex-row w-[100%] lg:w-auto justify-between'>

            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={artboard} alt="" className='sm:ml-[37px]  sm:mt-[37px]  sm:w-[111px] sm:h-[111px] w-[133px] h-[133px]  mt-[39px] ' />
            </a>
            <button className=' lg:hidden max-lg:pt-4  mt-[39px] ml-[10px] '> <Hamburger easing="ease-in" onToggle={clickMe} color='black' size={30} direction='left' toggled={isOpen} toggle={setIsOpen} /></button>
          </div>
          <div className='lg:block hidden'>
            <p className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-purple-900 rounded text-xl font-medium  mt-4  md:mt-0">Join as Design Expert
            </p>
            <p className="inline-flex items-center border-0 py-1 px-3 focus:outline-none  text-purple-900 rounded text-xl font-medium mt-4 md:mt-0">Partner with LAND Interiors
            </p>
          </div>
        </div>
        <div>

          <nav className={`md:ml-auto md:mr-auto  list-none ${isOpen? 'flex':'hidden'} animate__bounceInDown  animate__animated max-sm:flex-col    lg:flex  flex-wrap text-xl font-normal items-center text-black  justify-center`}>


            <li className="mr-5 hover:text-gray-900">About   </li>
            <li className="mr-5 hover:text-gray-900">Projects</li>
            <li className="mr-5 hover:text-gray-900">Studio  </li>
            <li className="mr-5 hover:text-gray-900">Blog    </li>
            <li className="mr-5 hover:text-gray-900">Contact </li>


          </nav>
        </div>
      </header>
  



    </>
  )
}

export default Navbar