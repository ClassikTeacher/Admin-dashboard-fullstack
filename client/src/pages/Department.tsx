import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdmindashboardService from "../API/service/AdmindashboardService";
import { IDepartment } from "../models/IDepartment";
import styles from "./Department.module.css";
import MyButton from "../components/UI/MyButton/MyButton";
import { useAppDispatch, useAppSelector } from "../store/redux";
import { toolkitSlice } from "../store/toolkitSlice";
import EmployeesTable from "../components/UI/EmployeesTable/EmployeesTable";
import DepartmentInfo from "../components/UI/DepartmentInfo/DepartmentInfo";

const Department = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const reducersSlice = toolkitSlice.actions;
  const stateRedux = useAppSelector((state) => state.toolkitReduser);
  const [department, setDepartment] = useState<IDepartment>();
  const id: string = params.id == undefined ? "0" : params.id;

  function callModal() {
    dispatch(reducersSlice.selectionFormModal("employee"));
    dispatch(reducersSlice.switchvisibleModal(true));
  }

  async function getDepartment() {
    const depart = await AdmindashboardService.getDepartment(id);
    setDepartment(depart.data);
  }

  async function deleteEmployee(e: any) {
    const response = await AdmindashboardService.deleteEmployee(e.target.id);
    if (response) {
      getDepartment();
    } else {
      new Error("error delete employee");
    }
  }

  useEffect(() => {
    getDepartment();
  }, [stateRedux.employees]);

  return (
    <div className="dashboard">
      <DepartmentInfo
        department={department}
      />
      <div className={styles.employeesDepartment}>
        <div className={styles.employeesDepartment__header}>
          <h2> Employee </h2>
          <MyButton children={"add employye"} click={callModal} />
        </div>
        <EmployeesTable
        Employees={department?.employee_list}
        funcDelete={deleteEmployee}
        />
       
      </div>
    </div>
  );
};
export default Department;
