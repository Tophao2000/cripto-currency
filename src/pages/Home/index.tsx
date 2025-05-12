/* eslint-disable react-hooks/exhaustive-deps */

// components
import Skeleton from "../../components/Skeleton";

// hooks
import { useState, FormEvent, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";

// icons
import { FaSearch } from "react-icons/fa";

// services
import { api, apiKey } from "../../services/api";

// utils
import { formatPrice, formatPriceCompact } from "../../utils/coinFormat";

// interfaces
import { CoinProps, DataProps } from "../../interfaces/apiProps";

// styles
import style from "./style.module.css";

function Home() {
  const [input, setInput] = useState("");
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [offset, setOffset] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [offset]);

  // Função para buscar as moedas na API e deixar seus valores formatados
  async function getData() {
    await api
      .get<DataProps>("/assets", {
        params: {
          limit: 10,
          offset: offset,
          apiKey:
            apiKey,
        },
      })
      .then((response) => {
        const coinsData = response.data.data;


        const formatedResult = coinsData.map((item) => {
          const formated = {
            ...item,
            formatedPrice: formatPrice.format(Number(item.priceUsd)),
            formatedMarketCap: formatPriceCompact.format(
              Number(item.marketCapUsd)
            ),
            formatedVolume: formatPriceCompact.format(
              Number(item.volumeUsd24Hr)
            ),
          };
          return formated;
        });

        const coinsLists = [...coins, ...formatedResult];

        setCoins(coinsLists);

      })
      .catch(() => navigate("/"));
  }

  // Função para navegar para a tela de detalhes da moeda
  function navigateToDetails(event: FormEvent) {
    event.preventDefault();
    navigate(`/detalhes/${input}`, { replace: true });
  }

  function getMore() {
    setOffset(offset + 10);
  }

  if (coins.length === 0) {
    return (
      <Skeleton />
    );
  }

  return (
    <section className={style.container} onSubmit={navigateToDetails}>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Pesquisar pelo nome da moeda... Ex: bitcoin"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
          {coins.length > 0 &&
            coins.map((coin) => (
              <tr className={style["table-row"]} key={coin.id}>
                <td className={style.tdLabel} data-label="Moeda">

                  <NavLink to={`/detalhes/${coin.id}`} className={style.name}>
                    <img
                      className={style.logo}
                      src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                      alt="Logo da criptomoeda"
                    />

                      <span>{coin.name}</span> | {coin.symbol}
                    </NavLink>

                </td>

                <td className={style.tdLabel} data-label="Valor de mercado">
                  {coin.formatedMarketCap}
                </td>

                <td className={style.tdLabel} data-label="Preço">
                  {coin.formatedPrice}
                </td>

                <td className={style.tdLabel} data-label="Volume">
                  {coin.formatedVolume}
                </td>

                <td
                  className={
                    Number(coin.changePercent24Hr) > 0
                      ? style.tdProfit
                      : style.tdLoss
                  }
                  data-label="Mudança 24h"
                >
                  <span>{Number(coin.changePercent24Hr).toFixed(2)}%</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button type="button" className={style.showMoreButton} onClick={getMore}>
        Mostrar mais
      </button>
    </section>
  );
}

export default Home;
