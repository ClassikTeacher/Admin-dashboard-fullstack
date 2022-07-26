import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDepartment } from '../models/IDepartment'
import { IEmployee } from '../models/IEmployee'

interface DepartmentsState{
    departments: IDepartment[]

}

const initialState: DepartmentsState = {
    departments: [],
}

export const toolkitSlice = createSlice({
    name: 'd',
    initialState,
    reducers: {
        fetchDepartment(state, action: PayloadAction<IDepartment[]>){
            state.departments = action.payload
        }
    }
})

export default toolkitSlice.reducer;