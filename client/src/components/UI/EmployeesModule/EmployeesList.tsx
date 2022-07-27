import React, { FC } from 'react'
import styles from './Employees.module.css'
import defualtAvatar from '../../../static/defualtAvatar.jpg'
import {IEmployee} from '../../../models/IEmployee'
import { click } from '@testing-library/user-event/dist/click'
import { useNavigate } from 'react-router-dom'

interface EmployeesListProps{
    title:string
    employees: IEmployee[]
}

const EmployeesList: FC<EmployeesListProps> = ({title, employees})=>{
    const router = useNavigate()
    function click(item:IEmployee){
        router('/employee/'+item.id)
    }

    return(
        <div className={styles.EmployeesBlock}>
            <h2>{title}</h2>
            <ul>
                {employees.map( item =>
                    <li key={item.id} onClick={() => click(item)}>
                    <img src={defualtAvatar} alt="" className={styles.photo}/>
                    <div className={styles.info}>
                        <h4>{item.first_name}</h4>
                        <p>{item.company}</p>
                    </div>
                    <div className={styles.position}>
                        {item.position}
                    </div>
                </li>
                )}
            </ul>
        </div>
    )
}
export default EmployeesList