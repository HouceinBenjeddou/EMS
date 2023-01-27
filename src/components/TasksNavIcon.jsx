import React from 'react'
import ListEmployees from '../pages/ListEmployees'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TasksNavIcon = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/list", { replace: false });
  }
  function ajoutEmployee(){
    navigate("/form", { replace: false });
  }
  return (

    <div>
        <div className="flex cursor-pointer bottom-5 bg relative justify-center items-center flex-col text-lg font-semibold gap-20 max-w-[100px] text-center">
            <button onClick={ajoutEmployee} className='bg-[#342963] text-white rounded-full border-2 mx-2 relative p-5 left-8 text-lg font-medium inline-block px-9 py-2.5 hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#483c7a] active:shadow-lg transition duration-150 ease-in-out'>Ajout Employee</button>
            <button onClick={handleClick} className='bg-[#342963] text-white rounded-full border-2 mx-2 relative p-5 left-8 text-lg font-medium inline-block px-9 py-2.5 hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#483c7a] active:shadow-lg transition duration-150 ease-in-out '>List Employees</button>
            <button className='bg-[#342963] text-white rounded-full border-2 mx-2 relative p-5 left-8 text-lg font-medium inline-block px-9 py-2.5 hover:bg-[#483c7a] hover:shadow-lg focus:bg-[#483c7a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#483c7a] active:shadow-lg transition duration-150 ease-in-out '>Employee details</button>
        </div>
    </div>
  )
}

export default TasksNavIcon