import { NextFunction, Request, Response } from "express"

const moment = require('moment')
const departmentService = require('../services/DepartmentService')
const valid = require('../validator/Validator')

class DepartmentController {
    async getAllDepartments(req:Request, res:Response, next:NextFunction){
        try{
            const response = await departmentService.getAllDepartments()
            res.json(response)
        }catch(e){
            next(e)
        }
    }

    async getDepartment(req:Request, res:Response, next:NextFunction){
        try{
            const {id} = req.params
            const response = await departmentService.getDepartment(Number(id))
            res.json(response)
          
        }catch(e){
            next(e)
        }
    }

    async addDepartment(req:Request, res:Response, next:NextFunction){
        try{
            const {name, date, amount_employee, department_head, description} =req.body
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

    async deleteDepartment(req:Request, res:Response, next:NextFunction){
        try{
            const {id} = req.params
            const response = await departmentService.deleteDepartment(Number(id))
            res.json(response)
        }catch(e){
            next(e)
        }
    }
}

module.exports = new DepartmentController()
export{}