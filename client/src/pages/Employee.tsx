import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdmindashboardService from "../API/service/AdmindashboardService";
import { IEmployee } from "../models/IEmployee";
import moment from "moment";
import EmployeeInfo from "../components/UI/EmployeeInfo/EmployeeInfo";

const Employee = () => {
  const params = useParams();
  const id: string = params.id == undefined ? "0" : params.id;
  const [employee, setEmployee] = useState<IEmployee>();

  async function getDepartment() {
    const empl = await AdmindashboardService.getEmployee(id);
    setEmployee(empl.data);
  }

  useEffect(() => {
    getDepartment();
  }, []);

  return (
    <div className="dashboard">
      <EmployeeInfo employee={employee} />
    </div>
  );
};
export default Employee;
