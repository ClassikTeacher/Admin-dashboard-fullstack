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

    static async getDepartment(id:string):Promise<AxiosResponse<IDepartment>>{
        if(id === '0'){
            throw new Error('invalid department')
        }
        const department = await api.get<IDepartment>('/department/'+id)
        return department  
    }

    static async createDepartment( name: string, date: string, amount_employee: number,
         department_head: string, description: string):Promise<AxiosResponse<IDepartment>>{
        const department = await api.post<IDepartment>('/department', {name, date, amount_employee, department_head, description})
        return department
    }

    static async deleteDepartment(id:string):Promise<AxiosResponse<IDepartment>>{
        console.log(id)
        const department = await api.delete<IDepartment>('/department/'+id)
        return department    
    }

    static async getEmployee(id:string):Promise<AxiosResponse<IEmployee>>{
        if(id === '0'){
            throw new Error('invalid Employee')
        }
        const employee = await api.get<IEmployee>('/employee/'+id)
        return employee     
    }

    static async createEmployee(first_name: string, last_name: string, company: string, department: string, 
        position: string, date: string, department_head: boolean, id_department: number):Promise<AxiosResponse<IEmployee>>{
        const employee = await api.post<IEmployee>('/employee', {first_name, last_name, company, 
            department, position, date, department_head, id_department})
        return employee
    }

    static async deleteEmployee(id:string):Promise<AxiosResponse<IEmployee>>{
        // const options = await api.options('/employee/'+{id})
        // console.log(options)
        // if(options.status == 204){
           
             
        // }
        const employee = await api.delete<IEmployee>('/employee/'+id)
        return employee
        
        
    }


    
}