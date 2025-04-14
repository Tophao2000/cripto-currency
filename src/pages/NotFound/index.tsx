import { NavLink } from "react-router";

import "./style.css";

function NotFound() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <span>=(</span>
      <NavLink to="/">Voltar ao início</NavLink>
    </div>
  );
}

export default NotFound;
