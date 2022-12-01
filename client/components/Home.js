import './home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Home() {

  const [data, setData] = useState(null);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'; 

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const [search, setSearch] = useState('');
  const filteredCoins = data?.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(data);
  
    if (!data) {
      return null;
    }

    return (
<>
            <form>
              <input type="text" placeholder='search' onChange={e => setSearch(e.target.value)} />
            </form>
    <main className="main">
          <div>
            <p id="label">Symbol</p>
            <p className="label">Name</p>
            <p className="label">Price</p>
            <p className='label'>Market Cap</p>
            <p className="label">24 Hour Price Change</p>
            <p className="label">Add to Favorites</p>
          </div>
           {filteredCoins?.map(coin => {
             return ( 
              <div key={coin.id}>
                 <img src={coin.image} alt={coin.name} />
                 <p className="coin-name">{coin.name}</p>
                <p className="coin-price">${coin.current_price}</p>
                <p className='market-cap'>${coin.market_cap}</p>
                <p className="coin-price">${coin.price_change_percentage_24h}</p>
                <button className='favorite'>➕</button>
              </div>
            )
          })}
    </main>
</>
    )
  }
