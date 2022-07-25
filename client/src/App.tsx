import React, { useEffect, useState } from 'react';
import { IDepartment } from './models/IDepartment';
import { IEmployee } from './models/IEmployee';
import './styles/App.css';
import AdmindashboardService from './API/service/AdmindashboardService';
import { AxiosResponse } from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [departments, setDepartments] = useState<IDepartment[]>([])
  const [employees, setEmployees] = useState<IEmployee[]>([])

  async function fetchData(){
    const responseDepartment = await AdmindashboardService.fetchDepartment()
    const responseEmployee = await AdmindashboardService.fetchEmployees()
    setDepartments(responseDepartment.data)
    setEmployees(responseEmployee.data)
  }

  useEffect(() => {
    fetchData()
    
  },[])
  
  return (
    <div className="App">
      <Sidebar />
      <div className='content-container'>
        <Navbar />
        <div className='dashboard'>
          <div className='departmentModule'>
            {departments.map(item=> 
              <div key={item.id}>{item.name}</div>
            )}
          </div>
          <div className='employeeModule'>
          {employees.map(item=> 
              <div key={item.id}>{item.first_name} {item.last_name}</div>
            )}
          </div>
        </div>
      </div>
       
    </div>
  );
}

export default App;
