import { useState, useEffect } from "react";
import axios from "axios";

// export function for search coins

export default function SearchCoins() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
                setFilteredCoins(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
        setFilteredCoins(coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        ));
    }

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <div className="coin-container">
                        <div className="coin-row">
                            <div className="coin">
                                <img src={coin.image} alt="crypto" />
                                <h1>{coin.name}</h1>
                                <p className="coin-symbol">{coin.symbol}</p>
                            </div>
                            <div className="coin-data">
                                <p className="coin-price">${coin.current_price}</p>
                                <p className="coin-volume">${coin.total_volume.toLocaleString()}</p>

                                {coin.price_change_percentage_24h < 0 ? (
                                    <p className="coin-percent red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                    <p className="coin-percent green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                )}

                                <p className="coin-marketcap">
                                    Mkt Cap: ${coin.market_cap.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}









