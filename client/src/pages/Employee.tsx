import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AdmindashboardService from '../API/service/AdmindashboardService'
import { IEmployee } from '../models/IEmployee'
import moment from 'moment'

const Employee = ()=>{
    const params = useParams()
    const id: string = params.id == undefined ? '0' : params.id
    const [employee, setEmployee] = useState<IEmployee>()

    async function getDepartment() {
        const empl = await AdmindashboardService.getEmployee(id)
        setEmployee(empl.data)
     }
     
     useEffect(() => {
         getDepartment() 
 
     },[])


    return(
        <div className='dashboard'>
          <div className='department-info'>
                <h2>Department</h2>
                <div className='department-info__item'>
                    <h4>First Name</h4>
                    <p>{employee?.first_name}</p>
                </div>
                <div className='department-info__item'>
                    <h4>Last Name</h4>
                    <p>{employee?.last_name}</p>
                </div>
                <div className='department-info__item'>
                    <h4>Date</h4>
                    <p>{moment(employee?.date).format('yyyy-mm-DD')}</p>
                </div>
                <div className='department-info__item'>
                    <h4>Position</h4>
                    <p>{employee?.position}</p>
                </div>
                <div className='department-info__item'>
                    <h4>Company</h4>
                    <p>{employee?.company}</p>
                </div>
                <div className='department-info__item'>
                    <h4>Department</h4>
                    <p>{employee?.department}</p>
                </div>
            </div>
        </div>
    )
}
export default Employee