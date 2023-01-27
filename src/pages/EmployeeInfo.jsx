import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function EmployeeInfo(props) {
  const [employee, setEmployee] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/employees/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log('Error from EmployeeInfo');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/employees/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form EmployeeInfo_deleteClick');
      });
  };

  const EmployeeItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>First name</td>
            <td>{employee.first_name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Last name</td>
            <td>{employee.last_name}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Email</td>
            <td>{employee.email}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Position</td>
            <td>{employee.position}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Id</td>
            <td>{employee.id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='flex container mx-auto'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Employee's Record</h1>
            <p className='lead text-center'>View Employee's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{EmployeeItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='p-6'
              onClick={() => {
                onDeleteClick(employee._id);
              }}
            >
              Delete Employee
            </button>
          </div>
          <div className=' m-auto'>
            <Link
              to={`/edit-employee/${employee._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Employee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeInfo;