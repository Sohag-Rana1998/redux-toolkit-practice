import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-slate-300">
      <ul className="flex justify-center items-center gap-5">
        <NavLink to={"/"} className="btn bg-blue-500">
          {" "}
          <li>Home</li>
        </NavLink>
        <NavLink to={"/login"} className="btn bg-blue-500">
          {" "}
          <li>Login</li>
        </NavLink>
        <NavLink to={"/register"} className="btn bg-blue-500">
          {" "}
          <li>Register</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
