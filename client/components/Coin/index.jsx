import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./coin.module.css";

export default function Coin() {
  const [coin, setCoin] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(coin);

    return (
        <div className={styles.detailPage}>
            <h1>Details Page</h1>
            <h1>{coin.name}</h1>
            {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
        </div>
    )
}
