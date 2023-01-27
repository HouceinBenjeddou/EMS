import React  from 'react'
import EmployeeCard from '../components/EmployeeCard'
import EmployeeCount from '../components/EmployeeCount'
import LeftNav from '../components/LeftNav'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
       <div className="flex flex-row">
        <LeftNav/>
        </div>
        <div className="container h-[700px] py-5 border-2 top-4 relative shadow-lg rounded-xl left-10 max-w-7xl ml-12 ">
          <div className="flex justify-between flex-row mx-4">
            <EmployeeCount/>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className=" text-xl font-medium inline-block px-10 py-3 bg-[#2a196e] text-slate-300 leading-tight rounded-xl shadow-md hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3e326c] active:shadow-lg transition duration-150 ease-in-out">Affiche Les Employees</button>
          </div>
        </div>
      </div>
      <EmployeeCard/>
    </div>
  )
}

export default Home