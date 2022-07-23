const moment = require('moment')
const departmentService = require('../services/DepartmentService')

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
            const {id} =req.body
            const headers = req.headers
            // const response = new Date(moment(id).format('yyyy-MM-DD'))
            const response = await departmentService.getDepartment(id)
            res.json(response)
        }catch(e){
            next(e)
        }
    }

    async addDepartment(req:any, res:any, next:Function){
        try{
            const {name, date, amount_employee, department_head, description} =req.body
            const headers = req.headers
            const dateReg = moment(date).format('yyyy-MM-DD') // валидация даты в формат
            const response = await departmentService.addDepartment(name, dateReg, amount_employee, department_head, description)
            res.json(response)
        }catch(e){
            next(e)
        }
    }

    async deleteDepartment(req:any, res:any, next:Function){
        try{
            const {id} =req.body
            const headers = req.headers
            const response = await departmentService.deleteDepartment(id)
            res.json(response)
        }catch(e){
            next(e)
        }
    }
}

module.exports = new DepartmentController()
export{}