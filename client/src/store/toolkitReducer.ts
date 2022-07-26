import {createAction, createReducer} from '@reduxjs/toolkit'
import { IDepartment } from '../models/IDepartment'
import { IEmployee } from '../models/IEmployee'

interface DepartmentsState{
    departments: IDepartment[]
    department: IDepartment
}

const initialState = {
    employees: [],
    departments: []
}
const fetchDepartments = createAction('fetchDepartment')
const addDepartment = createAction('addDepartment')


//  export default createReducer(initialState, {
//     [fetchDepartments]: (state, action) => {
//         state.departments.push(action.payload)
//     }
//  })