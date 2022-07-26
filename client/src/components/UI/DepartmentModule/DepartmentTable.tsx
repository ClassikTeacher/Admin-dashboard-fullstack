import React, { FC } from 'react'
import MyButton from '../MyButton/MyButton'
import styles from './DepartmentTable.module.css'
import {IDepartment} from '../../../models/IDepartment'
import moment from 'moment'

interface DepartmentTableProps{
    departments: IDepartment[]
    title: string
}

const DepartmentTable: FC<DepartmentTableProps> = ({departments, title})=>{

    console.log(departments)
    return(
        <div className={styles.departmentTable}>
            <div className={styles.departmentTable__header}>
                    <h2>{title}</h2>   
                    <MyButton 
                        children='All departments'
                    />
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
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{moment(item.date).format('yyyy-mm-DD')}</td>
                        <td>{item.department_head}</td>
                        <td>{item.amount_employee}</td>
                        <td>{item.description}</td>
                        </tr>
                    )}
                    </tbody>
                    
                    </table>
        </div>
    )
}
export default DepartmentTable