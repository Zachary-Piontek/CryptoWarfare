import { useState, useEffect } from "react";
import axios from "axios";
import CoinsTable from "../../components/CoinsTable/index.jsx";
import './style.scss';
import './home.css';
import Loader from "../../components/Loader/index.jsx";

export default function Home() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);
  
    const COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
  
    useEffect(() => {
      //fetch coins
      axios.get(COINGECKO_API)
        .then((res) => 
        {
          setCoins(res.data);
          setFilteredCoins(res.data);
        })
        .catch((error) => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
        setFilteredCoins(coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        ));
    }

    if (!coins.length) return <Loader />;

    return (
        <div>
            <div>
                <form>
                    <input type="text" placeholder="Search Artillery" onChange={handleChange} />
                </form>
            </div>
            <CoinsTable data={filteredCoins} />
        </div>
    );
}
