"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const employeeService = require('../services/EmployeeService');
const moment = require('moment');
const valid = require('../validator/Validator');
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class EmployeeController {
    getAllEmployees(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield employeeService.getAllEmployees();
                res.json(response);
            }
            catch (e) {
                console.log(e);
                next(e);
            }
        });
    }
    getEmployee(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const response = yield employeeService.getEmployee(Number(id));
                res.json(response);
            }
            catch (e) {
                console.log(e);
                next(e);
            }
        });
    }
    addEmployee(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { first_name, last_name, date, company, position, department, department_head, id_department } = req.body;
                if (!valid.dateValidation(date)) {
                    throw new Error('invalid date');
                }
                if ((yield valid.validationDepartmentHead(id_department)) && department_head) {
                    throw new Error('already have a head of department');
                }
                const dateReg = moment(date).format('yyyy-MM-DD');
                const response = yield employeeService.addEmployee(first_name, last_name, dateReg, company, position, department, department_head, Number(id_department));
                res.json(response);
            }
            catch (e) {
                console.log(e);
                next(e);
            }
        });
    }
    deleteEmployee(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const response = yield employeeService.deleteEmployee(Number(id));
                res.json(response);
            }
            catch (e) {
                console.log(e);
                next(e);
            }
        });
    }
}
module.exports = new EmployeeController();
//# sourceMappingURL=EmpoyeeCoontroller.js.map