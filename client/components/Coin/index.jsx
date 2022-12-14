import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./coin.module.css";
import { GiBulletBill, GiTargetArrows } from "react-icons/gi";
import { useUser } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";
import { addCoinToUserFavorites, getUserFavorites } from "../../services/users.js";
import DOMpurify from "dompurify";

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

  const marketPrice = coin.market_data ? (
    <div className={styles.detailPagePrice}>
      <div>
        <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
        </div>
    </div>
  ) : null;

  const description = coin.description ? (
    <div className={styles.detailPageDescription}>
        <h3 className={styles.headers}>Description</h3>
        <p dangerouslySetInnerHTML={{
          __html: DOMpurify.sanitize(coin.description.en)
        }}>
        </p>
    </div>
  ) : null;

  const marketData = coin.market_data ? (
    <div className={styles.detailPageData}>
        <div>
          <p>Market Cap</p>
          <p>24h High</p>
          <p>24h Low</p>
          <p>24h Price Change</p>
          <p>24h Price Change Percent</p>
          <p>7 Day Price Change</p>
          <p>14 Day Price Change</p>
          <p>30 Day Price Change</p>
          <p>1 Year Price Change</p>
        </div>
        <div>
          <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
          <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
          <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
          <p>${coin.market_data.price_change_24h}</p>
          <p>{coin.market_data.price_change_percentage_24h}%</p>
          <p>{coin.market_data.price_change_percentage_7d}%</p>
          <p>{coin.market_data.price_change_percentage_14d}%</p>
          <p>{coin.market_data.price_change_percentage_30d}%</p>
          <p>{coin.market_data.price_change_percentage_1y}%</p>
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
            <h1>{marketPrice}</h1>
            <h3>Market Cap Rank: {coin.market_cap_rank}</h3>
            <button className={styles.favoriteButton} onClick={() => handleAddToFavorites(coin.id)}>
                                {
                  userFavorites?.coins_ids?.split(',').includes(coin.id) ? <GiTargetArrows /> : <GiBulletBill />
                                }
                    </button>
            <h1>{marketData}</h1>
            <p>{description}</p>
            {/* {coin.market_data?.current_price ? <p>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</p> : null} */}
        </div>
    )
}

