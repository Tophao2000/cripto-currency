import { NavLink } from "react-router";

import logo from "../../assets/logo.svg";

import style from "./style.module.css";

function Header() {
  return (
    <header className={style.container}>
      <NavLink to="/">
        <img src={logo} alt="Logo Dev Currency" />
      </NavLink>
    </header>
  );
}

export default Header;
