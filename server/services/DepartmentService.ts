import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DepartmentService {
  async getAllDepartments() {
    const allDepartment = await prisma.department.findMany({});
    if (allDepartment) {
      return allDepartment;
    }
    throw new Error();
  }

  async getDepartment(id: number) {
    const department = await prisma.department.findFirst({
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
  }

  async addDepartment(
    name: string,
    date: string,
    amount_employee: number,
    department_head: string,
    description: string
  ) {
    const dateReg = new Date(date);
    const department = await prisma.department.create({
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
  }

  async deleteDepartment(id: number) {
    const employee = await prisma.employee.deleteMany({
      where: {
        id_department: id,
      },
    });

    const department = await prisma.department.delete({
      where: {
        id: id,
      },
    });
    if (department) {
      return department;
    }

    throw new Error("undefineded department");
  }
}

module.exports = new DepartmentService();
