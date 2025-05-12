import { Outlet } from "react-router";

import Header from "../Header";
import Footer from "../Footer";

import "./style.css";

function Layout () {
  return (
    <>
      <Header />
      <main className="main-container">
       <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
