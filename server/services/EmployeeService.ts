import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EmployeeService {
  async getAllEmployees() {
    const allemployees = await prisma.employee.findMany({});
    if (allemployees) {
      return allemployees;
    }
    throw new Error();
  }

  async getEmployee(id: number) {
    const employee = await prisma.employee.findFirst({
      where: {
        id: id,
      },
    });
    if (employee) {
      return employee;
    }

    throw new Error("undefineded employee");
  }

  async addEmployee(
    first_name: string,
    last_name: string,
    date: string,
    company: string,
    position: string,
    department: string,
    department_head: boolean,
    id_department: number
  ) {
    const dateReg = new Date(date);
    const employee = await prisma.employee.create({
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
  }

  async deleteEmployee(id: number) {
    const employee = await prisma.employee.delete({
      where: {
        id: id,
      },
    });
    if (employee) {
      return employee;
    }

    throw new Error("undefineded employee");
  }
}

module.exports = new EmployeeService();
