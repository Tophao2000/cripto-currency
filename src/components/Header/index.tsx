import { NavLink } from "react-router";

import logo from "../../assets/logo.svg";

import "./style.css";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="logo dev currency" />
      </NavLink>
    </header>
  );
}

export default Header;
