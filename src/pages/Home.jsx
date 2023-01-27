import React  from 'react'
import { useNavigate } from 'react-router-dom'

import EmployeeCount from '../components/EmployeeCount'
import LeftNav from '../components/LeftNav'
import Navbar from './Navbar'

const Home = () => {
const navigate = useNavigate();

  function showEmployee(){
    navigate("/card", {replace: false});
  }
  
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
            <button onClick={showEmployee} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className=" text-xl font-medium inline-block px-10 py-3 bg-[#2a196e] text-slate-300 leading-tight rounded-xl shadow-md hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3e326c] active:shadow-lg transition duration-150 ease-in-out">Affiche Les Employees</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home