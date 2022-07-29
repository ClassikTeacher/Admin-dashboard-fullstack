import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("/main");
  function click(e: any) {
    setActive(e.target.id);
  }
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">User Name</a>
        </li>
        <li
          className={active === "/main" ? "active" : ""}
          id="/main"
          key={"/main"}
        >
          <Link to="/main" id="/main" key={"/main"} onClick={(e) => click(e)}>
            Dashboard
          </Link>
        </li>
        <li className={active === "/departments" ? "active" : ""}>
          <Link
            to="/departments"
            id="/departments"
            key={"/departments"}
            onClick={(e) => click(e)}
          >
            Departments
          </Link>
        </li>
        <li className={active === "/employees" ? "active" : ""}>
          <Link
            to="/employees"
            id="/employees"
            key={"/employees"}
            onClick={(e) => click(e)}
          >
            Employyes
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
