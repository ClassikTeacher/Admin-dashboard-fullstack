import React from 'react'
import DepartmentTable from '../components/UI/DepartmentModule/DepartmentTable'
import { useAppSelector } from '../store/redux'

const Departments = ()=>{
    const statesRedux = useAppSelector(state => state.toolkitReduser)
    return(
        <div className='dashboard'>
            <DepartmentTable 
                title='Departments'
                departments={statesRedux.departments}
            />
        </div>
    )
}
export default Departments