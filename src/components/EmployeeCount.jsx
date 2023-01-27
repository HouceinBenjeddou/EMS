import React from 'react'
import { useState } from 'react'

const EmployeeCount = () => {
  //to do
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1 className='text-3xl font-bold text-[#21204b] justify-center text-center'>Employees {count}</h1>
    </div>
  )
}

export default EmployeeCount