import { AxiosResponse } from 'axios'
import { IDepartment } from '../../models/IDepartment'
import { IEmployee } from '../../models/IEmployee'
import api from '../http/index'

export default class AdmindashboardService{
    static async fetchDepartment(): Promise<AxiosResponse<IDepartment[]>>{
        const department = await api.get<IDepartment[]>('/alldepartments')
        return department
    }

    static async fetchEmployees(): Promise<AxiosResponse<IEmployee[]>>{
        const employee = api.get<IEmployee[]>('/allemployees')
         return employee
    }

    static async getDepartment(id:number):Promise<AxiosResponse<IDepartment>>{
        const department = await api.get<IDepartment>('/department/'+{id})
        return department  
    }

    static async createDepartment(id: number, name: string, date: Date, amount_employee: number,
         department_head: string, description: string):Promise<AxiosResponse<IDepartment>>{
        const department = await api.post<IDepartment>('/department', {id, name, date, amount_employee, department_head, description})
        return department
    }

    static async deleteDepartment(id:number):Promise<AxiosResponse<IDepartment>>{
        const department = await api.delete<IDepartment>('/department/'+{id})
        return department    
    }

    static async getEmployee(id:number):Promise<AxiosResponse<IEmployee>>{
        const employee = await api.get<IEmployee>('/employee/'+{id})
        return employee     
    }

    static async createEmployee(id: number, first_name: string, last_name: string, company: string, department: string, 
        position: string, date: Date, department_head: boolean, id_department: number):Promise<AxiosResponse<IEmployee>>{
        const employee = await api.post<IEmployee>('/employee', {id, first_name, last_name, company, 
            department, position, date, department_head, id_department})
        return employee
    }

    static async deleteEmployee(id:number):Promise<AxiosResponse<IEmployee>>{
        const employee = await api.delete<IEmployee>('/employee/'+{id})
        return employee 
    }


    
}