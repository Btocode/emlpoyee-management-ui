import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {

  const {id} = useParams();
  const navigateToEmployeeList = useNavigate();

  const [employee, setemployee] = useState(
    {
      id: id,
      firstName: "",
      lastName: "",
      emailId: "",
    }
  )

  const handleChange = (e) => {
    const value = e.target.value;
    setemployee({ ...employee, [e.target.name]: value });
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setemployee(response.data);
      } catch (error) {
        console.log(error) ;
      }
    }
    fetchData();
  }, [])
  



  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
    .then((response) => {
      navigateToEmployeeList("/employeeList");
    })
    .catch((err) => {
      console.log(err);
    });
  }


  return (
    <div className="flex max-w-xl shadow-md border-b-2 mx-auto">
      <div className="px-8 py-8">
        <div className="">
          <h1 className="text-2xl font-light tracking-wider">
             Update Employee
          </h1>
        </div>
        <div className="fn1 items-center w-full justify-center h-14 my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="1">
            {" "}
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            id="1"
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="ln1 items-center w-full justify-center h-14 my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="2">
            {" "}
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            id="2"
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="em items-center w-full justify-center h-14 my-4">
          <label
            className="block text-gray-600 text-sm font-normal"
            htmlFor="3">
            {" "}
            Email
          </label>
          <input
            type="text"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            id="3"
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="save items-center w-full justify-center h-14 my-4 space-x-4 pt-0">
          <button
            onClick={updateEmployee}
            className="rounded h-8 w-16 border bg-green-400 text-white hover:bg-green-700">
            {" "}
            Update
          </button>
          <button
            onClick={()=> navigateToEmployeeList("/employeeList")}
            className="rounded h-8 w-16  border bg-red-400 text-white hover:bg-red-700">
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee