import React, {useState} from "react"
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
export const Nav = () => {
  const [nav, setNav ] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


  return(
    <div className="flex justify-between items-center h-24 w-100%  text-white mx-auto p-4 ">
      <h1 className="w-full text-3xl font-bold">SHALOM</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Portfolio</li>
        <li className="p-4">Service</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-black ease-in-out duration-500': 'fixed left-[-100%]' }>
      <h1 className="w-full text-3xl text-white font-bold m-4">SHALOM</h1>
        <ul className="  uppercase p-4 text-white">
            <li className ='p-4  border-b border-gray-600'>Home</li>
            <li className ='p-4  border-b border-gray-600'>About</li>
            <li className ='p-4 border-b border-gray-600' >Portfolio</li>
            <li className ='p-4  border-b border-gray-600'>Services</li>
            <li className ='p-4  border-b border-gray-600'>Contact</li> 
        </ul>

      </div>

    </div>
  )
}