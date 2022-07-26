const employeeService = require('../services/EmployeeService')
const moment = require('moment')
const valid = require('../validator/Validator')
import { PrismaClient } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'


const prisma = new PrismaClient()

class EmployeeController {
    async getAllEmployees(req:Request, res:Response, next:NextFunction){
        try{
            const response = await employeeService.getAllEmployees()
            res.json(response)
        }catch(e){
            console.log(e)
            next(e)
        }
    }
    async getEmployee(req:Request, res:Response, next:NextFunction){
        try{
            const {id} = req.params
            const response = await employeeService.getEmployee(Number(id))
            res.json(response)
        }catch(e){
            console.log(e)
            next(e)
        }
    }

    async addEmployee(req:Request, res:Response, next:NextFunction){
        try{
            const {first_name, last_name, date, company, position, department, department_head, id_department} = req.body

            if(!valid.dateValidation(date)){
                throw new Error('invalid date')
            }
            if(await valid.validationDepartmentHead(id_department) && department_head){
                throw new Error('already have a head of department')
            }
            const dateReg = moment(date).format('yyyy-MM-DD')
            const response = await employeeService.addEmployee(first_name, last_name, dateReg, company, position, department, department_head, id_department)
            res.json(response)
        }catch(e){
            console.log(e)
            next(e)
        }
    }

    async deleteEmployee(req:Request, res:Response, next:NextFunction){
        try{
            const {id} = req.params
            const response = await employeeService.deleteEmployee(Number(id))
            res.json(response)
        }catch(e){
            console.log(e)
            next(e)
        }
    }
}

module.exports = new EmployeeController()