import React, { ReactElement, useEffect, useState } from "react";
import { IDepartment } from "./models/IDepartment";
import { IEmployee } from "./models/IEmployee";
import "./styles/App.css";
import AdmindashboardService from "./API/service/AdmindashboardService";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { toolkitSlice } from "./store/toolkitSlice";
import { useAppDispatch, useAppSelector } from "./store/redux";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import FormDepartment from "./components/UI/FormDepartment/FormDepartment";
import Department from "./pages/Department";
import FromEmployee from "./components/UI/FormEmployee/FromEmployee";

function App() {
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [formElement, setFormElement] = useState<ReactElement | ReactElement[]>(
    <div></div>
  );
  const reducersSlice = toolkitSlice.actions;
  const dispatch = useAppDispatch();
  const reduxStore = useAppSelector((state) => state.toolkitReduser);

  async function fetchData() {
    const responseDepartment = await AdmindashboardService.fetchDepartment();
    const responseEmployee = await AdmindashboardService.fetchEmployees();
    setDepartments(responseDepartment.data);
    setEmployees(responseEmployee.data);
  }

  function changeFormElement() {
    switch (reduxStore.modalForm) {
      case "":
        setFormElement(
          <MyButton children="sss" click={() => console.log(1)} />
        );
        break;
      case "department":
        setFormElement(<FormDepartment />);
        break;
      case "employee":
        setFormElement(<FromEmployee />);
        break;
      default:
        setFormElement(
          <MyButton children="ssasdfasdfs" click={() => console.log(1)} />
        );
        break;
    }
  }

  useEffect(() => {
    changeFormElement();
  }, [reduxStore.modalForm]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(reducersSlice.fetchDepartment(departments));
    dispatch(reducersSlice.fetchEmployees(employees));
  }, [departments, employees]);

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content-container">
          <Navbar />
          <AppRouter />
          <MyModal>{formElement}</MyModal>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
