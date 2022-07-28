import React, { useEffect, useState } from 'react'
import styles from './FormDepartment.module.css'
import AdmindashboardService from '../../../API/service/AdmindashboardService'
import { useAppDispatch, useAppSelector } from '../../../store/redux'
import {toolkitSlice} from '../../../store/toolkitSlice'
import MyButton from '../MyButton/MyButton'
import MyInput from '../MyInpyt/MyInput'



const FormDepartment = ()=>{

    const[nameInput, setNameInput] = useState<string>('')
    const[amountEmployeeInput, setAmountEmployeeInput] = useState<number>(0)
    const[departmentHeadInput, setDepartmentHeadInput] = useState<string>('')
    const[dateInput, setDateInput] = useState<string>('')
    const[descriptionInput, setDescriptionInput] = useState<string>('')
    const statesRedux = useAppSelector(state => state.toolkitReduser)
    const dispatch = useAppDispatch()
    const reduxActions = toolkitSlice.actions

    useEffect(() => {
        setNameInput('')
        setAmountEmployeeInput(0)
        setDepartmentHeadInput('')
        setDateInput('')
        setDescriptionInput('')
    },[statesRedux.visibleModal])

    async function click(){
        const response = await AdmindashboardService.createDepartment(nameInput, dateInput, amountEmployeeInput, departmentHeadInput, descriptionInput)
        if (response){
            dispatch(reduxActions.addDepartment(response.data))
            dispatch(reduxActions.switchvisibleModal(false))
        }
        console.log(response)
    }
    return(
        <form action='#' id='feedbackForm' className={styles.form}>
            <h1>create department</h1>
            <MyInput 
            nameInput={'name'} 
            typeInput={'text'}
            valueForm={nameInput}
            changeValue={setNameInput}
            />
            <MyInput 
            nameInput={'amount employee'}
            typeInput={'number'} 
            valueForm={amountEmployeeInput}
            changeValue={setAmountEmployeeInput}
            />
            <MyInput 
            nameInput={'department head'} 
            typeInput={'text'}
            valueForm={departmentHeadInput}
            changeValue={setDepartmentHeadInput}
            />
            <MyInput 
            nameInput={'date of creation'} 
            typeInput={'date'}
            valueForm={dateInput}
            changeValue={setDateInput}
            />
            <MyInput 
            nameInput={'description'} 
            typeInput={'text'}
            valueForm={descriptionInput}
            changeValue={setDescriptionInput}
            />
        

            <MyButton
                children='Submit'
                click={click}
            />
        </form>
    )
}
export default FormDepartment