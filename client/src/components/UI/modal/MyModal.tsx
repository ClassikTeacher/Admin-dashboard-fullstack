import React, { FC, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/redux";
import { toolkitSlice } from "../../../store/toolkitSlice";
import styles from "./MyModal.module.css";

interface ModalProps {
  // cildren: any : FC
  children: ReactElement | ReactElement[];
}

const MyModal: FC<ModalProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const reducersSlice = toolkitSlice.actions;
  const visible = useAppSelector((state) => state.toolkitReduser.visibleModal);
  const rootClasses = [styles.modal];
  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div
      onClick={() => dispatch(reducersSlice.switchvisibleModal(false))}
      className={rootClasses.join(" ")}
    >
      <div className={styles.modalForm} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default MyModal;
