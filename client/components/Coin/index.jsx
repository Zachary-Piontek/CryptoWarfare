import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./coin.module.css";
import { GiBulletBill, GiTargetArrows } from "react-icons/gi";
import { useUser } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";
import { addCoinToUserFavorites, getUserFavorites } from "../../services/users.js";

export default function Coin() {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const [userFavorites, setUserFavorites] = useState();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, []);

  const marketData = coin.market_data ? (
    <div className={styles.detailPageData}>
        <div>
          <p>Current Price</p>
          <p>Market Cap</p>
          <p>24h High</p>
          <p>24h Low</p>
          <p>24h Price Change</p>
          <p>24h Price Change Percentage</p>
          <p>7 Day Price Change</p>
        </div>
        <div>
          <p>${coin.market_data.current_price.usd}</p>
          <p>${coin.market_data.market_cap.usd}</p>
          <p>${coin.market_data.high_24h.usd}</p>
          <p>${coin.market_data.low_24h.usd}</p>
          <p>${coin.market_data.price_change_24h}</p>
          <p>{coin.market_data.price_change_percentage_24h}%</p>
          <p>{coin.market_data.price_change_percentage_7d}%</p>
        </div>
    </div>
  ) : null;

  const handleAddToFavorites = async (id) => {
    if (!user?.id) return navigate('/favorites')
    const newFavorites = await addCoinToUserFavorites(id)
    setUserFavorites(newFavorites)
}

useEffect(() => {
  //fetch userFavorites
  getUserFavorites()
      .then(res => setUserFavorites(res))

}, [])


  console.log(coin);

    return (
        <div className={styles.detailPage}>
            <h1>{coin.name}</h1>
            {coin.image ? <img src={coin.image.large} alt={coin.name} /> : null}
            <h3>Market Cap Rank: {coin.market_cap_rank}</h3>
            <button className={styles.favoriteButton} onClick={() =>             handleAddToFavorites(coin.id)}>
                                {
                            userFavorites?.coins_ids?.split(',').includes(coin.id)
                                ? <GiTargetArrows /> : <GiBulletBill />
                                }
                    </button>
            <h1>{marketData}</h1>
        </div>
    )
}

