import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
  
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    position: '',
    id: '',
  });

  const onChange = (e) => {
    setEmployee({...employee, [e.target.name]: e.target.value})
  }

    function onSubmit(e){
      e.preventDefault();

      axios 
      .post("http://localhost:8082/api/employees', employee")
      .then((res) => {
        setEmployee({
          first_name: '',
          last_name: '',
          email: '',
          age: '',
          position: '',
          id: '',
        });
        // Push to /
        navigate('/list');
      })
      .catch((err) => {
        console.log('Error in Form: create Employee');
      });
  };
     
  return (
    <form onSubmit={onSubmit} className='flex flex-col top-10 relative border p-12 rounded  container mx-auto max-w-3xl'>
     <h1 className='text-center text-cyan-900 py-3 font-semibold text-lg border-b-2 '>
     <Link to='/' >
              Show Employee List
            </Link>
      </h1> 
    <h1 className='text-4xl py-3 font-semibold text-center'>Add Employee</h1>
    <label className="text-lg py-2" htmlFor="firstName">First Name</label>
    <input className='border h-9 rounded '
        id="firstName"
        type="text"    
        placeholder=" Employee First name"
        name="firstName"
        // value={employee.first_name} to debug ..
        onChange={onChange}
    />
    <label className="text-lg py-2" htmlFor="lastName">Last Name</label>
    <input className='border h-9 rounded '
        id="lastName"
        placeholder=' Employee Last name'
        type="text"
        name="lastName"
    //    value={employee.last_name}
        onChange={onChange}
    />
    <label className="text-lg py-2" htmlFor="email">Email</label>
    <input className='border h-9 rounded '
        id="email"
        placeholder=' Email'
        type="email"
        name="email"
        value={employee.email}
        onChange={onChange}
    />
    <label className="text-lg py-2" htmlFor="salary">Age </label>
    <input className='border h-9 rounded '
        id="age"
        type="number"
        placeholder=' Age'
        name="age"
        value={employee.age}
        onChange={onChange}
    />
    <label className="text-lg py-2" htmlFor="position">Position</label>
    <input className='border h-9 rounded '
        id=" position"
        type="text"
        placeholder=' Company position'
        name="position"
        value={employee.position}
        onChange={onChange}
    />
       <label className="text-lg py-2" htmlFor="salary">ID </label>
    <input className='border h-9 rounded '
        id="id"
        type="number"
        placeholder=' ID'
        name="id"
        value={employee.id}
        onChange={onChange}
    />
    <div className='mt-8 justify-center flex '>
        <input type="submit" value="Add"  className='border py-3  px-4 text-lg text-white bg-[#322364] rounded-md cursor-pointer '/>
        <input className='border py-3 text-white px-4 text-lg bg-[#322364] rounded-md cursor-pointer '
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel"
            onClick={() => (false)}
        />
    </div>
</form>
  )
}

export default Form