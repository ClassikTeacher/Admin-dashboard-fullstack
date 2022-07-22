-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount_employee" INTEGER NOT NULL,
    "department_head" VARCHAR(30) NOT NULL,
    "description" VARCHAR(200) NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(20) NOT NULL,
    "last_name" VARCHAR(20) NOT NULL,
    "company" VARCHAR(30) NOT NULL,
    "department" VARCHAR(30) NOT NULL,
    "position" VARCHAR(50) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "id_department" INTEGER NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_id_department_fkey" FOREIGN KEY ("id_department") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
