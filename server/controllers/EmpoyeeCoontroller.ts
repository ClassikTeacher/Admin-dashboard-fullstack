const employeeService = require('../services/EmployeeService')
const moment = require('moment')
const valid = require('../validator/Validator')

class EmployeeController {
    async getAllEmployees(req:any, res:any, next:Function){
        try{
            const headers = req.headers
            const response = await employeeService.getAllEmployees()
            res.json(response)
        }catch(e){
            console.log(e)
            next(e)
        }
    }
    async getEmployee(req:any, res:any, next:Function){
        try{
            const {id} =req.body
            const headers = req.headers
            const response = await employeeService.getEmployee(id)
            res.json(response)
        }catch(e){
            console.log(e)
            next(e)
        }
    }

    async addEmployee(req:any, res:any, next:Function){
        try{
            const {first_name, last_name, date, company, position, department, department_head, id_department} = req.body
            const headers = req.headers
            if(!valid.dateValidation(date)){
                throw new Error('invalid date')
            }
            const dateReg = moment(date).format('yyyy-MM-DD')
            const response = await employeeService.addEmployee(first_name, last_name, dateReg, company, position, department, department_head, id_department)
            res.json(response)
        }catch(e){
            console.log(e)
            next(e)
        }
    }

    async deleteEmployee(req:any, res:any, next:Function){
        try{
            const {id} =req.body
            const headers = req.headers
            const response = await employeeService.deleteEmployee(id)
            res.json(response)
        }catch(e){
            console.log(e)
        }
    }
}

module.exports = new EmployeeController()