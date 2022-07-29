import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class Validation {
  dateValidation(date: string) {
    const arrDate = date.split("-");
    const validDate = new Date(
      Number(arrDate[0]),
      Number(arrDate[1]) - 1,
      Number(arrDate[2])
    );
    if (
      validDate.getFullYear() === Number(arrDate[0]) &&
      validDate.getMonth() === Number(arrDate[1]) - 1 &&
      validDate.getDate() === Number(arrDate[2])
    ) {
      return true;
    }
    return false;
  }

  async validationDepartmentHead(id: number) {
    const head = await prisma.department.findFirst({
      where: {
        AND: [
          {
            id: id,
            employee_list: {
              some: {
                department_head: true,
              },
            },
          },
        ],
      },
    });

    return head;
  }
}

module.exports = new Validation();
