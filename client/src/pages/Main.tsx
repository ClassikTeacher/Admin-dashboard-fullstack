import React, { FC, useState, useEffect, useMemo } from "react";
import DepartmentTable from "../components/UI/DepartmentModule/DepartmentTable";
import EmployeesList from "../components/UI/EmployeesModule/EmployeesList";
import { IDepartment } from "../models/IDepartment";
import { IEmployee } from "../models/IEmployee";
import AdmindashboardService from "../API/service/AdmindashboardService";
import { useAppSelector, useAppDispatch } from "../store/redux";

const Main = () => {
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const statesRedux = useAppSelector((state) => state.toolkitReduser);

  const topDepartment = useMemo(() => {
    const sortDepartment = [...statesRedux.departments].sort(
      (a, b) => b.amount_employee - a.amount_employee
    );
    return sortDepartment.slice(0, 5);
  }, [statesRedux.departments]);

  const lastEmployees = useMemo(() => {
    const sortEmployees = [...statesRedux.employees].sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return sortEmployees.slice(0, 5);
  }, [statesRedux.employees]);

  useEffect(() => {
    setDepartments(statesRedux.departments);
    setEmployees(statesRedux.employees);
  }, [departments, employees]);

  return (
    <div className="dashboard">
      <div className="departments-wrapper">
        <DepartmentTable
          departments={topDepartment}
          title={"Top 5 departments"}
        />
      </div>
      <EmployeesList employees={lastEmployees} title="Last employees" />
    </div>
  );
};
export default Main;
