import React, { ChangeEvent, FC, ReactElement, useState } from "react";
import MyButton from "../MyButton/MyButton";
import styles from "./DepartmentTable.module.css";
import { IDepartment } from "../../../models/IDepartment";
import moment from "moment";
import { click } from "@testing-library/user-event/dist/click";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/redux";
import { toolkitSlice } from "../../../store/toolkitSlice";
import AdmindashboardService from "../../../API/service/AdmindashboardService";

interface DepartmentTableProps {
  departments: IDepartment[];
  title: string;
}

const DepartmentTable: FC<DepartmentTableProps> = ({ departments, title }) => {
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const statesRedux = useAppSelector((state) => state.toolkitReduser);
  const reducersSlice = toolkitSlice.actions;
  function click(item: any) {
    router("/department/" + item.id);
    console.log(item);
  }

  function createDepartment() {
    dispatch(reducersSlice.selectionFormModal("department"));
    dispatch(reducersSlice.switchvisibleModal(true));
  }

  async function deleteDepartment(e: any) {
    e.stopPropagation();
    console.log(e.target.id);

    const response = await AdmindashboardService.deleteDepartment(e.target.id);
    if (response) {
      const newDepartments = [
        ...departments.filter((item) => item.id !== e.target.id),
      ];
      dispatch(reducersSlice.fetchDepartment(newDepartments));

      console.log(response);
    } else {
      new Error("error delete Departmnet");
    }
  }

  return (
    <div className={styles.departmentModule}>
      <div className={styles.departmentModule__header}>
        <h2 className={styles.departmentModule__header__title}>{title}</h2>
        {title === "Departments" ? (
          <MyButton children="All departments" click={createDepartment} />
        ) : (
          <div></div>
        )}
      </div>
      <table className={styles.departmentModuleTable}>
        <thead>
          <tr >
            <th className={styles.departmentModuleTable_title}>Name</th>
            <th className={styles.departmentModuleTable_title}>Date of creation</th>
            <th className={styles.departmentModuleTable_title}>Departmnet head</th>
            <th className={styles.departmentModuleTable_title}>Amount Employee</th>
            <th className={styles.departmentModuleTable_title}>description</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((item) => (
            <tr className={styles.departmentModuleTable__row} key={item.id} onClick={() => click(item)}>
              <td className={styles.departmentModuleTable__text__name}>{item.name}</td>
              <td  className={styles.departmentModuleTable__text__data}>{moment(item.date).format("yyyy-mm-DD")}</td>
              <td  className={styles.departmentModuleTable__text__head}>{item.department_head}</td>
              <td  className={styles.departmentModuleTable__text__amount}>{item.amount_employee}</td>
              <td  className={styles.departmentModuleTable__text__description}>{item.description}</td>
              {title === "Departments" ? (
                <td
                  id={String(item.id)}
                  onClick={(e) => deleteDepartment(e)}
                  className={styles.deleteBtn}
                >
                  delete
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DepartmentTable;
