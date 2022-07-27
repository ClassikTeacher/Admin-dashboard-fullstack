
export class Department{
    id: number
    name: string
    date: string
    amount_employee: number
    department_head: string
    description:string

    constructor(name: string, date: string, amount_employee: number, department_head: string, description:string){
        this.id = Math.random()
        this.name = name
        this.date = date
        this.amount_employee = amount_employee
        this.department_head = department_head
        this.description = description
    }

    initNewForm(){
       return new Department('', '', 0, '', '')
    }

}