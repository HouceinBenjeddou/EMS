import React from 'react'
import {FaUserTie} from 'react-icons/fa'
import ListEmployees from '../pages/ListEmployees';

const EmployeeCard = (props) => {
  const employee = props.employee;

  return (
    <div>
      <div className=" relative h-[250px] shadow-xl max-w-[380px] border rounded-xl flex-col flex justify-center">
             <div className='flex container mx-auto flex-col justify-center text-center items-center relative'>
           <FaUserTie className='text-6xl py-2'/>
           <span className='flex  text-slate-800 flex-row gap-1 justify-center'>
           <h1 className='text-2xl font-semibold '>{employee.first_name}</h1>
            <h1 className='text-2xl font-semibold '>{employee.last_name}</h1>
            </span>
            <p className='text-slate-800 text-xl border bg-blue-100 rounded-xl px-3 py-1'>{employee.position}</p>
           <a href="mail" className='text-lg text-blue-500 font-medium my-2'>{employee.email}</a>
           <span className='flex text-slate-800 flex-row gap-20 text-xl border-t-2 border-teal-300 w-full justify-center'>
              <p> <span className=' text-gray-500 '>ID</span> {employee.id}</p>
             <p><span className=' text-gray-500 '>Age</span> {employee.age}</p>
             </span>
             </div>
             </div>  
    </div>
  )
}

export default EmployeeCard