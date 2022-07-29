import React, {
  ChangeEvent,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import styles from "./MyInput.module.css";

interface InputProps {
  nameInput: string;
  typeInput: string;
  valueForm: string | number | undefined | readonly string[];
  changeValue:
    | Dispatch<SetStateAction<string>>
    | Dispatch<SetStateAction<undefined>>
    | Dispatch<SetStateAction<number>>
    | Dispatch<SetStateAction<Date>>
    | Dispatch<SetStateAction<boolean>>;
}

const MyInput: FC<InputProps> = ({
  nameInput,
  typeInput,
  valueForm,
  changeValue,
}) => {
  function changeInput(e: any) {
    console.log(e.target.value);

    changeValue(e.target.value);
  }

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={`form${nameInput}`} className={styles.label}>
        {nameInput}
      </label>
      <input
        id={`form${nameInput}`}
        type={typeInput}
        className={styles.input}
        value={valueForm}
        onChange={(e) => changeInput(e)}
      />
      {/* <label htmlFor="" className={styles.feedback__errorLabel}>{`Ошибка в поле ${nameInput}`}</label> */}
    </div>
  );
};
export default MyInput;
