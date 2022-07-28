import React, { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AdmindashboardService from '../API/service/AdmindashboardService'
import { IDepartment } from '../models/IDepartment'
import moment from 'moment'
import styles from './Department.module.css'
import MyButton from '../components/UI/MyButton/MyButton'
import { useAppDispatch, useAppSelector } from '../store/redux'
import { toolkitSlice } from '../store/toolkitSlice'



const Department= ()=>{
    const params = useParams()
    const dispatch = useAppDispatch()
    const reducersSlice = toolkitSlice.actions
    const stateRedux = useAppSelector(state => state.toolkitReduser)
    const[deparnemt, setDepartment] = useState<IDepartment>()
    const id: string =  params.id == undefined ? '0' : params.id

    function callModal(){
        dispatch(reducersSlice.selectionFormModal('employee'))
        dispatch(reducersSlice.switchvisibleModal(true))
    }

    async function getDepartment() {
       const depart = await AdmindashboardService.getDepartment(id)
       setDepartment(depart.data)
    }

    async function deleteEmployee(e:any){

        const response = await AdmindashboardService.deleteEmployee(e.target.id)
        if(response){
            getDepartment()
        }else {
            new Error('error delete employee')
        }
    }
    
    useEffect(() => {
        getDepartment() 

    },[stateRedux.employees])

    return(
        <div className='dashboard'>
            <div className='department-info'>
                <h2>Department</h2>
                <div className='department-info__item'>
                    <h4>Name</h4>
                    <p>{deparnemt?.name}</p>
                </div>
                <div className='department-info__item'>
                    <h4>Date</h4>
                    <p>{moment(deparnemt?.date).format('yyyy-mm-DD')}</p>
                </div>
                <div className='department-info__item'>
                    <h4>Description</h4>
                    <p>{deparnemt?.description}</p>
                </div>
                <div className='department-info__item'>
                    <h4>Departmnet head</h4>
                    <p>{deparnemt?.department_head}</p>
                </div>
            </div>
            <div className={styles.employeesDepartment}>
                <div className={styles.employeesDepartment__header}><h2> Employee </h2> 
                <MyButton children={'add employye'} click={callModal}/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                firstname
                            </th>
                            <th>
                                last name
                            </th>
                            <th>
                                position
                            </th>
                            <th>
                                date added
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {deparnemt?.employee_list.map(item => 
                            <tr key={item.id}>
                                <td>
                                    {item.first_name}
                                </td>
                                <td>
                                    {item.last_name}
                                </td>
                                <td>
                                    {item.position}
                                </td>
                                <td>
                                    {moment(item.date).format('yyyy-mm-DD')}
                                </td>
                                <td id={String(item.id)} onClick={e => deleteEmployee(e)} className={styles.deleteBtn}>delete</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Department