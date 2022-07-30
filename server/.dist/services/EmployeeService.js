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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class EmployeeService {
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            const allemployees = yield prisma.employee.findMany({});
            if (allemployees) {
                return allemployees;
            }
            throw new Error();
        });
    }
    getEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield prisma.employee.findFirst({
                where: {
                    id: id,
                },
            });
            if (employee) {
                return employee;
            }
            throw new Error("undefineded employee");
        });
    }
    addEmployee(first_name, last_name, date, company, position, department, department_head, id_department) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateReg = new Date(date);
            const employee = yield prisma.employee.create({
                data: {
                    first_name,
                    last_name,
                    date: dateReg,
                    company,
                    position,
                    department,
                    department_head,
                    id_department,
                },
            });
            if (employee) {
                return employee;
            }
            throw new Error();
        });
    }
    deleteEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield prisma.employee.delete({
                where: {
                    id: id,
                },
            });
            if (employee) {
                return employee;
            }
            throw new Error("undefineded employee");
        });
    }
}
module.exports = new EmployeeService();
//# sourceMappingURL=EmployeeService.js.map