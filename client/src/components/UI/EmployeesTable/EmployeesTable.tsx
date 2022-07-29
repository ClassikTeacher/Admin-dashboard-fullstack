import React, { FC } from "react";
import { IEmployee } from "../../../models/IEmployee";
import moment from "moment";
import styles from "./EmployeesTable.module.css";

interface EmployyesTableProps {
  filterEmployeeByName: IEmployee[] | undefined;
  funcDelete: (id: string) => Promise<void>;
}

const EmployeesTable: FC<EmployyesTableProps> = ({
  filterEmployeeByName,
  funcDelete,
}) => {
  function deleteEmployee(e: any) {
    funcDelete(e.target.id);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>firstname</th>
            <th>last name</th>
            <th>position</th>
            <th>date added</th>
          </tr>
        </thead>
        <tbody>
          {filterEmployeeByName?.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.position}</td>
              <td>{moment(item.date).format("yyyy-mm-DD")}</td>
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
