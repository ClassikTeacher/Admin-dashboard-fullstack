import React, {
  ChangeEvent,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import { useAppSelector } from "../../../store/redux";
import { toolkitSlice } from "../../../store/toolkitSlice";
import styles from "./MySelect.module.css";

export interface IOptions {
  value: string | number;
  name: string;
}

interface SelectProps {
  nameInput: string;
  options: IOptions[];
  valueSelect: string | number;
  defaultValue: string;
  changeValue:
    | Dispatch<SetStateAction<string>>
    | Dispatch<SetStateAction<number>>;
}

const MySelect: FC<SelectProps> = ({
  nameInput,
  defaultValue,
  options,
  changeValue,
  valueSelect,
}) => {
  const reduxActions = toolkitSlice.actions;
  const reduxStore = useAppSelector((state) => state.toolkitReduser);

  function changeInput(e: any) {
    console.log(e.target.value);

    changeValue(e.target.value);
  }
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={`form${nameInput}`} className={styles.feedback__label}>
        {nameInput}
      </label>
      <select
        className={styles.select}
        value={valueSelect}
        onChange={(e) => changeInput(e)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default MySelect;
