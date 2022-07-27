import React, { useEffect, useState } from 'react'
import styles from './FormEmployee.module.css'
import AdmindashboardService from '../../../API/service/AdmindashboardService'
import { useAppDispatch, useAppSelector } from '../../../store/redux'
import {toolkitSlice} from '../../../store/toolkitSlice'
import MyButton from '../MyButton/MyButton'
import MyInput from '../MyInpyt/MyInput'
import MySelect from '../MySelect/MySelect'

export interface IOptions{
    value: string
    name: string
}

const FromEmployee = ()=>{
        const [firstName, setFirstName] = useState<string>('')
        const [lastName, setLastName] = useState<string>('')
        const [company, setCompany] = useState<string>('')
        const [department, setDepartment] = useState<string>('')
        const [position, setPosition] = useState<string>('')
        const [date, setDate] = useState<string>('')
        const [deparnemtHead, setDepartmentHead] = useState<number>(0)
        // const [departmentId, setDepartmentid] = useState<number>(0)
        const dispatch = useAppDispatch()
        const reduxActions = toolkitSlice.actions
        const reduxStore = useAppSelector(state => state.toolkitReduser)
        const options:IOptions[] = reduxStore.departments.map( item=>  {return {value: item.name, name: item.name}})

        async function click(){
            const departmentId = reduxStore.departments.filter( item=>  item.name == department)
            
            const response = await AdmindashboardService.createEmployee(firstName, lastName, company, department, position, date, !(deparnemtHead == 0), departmentId[0].id)
            if (response){
                dispatch(reduxActions.addEmployee(response.data))
            }
            console.log(departmentId[0].id)
        }

        return(
        <div>
            <form action='#' id='feedbackForm' className={styles.form}>
            <h1>create department</h1>
            <MyInput 
            nameInput={'First Name'} 
            typeInput={'text'}
            valueForm={firstName}
            changeValue={setFirstName}
            />
            <MyInput 
            nameInput={'Last Name'}
            typeInput={'text'} 
            valueForm={lastName}
            changeValue={setLastName}
            />
            <MyInput 
            nameInput={'Company'} 
            typeInput={'text'}
            valueForm={company}
            changeValue={setCompany}
            />
            <MySelect 
                nameInput={'department'}
                valueSelect={department}
                changeValue={setDepartment}
                defaultValue={'selected department'}
                options={options}
            />
            <MyInput 
            nameInput={'Position'} 
            typeInput={'text'}
            valueForm={position}
            changeValue={setPosition}
            />
            <MyInput 
            nameInput={'date'} 
            typeInput={'date'}
            valueForm={date}
            changeValue={setDate}
            />
            {/* <MyInput 
            nameInput={'Department head'} 
            typeInput={'checkbox'}
            valueForm={deparnemtHead}
            changeValue={setDepartmentHead}
            /> */}
            <MySelect 
                nameInput={'Department head'}
                valueSelect={deparnemtHead}
                changeValue={setDepartmentHead}
                defaultValue={'selected department'}
                options={[
                    {name: "no", value:0},
                    {name: "yes", value:1}
                ]}
            />
        

            <MyButton
                children='Submit'
                click={click}
            />
        </form>
        </div>
        )
    }
export default FromEmployee