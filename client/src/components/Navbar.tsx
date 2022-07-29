import React from "react";
import ava from "../static/Person.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <button type="button" className='btn-sidebar'>Burger</button> */}
      <input type="text" id="search" placeholder="search" className="search" />
      <img src={ava} alt="avatar" className="img-avatar" />
    </div>
  );
};
export default Navbar;
