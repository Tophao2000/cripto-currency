// import { useState, useEffect } from "react";
import { NavLink } from "react-router";

import { FaSearch } from "react-icons/fa";

import style from "./style.module.css";

function Home() {
  return (
    <section className={style.container}>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Pesquisar pelo nome da moeda... Ex: bitcoin"
        />
        <button type="submit">
          <FaSearch size={30} color="#ffffff" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor de mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Mudança 24h</th>
          </tr>
        </thead>

        <tbody id="tbody">
          <tr className={style["table-row"]}>

            <td className={style.tdLabel} data-label="Moeda">
              <div className={style.name}>
                <NavLink to={"/detalhes/bitcoin"}>
                  <span>Bitcoin</span> | BTC
                </NavLink>
              </div>
            </td>

            <td className={style.tdLabel} data-label="Valor de mercado">
              1T
            </td>

            <td className={style.tdLabel} data-label="Preço">
              US$ 50.000,00
            </td>

            <td className={style.tdLabel} data-label="Volume">
              2B
            </td>

            <td className={style.tdProfit} data-label="Mudança 24h">
              <span>1.20%</span>
            </td>

          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Home;
