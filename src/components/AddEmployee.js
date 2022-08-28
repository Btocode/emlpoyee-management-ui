import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setemployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setemployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault(); // preventing page refresing on submit
    EmployeeService.saveEmployee(employee)
      .then((Response) => {
        console.log(Response);
        navigate("/employeeList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearTheInputs = (e) => {
    e.preventDefault();
    setemployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  return (
    <div className="flex max-w-xl shadow-md border-b-2 mx-auto">
      <div className="px-8 py-8">
        <div className="">
          <h1 className="text-2xl font-light tracking-wider">
            Add New Employee
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
            onClick={saveEmployee}
            className="rounded h-8 w-16 border bg-green-400 text-white hover:bg-green-700">
            {" "}
            Save
          </button>
          <button
            onClick={clearTheInputs}
            className="rounded h-8 w-16  border bg-red-400 text-white hover:bg-red-700">
            {" "}
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
