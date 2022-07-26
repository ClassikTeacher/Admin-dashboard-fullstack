
export class Department{
    id: number
    name: string
    date: Date
    amount_employee: number
    department_head: string
    description:string

    constructor(id: number, name: string, date: Date, amount_employee: number, department_head: string, description:string){
        this.id = id
        this.name = name
        this.date = date
        this.amount_employee = amount_employee
        this.department_head = department_head
        this.description = description
    }

    

}