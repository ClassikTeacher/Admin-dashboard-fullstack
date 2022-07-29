import React, { ChangeEvent, useEffect, useState, useMemo } from "react";
import AdmindashboardService from "../API/service/AdmindashboardService";
import MyButton from "../components/UI/MyButton/MyButton";
import moment from "moment";
import { IEmployee } from "../models/IEmployee";
import { useAppDispatch, useAppSelector } from "../store/redux";
import { toolkitSlice } from "../store/toolkitSlice";
import styles from "./Employees.module.css";
import EmployeesTable from "../components/UI/EmployeesTable/EmployeesTable";

const Empoyees = () => {
  const dispatch = useAppDispatch();
  const reducersSlice = toolkitSlice.actions;
  const stateRedux = useAppSelector((state) => state.toolkitReduser);
  const [employees, setEmployees] = useState<IEmployee[]>(stateRedux.employees);
  const [inputValue, setInputValue] = useState<string>("");

  function callModal() {
    dispatch(reducersSlice.selectionFormModal("employee"));
    dispatch(reducersSlice.switchvisibleModal(true));
  }

  async function getEmployees() {
    const employees = await AdmindashboardService.fetchEmployees();
    setEmployees(employees.data);
  }

  async function deleteEmployee(id: string) {
    const response = await AdmindashboardService.deleteEmployee(id);
    if (response) {
      getEmployees();
    } else {
      new Error("error delete employee");
    }
  }

  const filterEmployeeByName = useMemo(() => {
    return [...employees].filter((item) =>
      item.first_name
        .toLocaleLowerCase()
        .includes(inputValue.toLocaleLowerCase())
    );
  }, [inputValue, employees]);
  function changeInputValue(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    getEmployees();
  }, [stateRedux.employees]);

  return (
    <div className={styles.employeesDepartment}>
      <div className={styles.employeesDepartment__header}>
        <h2> Employee </h2>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => changeInputValue(e)}
          placeholder="search employee"
        />
        <MyButton children={"add employye"} click={callModal} />
      </div>
      <EmployeesTable
        Employees={filterEmployeeByName}
        funcDelete={deleteEmployee}
      />
    </div>
  );
};
export default Empoyees;
