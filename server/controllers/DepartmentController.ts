const moment = require('moment')
const departmentService = require('../services/DepartmentService')
const valid = require('../validator/Validator')

class DepartmentController {
    async getAllDepartments(req:any, res:any, next:Function){
        try{
            const body =req.body
            const headers = req.headers
            const response = await departmentService.getAllDepartments()
            res.json(response)
        }catch(e){
            next(e)
        }
    }

    async getDepartment(req:any, res:any, next:Function){
        try{
            const {id} = req.params
            const headers = req.headers
            const response = await departmentService.getDepartment(Number(id))
            res.json(response)
          
        }catch(e){
            next(e)
        }
    }

    async addDepartment(req:any, res:any, next:Function){
        try{
            const {name, date, amount_employee, department_head, description} =req.body
            const headers = req.headers
            if(!valid.dateValidation(date)){
                throw new Error('invalid date')
            }
            const dateReg = moment(date).format('yyyy-MM-DD') // валидация даты в формат
            const response = await departmentService.addDepartment(name, dateReg, amount_employee, department_head, description)
            res.json(response)
        }catch(e){
            next(e)
        }
    }

    async deleteDepartment(req:any, res:any, next:Function){
        try{
            const {id} = req.params
            const headers = req.headers
            const response = await departmentService.deleteDepartment(Number(id))
            res.json(response)
        }catch(e){
            next(e)
        }
    }
}

module.exports = new DepartmentController()
export{}