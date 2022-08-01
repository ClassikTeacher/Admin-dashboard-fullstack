import React, { FC } from "react";
import { IEmployee } from "../../../models/IEmployee";
import moment from "moment";
import styles from "./EmployeesTable.module.css";

interface EmployyesTableProps {
  Employees: IEmployee[] | undefined;
  funcDelete: (id: string) => Promise<void>;
}

const EmployeesTable: FC<EmployyesTableProps> = ({
    Employees,
  funcDelete,
}) => {
  function deleteEmployee(e: any) {
    funcDelete(e.target.id);
  }
  return (
    <div>
      <table className={styles.employeesDepartmentTable}>
        <thead>
          <tr>
            <th className={styles.employeesDepartmentTable__title}>firstname</th>
            <th className={styles.employeesDepartmentTable__title}>last name</th>
            <th className={styles.employeesDepartmentTable__title}>position</th>
            <th className={styles.employeesDepartmentTable__title}>date added</th>
          </tr>
        </thead>
        <tbody>
          {Employees?.map((item) => (
            <tr key={item.id}>
              <td className={styles.employeesDepartmentTable__text}>{item.first_name}</td>
              <td className={styles.employeesDepartmentTable__text}>{item.last_name}</td>
              <td className={styles.employeesDepartmentTable__text}>{item.position}</td>
              <td className={styles.employeesDepartmentTable__text}>{moment(item.date).format("yyyy-mm-DD")}</td>
              <td
                id={String(item.id)}
                onClick={(e) => deleteEmployee(e)}
                className={styles.deleteBtn}
              >
                delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeesTable;
