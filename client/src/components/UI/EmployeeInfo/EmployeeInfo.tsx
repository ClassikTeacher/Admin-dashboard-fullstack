import React, { FC } from "react";
import styles from "./EmployeeInfo.module.css";
import moment from "moment";
import { IEmployee } from "../../../models/IEmployee";

interface EmployeeInfoProps {
  employee: IEmployee | undefined;
}

const EmployeeInfo: FC<EmployeeInfoProps> = ({ employee }) => {
  return (
    <div className={styles.employeeInfo}>
      <h2 className={styles.employeeInfo__title}>Department</h2>
      <div className={styles.employeeInfo__item}>
        <h4>First Name</h4>
        <p className={styles.employeeInfo__text}>{employee?.first_name}</p>
      </div>
      <div className={styles.employeeInfo__item}>
        <h4>Last Name</h4>
        <p className={styles.employeeInfo__text}>{employee?.last_name}</p>
      </div>
      <div className={styles.employeeInfo__item}>
        <h4>Date</h4>
        <p className={styles.employeeInfo__text}>{moment(employee?.date).format("yyyy-mm-DD")}</p>
      </div>
      <div className={styles.employeeInfo__item}>
        <h4>Position</h4>
        <p className={styles.employeeInfo__text}>{employee?.position}</p>
      </div>
      <div className={styles.employeeInfo__item}>
        <h4>Company</h4>
        <p className={styles.employeeInfo__text}>{employee?.company}</p>
      </div>
      <div className={styles.employeeInfo__item}>
        <h4>Department</h4>
        <p className={styles.employeeInfo__text}>{employee?.department}</p>
      </div>
    </div>
  );
};
export default EmployeeInfo;
