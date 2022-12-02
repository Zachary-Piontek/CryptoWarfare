import { useState, useEffect } from "react";
import { getUserFavorites, addCoinToUserFavorites } from "../../services/users.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext.js";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from './style.module.css';

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
        <div className="coinstable">
            {
            data.length ? <main className="main">
                <div>
                    <p id="label">Symbol</p>
                    <p className="label">Name</p>
                    <p className="label">Price</p>
                    <p className='label'>Market Cap</p>
                    <p className="label">24 Hour Price Change</p>
                    <p className="label">Add to Bunker</p>
                </div>
                    {
                data.map(coin => {
                    return (
                <div key={coin.id}>
                        <img src={coin.image} alt={coin.name} />
                        <p className="coin-name">{coin.name}</p>
                        <p className="coin-price">${coin.current_price}</p>
                        <p className='market-cap'>${coin.market_cap.toLocaleString()}</p>
                        <p className="coin-price">% {coin.price_change_percentage_24h}</p>
                    <button className='favorite' onClick={() =>             handleAddToFavorites(coin.id)}>
                                {
                            userFavorites?.coins_ids?.split(',').includes(coin.id)
                                ? <AiOutlineMinus /> : <AiOutlinePlus />
                                }
                    </button>
                </div>
                )
            })
            }
        </main>
        : <p className={styles.noCryptos}>Enlist to access your Bunker.</p>
        }
     </div>
)}
