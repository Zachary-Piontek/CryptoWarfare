import { useState, useEffect } from "react";
import axios from "axios";
import CoinsTable from "../../components/CoinsTable/index.jsx";
import './style.scss';
import './home.css';
import Loader from "../../components/Loader/index.jsx";

export default function Home() {
    const [coins, setCoins] = useState([]);
  
    const COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  
    useEffect(() => {
      //fetch coins
      axios.get(COINGECKO_API)
        .then((res) => setCoins(res.data))
  
    }, [])

    if (!coins.length) return <Loader />
  
    return (
  
      <div className="home">
        <CoinsTable data={coins} />
      </div>
    )
  }