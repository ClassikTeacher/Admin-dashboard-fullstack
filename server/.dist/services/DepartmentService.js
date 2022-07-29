"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class DepartmentService {
  getAllDepartments() {
    return __awaiter(this, void 0, void 0, function* () {
      const allDepartment = yield prisma.department.findMany({});
      if (allDepartment) {
        return allDepartment;
      }
      throw new Error();
    });
  }
  getDepartment(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const department = yield prisma.department.findFirst({
        where: {
          id: id,
        },
        include: {
          employee_list: true,
        },
      });
      if (department) {
        return department;
      }
      throw new Error("undefineded department");
    });
  }
  addDepartment(name, date, amount_employee, department_head, description) {
    return __awaiter(this, void 0, void 0, function* () {
      const dateReg = new Date(date);
      const department = yield prisma.department.create({
        data: {
          name,
          date: dateReg,
          amount_employee,
          department_head,
          description,
        },
      });
      if (department) {
        return department;
      }
      throw new Error();
    });
  }
  deleteDepartment(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const employee = yield prisma.employee.deleteMany({
        where: {
          id_department: id,
        },
      });
      const department = yield prisma.department.delete({
        where: {
          id: id,
        },
      });
      if (department) {
        return department;
      }
      throw new Error("undefineded department");
    });
  }
}
module.exports = new DepartmentService();
//# sourceMappingURL=DepartmentService.js.map
