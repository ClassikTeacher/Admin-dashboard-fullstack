import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("/main");
  function click(e: any) {
    setActive(e.target.id);
  }
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list__headItem">
          <a  className='sidebar-list__link' href="#">User Name</a>
        </li>
        <li
          className={active === "/main" ? "sidebar-list__item  _active" : "sidebar-list__item "}
          id="/main"
          key={"/main"}
        >
          <Link 
          to="/main" 
          id="/main"  
          className='sidebar-list__link'
          key={"/main"} 
          onClick={(e) => click(e)}>
            Dashboard
          </Link>
        </li>
        <li className={active === "/departments" ? "sidebar-list__item _active" : "sidebar-list__item "}>
          <Link
            to="/departments"
            id="/departments"
            key={"/departments"}
            className='sidebar-list__link'
            onClick={(e) => click(e)}
          >
            Departments
          </Link>
        </li>
        <li className={active === "/employees" ? "sidebar-list__item  _active" : "sidebar-list__item "}>
          <Link
            to="/employees"
            id="/employees"
            key={"/employees"}
            className='sidebar-list__link'
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
