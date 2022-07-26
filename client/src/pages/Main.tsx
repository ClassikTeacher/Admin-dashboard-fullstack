import React, { FC, useState, useEffect } from 'react'
import DepartmentTable from '../components/UI/DepartmentModule/DepartmentTable'
import EmployeesList from '../components/UI/EmployeesModule/EmployeesList'
import { IDepartment } from '../models/IDepartment'
import { IEmployee } from '../models/IEmployee'
import AdmindashboardService from '../API/service/AdmindashboardService'



const Main = ()=>{

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
    return(
        <div className='dashboard'>
          <div className='department-wrapper'>
          <DepartmentTable 
            departments={departments}
            title={'Top 5 departments'}
          />
          </div>
          <EmployeesList
            employees={employees}
            title='Last employees'
          />
          
        </div>
    )
}
export default Main