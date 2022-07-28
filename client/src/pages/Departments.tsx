import React, { useEffect, useState } from 'react'
import AdmindashboardService from '../API/service/AdmindashboardService'
import DepartmentTable from '../components/UI/DepartmentModule/DepartmentTable'
import { IDepartment } from '../models/IDepartment'
import { useAppDispatch, useAppSelector } from '../store/redux'
import { toolkitSlice } from '../store/toolkitSlice'

const Departments = ()=>{
    const [departments, setDepartments] = useState<IDepartment[]>(useAppSelector(state => state.toolkitReduser.departments))
    const stateRedux = useAppSelector(state => state.toolkitReduser)
    const dispatch = useAppDispatch()
    const reduxActions = toolkitSlice.actions
    async function getDepartments(){
        const newDepartments = await AdmindashboardService.fetchDepartment()
        setDepartments(newDepartments.data)
        console.log(1)
    }
  
    
    useEffect(()=>{
        getDepartments()
    },[stateRedux.departments])
    return(
        <div className='dashboard'>
            <DepartmentTable 
                title='Departments'
                departments={departments}
            />
        </div>
    )
}
export default Departments