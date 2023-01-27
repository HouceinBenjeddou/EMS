import React, { useState } from 'react'
import mockData from "./data.json";
import {FaUserTie} from 'react-icons/fa'
const EmployeeCard = () => {
  const [state, setState] = useState(mockData[0])
  return (
    <div>
    <div className="container relative h-40 bg-slate-100 mx-auto max-w-md border rounded-xl flex flex-col justify-center">
      <div className='flex flex-col justify-center text-center items-center relative'>
        
      </div>
     </div>
    </div>
  )
}

export default EmployeeCard