import { Link } from "react-router";

import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>
        Desenvolvido por <Link target="blank" to="https://github.com/Tophao2000">@Tophao2000</Link>
      </span>
    </footer>
  );
}

export default Footer;
