import React, { FC } from 'react'
import moment from 'moment'
import { IDepartment } from '../../../models/IDepartment'
import styles from './DepartmentInfo.module.css'


interface DepartmentInfoProps{
    department: IDepartment | undefined
}

const DepartmentInfo: FC<DepartmentInfoProps> = ({department})=>{
    return(
        <div className={styles.departmentInfo}>
        <h2 className={styles.departmentInfo_title}>Department</h2>
        <div className={styles.departmentInfo__item}>
          <h4>Name</h4>
          <p className={styles.departmentInfo__text}>{department?.name}</p>
        </div>
        <div className={styles.departmentInfo__item}>
          <h4>Date</h4>
          <p>{moment(department?.date).format("yyyy-mm-DD")}</p>
        </div>
        <div className={styles.departmentInfo__item}>
          <h4>Description</h4>
          <p>{department?.description}</p>
        </div>
        <div className={styles.departmentInfo__item}>
          <h4>Departmnet head</h4>
          <p>{department?.department_head}</p>
        </div>
      </div>
    )
}
export default DepartmentInfo