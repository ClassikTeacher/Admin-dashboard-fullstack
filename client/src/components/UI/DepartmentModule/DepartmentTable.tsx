import React, { ChangeEvent, FC, ReactElement } from 'react'
import MyButton from '../MyButton/MyButton'
import styles from './DepartmentTable.module.css'
import {IDepartment} from '../../../models/IDepartment'
import moment from 'moment'
import { click } from '@testing-library/user-event/dist/click'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/redux'
import {toolkitSlice} from '../../../store/toolkitSlice'

interface DepartmentTableProps{
    departments: IDepartment[]
    title: string
}

const DepartmentTable: FC<DepartmentTableProps> = ({departments, title})=>{
    const router = useNavigate()
    const dispatch = useAppDispatch()
    const statesRedux = useAppSelector(state => state.toolkitReduser)
    const reducersSlice = toolkitSlice.actions
    function click(item:any){
        router('/department/'+ item.id)
        console.log(item)
    }

    function createDepartment(){
        dispatch(reducersSlice.selectionFormModal('department'))
        console.log(statesRedux.modalForm)
        dispatch(reducersSlice.switchvisibleModal(true))
    }

    function deleteDepartment(e: any){
        e.stopPropagation()
        console.log(e)
    }
    
    return(
        <div className={styles.departmentTable}>
            <div className={styles.departmentTable__header}>
                    <h2>{title}</h2>   
                    {title === 'Departments' ?<MyButton 
                        children='All departments'
                        click={createDepartment}
                    /> : <div></div>}
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Date of creation 
                            </th>
                            <th>
                                Departmnet head
                            </th>
                            <th>
                                Amount Employee
                            </th>
                            <th>
                                description
                            </th>
                        </tr>
                        </thead>
                       <tbody>
                {departments.map(item=> 
                    <tr key={item.id} onClick={() => click(item)}>
                        <td>{item.name}</td>
                        <td>{moment(item.date).format('yyyy-mm-DD')}</td>
                        <td>{item.department_head}</td>
                        <td>{item.amount_employee}</td>
                        <td>{item.description}</td>
                         <td  onClick={e => deleteDepartment(e)} className={styles.deleteBtn}>delete</td>
                        </tr>
                       
                    )}
                    </tbody>
                    
                    </table>
        </div>
    )
}
export default DepartmentTable