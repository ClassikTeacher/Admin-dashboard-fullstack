import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDepartment } from '../models/IDepartment'
import { IEmployee } from '../models/IEmployee'

interface DepartmentsState{
    departments: IDepartment[]
    employees: IEmployee[]
    visibleModal: boolean
    modalForm: string,
   
}

const initialState: DepartmentsState = {
    departments: [],
    employees: [],
    visibleModal: false,
    modalForm: ''
}

export const toolkitSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {
        fetchDepartment(state, action: PayloadAction<IDepartment[]>){
            state.departments = action.payload
        },
        fetchEmployees(state, action: PayloadAction<IEmployee[]>){
            state.employees = action.payload
        },
        switchvisibleModal(state, action: PayloadAction<boolean>){
            state.visibleModal = action.payload
        },
        selectionFormModal(state, action: PayloadAction<string>){
            state.modalForm = action.payload
        },
        addDepartment(state, action: PayloadAction<IDepartment>){
            state.departments.push(action.payload)
        },
        addEmployee(state, action: PayloadAction<IEmployee>){
            state.employees.push(action.payload)
        }
        

    }

})

export default toolkitSlice.reducer;