import { element } from "prop-types";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/index";
import Main from "../pages/Main";
import Department from "../pages/Department";
import Departments from "../pages/Departments";
import Employees from "../pages/Employees";
import Employee from "../pages/Employee";
const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Main />} path={"/main"} key={"/main"} />
      <Route
        element={<Department />}
        path={"/department/:id"}
        key={"/department/:id"}
      />
      <Route
        element={<Departments />}
        path={"/departments"}
        key={"/departments"}
      />
      <Route
        element={<Employee />}
        path={"/employee/:id"}
        key={"/employee/:id"}
      />
      <Route element={<Employees />} path={"/employees"} key={"/employees"} />
      <Route element={<Main />} path={"/"} key={"/"} />
    </Routes>
  );
};
export default AppRouter;
