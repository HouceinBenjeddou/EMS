import EmployeeCard from '../components/EmployeeCard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/employees')
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log('Error from ListEmployee');
      });
  }, []);

  const employeeList =
    employees.length === 0
      ? 'There is no employee record yet! '
      : employees.map((employee, k) => <EmployeeCard employee={employee} key={k} />
      );


  return (
    <div>
     <h1 className='text-3xl text-center font-semibold py-3'> <Link to="/form">
      Add New Employee
      </Link></h1>
     <div className=" text-center text-xl  text-black">{employeeList}</div>
    </div>
  )
}

export default ListEmployees