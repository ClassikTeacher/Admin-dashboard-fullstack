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
const moment = require("moment");
const departmentService = require("../services/DepartmentService");
const valid = require("../validator/Validator");
class DepartmentController {
    getAllDepartments(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield departmentService.getAllDepartments();
                res.json(response);
            }
            catch (e) {
                next(e);
            }
        });
    }
    getDepartment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const response = yield departmentService.getDepartment(Number(id));
                res.json(response);
            }
            catch (e) {
                next(e);
            }
        });
    }
    addDepartment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, date, amount_employee, department_head, description } = req.body;
                if (!valid.dateValidation(date)) {
                    throw new Error("invalid date");
                }
                const dateReg = moment(date).format("yyyy-MM-DD"); // валидация даты в формат
                const response = yield departmentService.addDepartment(name, dateReg, Number(amount_employee), department_head, description);
                res.json(response);
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteDepartment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const response = yield departmentService.deleteDepartment(Number(id));
                res.json(response);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
module.exports = new DepartmentController();
//# sourceMappingURL=DepartmentController.js.map