import { IEmployee } from "./IEmployee"

export interface IDepartment{
    id: number
    name: string,
    date: Date,
    amount_employee: number,
    department_head: string,
    description: string,
    employee_list: [IEmployee]
}