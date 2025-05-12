/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router";

import { api, apiKey } from "../../services/api";

import { CoinProps, DetailDataProps } from "../../interfaces/apiProps";

import { formatPrice, formatPriceCompact } from "../../utils/coinFormat";

import style from "./style.module.css";

function Detail() {
  const { cripto } = useParams();
  const navigate = useNavigate();

  const [coin, setCoin] = useState<CoinProps>();

  useEffect(() => {
    async function getData() {
      await api
        .get<DetailDataProps>(`/assets/${cripto}`, {
          params: {
            apiKey:
              apiKey,
          },
        })
        .then((response) => {
          const coinData = response.data.data;

          const formatedResult = {
            ...coinData,
            formatedPrice: formatPrice.format(Number(coinData.priceUsd)),
            formatedMarketCap: formatPriceCompact.format(
              Number(coinData.marketCapUsd)
            ),
            formatedVolume: formatPriceCompact.format(
              Number(coinData.volumeUsd24Hr)
            ),
          };

          setCoin(formatedResult);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }
    getData();
  }, [cripto]);

  if (!coin) {
    return (
      <div className={style.container}>
        <div className={style.centerSkeleton}></div>
        <div className={style.centerSkeleton}></div>

        <div className={style.contentSkeleton}></div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h1 className={style.center}>{coin?.name}</h1>
      <h1 className={style.center}>{coin?.symbol}</h1>

      <section className={style.content}>
        <img
          src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLowerCase()}@2x.png`}
          alt="Logo da moeda"
          className={style.logo}
        />

        <h2>
          {coin?.name} | {coin?.symbol}
        </h2>
        <span>
          <strong>Preço:</strong> {coin?.formatedPrice}
        </span>
        <span>
          <strong>Mercado:</strong> {coin?.formatedMarketCap}
        </span>
        <span>
          <strong>Volume:</strong> {coin?.formatedVolume}
        </span>
        <span>
          <strong>Mudança em 24h:</strong>{" "}
          <span
            className={
              Number(coin.changePercent24Hr) > 0 ? style.profit : style.loss
            }
          >
            {Number(coin.changePercent24Hr).toFixed(2)}%
          </span>
        </span>
      </section>
    </div>
  );
}

export default Detail;
