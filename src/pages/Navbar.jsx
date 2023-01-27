import React from 'react'
import {FaUserTie, FaRegBell, FaChevronRight} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="h-20 w-full top-3 relative rounded-xl mx-5 bg-[#15074E] ">
          <div className="flex flex-row justify-between">
          <div className="flex justify-start items-center my-2 py-1 gap-3">
            <div className="flex">
              <h1 className='text-white text-4xl m-2'><FaUserTie/></h1>
            </div>
            <div className="flex text-white flex-col ">
            <h1 className='text-2xl font-semibold'>Houcein Benjeddou</h1>
            <p className='text-gray-500 '>HR Manager</p>
            </div> 
          </div>
          <div className="flex justify-center py-4 mx-3">
            <span className='flex text-center mx-4 flex-row justify-center items-center'>
            <FaRegBell className='text-white text-lg font-light relative left-7'/>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className=" text-lg font-light inline-block px-10 py-2.5 bg-[#2a196e] text-slate-300 leading-tight rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Notifications</button>
            </span>
            <span className='flex mx-4 flex-row justify-center items-center'>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className=" text-lg font-light inline-block px-10 py-2.5 bg-[#2a196e] text-slate-300 leading-tight rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Log out</button>
            <FaChevronRight className='text-white text-lg font-light relative right-7'/>
            </span>
          </div> 
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Navbar