import { useState, useEffect } from "react";
import axios from "axios";
import CoinsTable from "../../components/CoinsTable/index.jsx";
import './home.css';
import Loader from "../../components/Loader/index.jsx";
import styles from './home.module.css';
import { GiHeavyBullets, GiSupersonicBullet } from "react-icons/gi";

export default function Home() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);
    const [page, setPage] = useState(1);
 
const COINGECKO_API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${page}&sparkline=false`;
    
    useEffect(() => {
      //fetch coins
      axios.get(COINGECKO_API)
        .then((res) => 
        {
          setCoins(res.data);
          setFilteredCoins(res.data);
        })
        .catch((error) => console.log(error));
    }, [page]);
    
    const handleChange = e => {
        setSearch(e.target.value);
        setFilteredCoins(coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        ));
    }
    
    if (!coins.length) return <Loader />;

    console.log(page);
    
    return (
        <div>
            <div className={styles.searchDiv}>
                <button onClick={() => setPage(page - 1)} className={styles.button}><GiHeavyBullets /></button>
                <form className={styles.form}>
                    <input type="text" placeholder="Search Artillery" onChange={handleChange} />
                    <p className={styles.pageNumber}>Page {page}</p>
                </form>
                <button onClick={() => setPage(page + 1)} className={styles.button}><GiHeavyBullets /></button>
            </div>
            <CoinsTable data={filteredCoins} />
        </div>
    );
} 
