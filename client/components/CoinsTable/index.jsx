import { useState, useEffect } from "react";
import { getUserFavorites, addCoinToUserFavorites } from "../../services/users.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext.js";
import { GiBulletBill, GiTargetArrows } from "react-icons/gi";
import styles from './style.module.css';
import { Link } from "react-router-dom";
import Coin from '../Coin';

export default function CoinsTable({ data, refetchData = async () => false }) {
    const [userFavorites, setUserFavorites] = useState()
    const { user } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        //fetch userFavorites
        getUserFavorites()
            .then(res => setUserFavorites(res))

    }, [])

    const handleAddToFavorites = async (id) => {
        if (!user?.id) return navigate('/favorites')
        const newFavorites = await addCoinToUserFavorites(id)
        setUserFavorites(newFavorites)
        await refetchData()
    }

    return (
        <div className={styles.coinsTable}>
            {
            data.length ? <main className="main">
                <div className={styles.coinLabels}>
                    <p>Symbol</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Market Cap</p>
                    <p>24 Hour Price Change</p>
                    <p>Add to Bunker</p>
                </div>
                    {
                data.map(coin => {
                    return (
                <div key={coin.id} className={styles.coin}>
                        <img src={coin.image} alt={coin.name} />
                        <Link to={`/coin/${coin.id}`} element={<Coin />} ><p className="coin-name">{coin.name}</p>
                        </Link>
                        <p className="coin-price">${coin.current_price}</p>
                        <p className='market-cap'>${coin.market_cap.toLocaleString()}</p>
                        <p className="coin-price">% {coin.price_change_percentage_24h}</p>
                    <button className={styles.favoriteButton} onClick={() =>             handleAddToFavorites(coin.id)}>
                                {
                            userFavorites?.coins_ids?.split(',').includes(coin.id)
                                ? <GiTargetArrows /> : <GiBulletBill />
                                }
                    </button>
                </div>
                )
            })
            }
        </main>
        : <p className={styles.noCryptos}>Enlist to access your Bunker & add artillery.</p>
        }
     </div>
)}
