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

  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <main className="main">
          <div>
            <p id="label">Symbol</p>
            <p className="label">Name</p>
            <p className="label">Price</p>
            <p className='label'>Market Cap</p>
            <p className="label">24 Hour Price Change</p>
            <p className="label">Add to Favorites</p>
          </div>
          <div>
            <img src={data[0].image} alt={data[0].name} />
            <p className='coin-name'>{data[0].name}</p>
            <p className="coin-price">${data[0].current_price}</p>
            <p className='market-cap'>${data[0].market_cap}</p>
            <p className="coin-price">${data[0].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[1].image} alt={data[1].name} />
            <p className="coin-name">{data[1].name}</p> 
            <p className="coin-price">${data[1].current_price}</p>
            <p className='market-cap'>${data[1].market_cap}</p>
            <p className="coin-price">${data[1].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[2].image} alt={data[2].name} />  
            <p className="coin-name">{data[2].name}</p>
            <p className="coin-price">${data[2].current_price}</p>
            <p className='market-cap'>${data[2].market_cap}</p>
            <p className="coin-price">${data[2].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[3].image} alt={data[3].name} />  
            <p className="coin-name">{data[3].name}</p>
            <p className="coin-price">${data[3].current_price}</p>
            <p className='market-cap'>${data[3].market_cap}</p>
            <p className="coin-price">${data[3].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[4].image} alt={data[4].name} />  
            <p className="coin-name">{data[4].name}</p>
            <p className="coin-price">${data[4].current_price}</p>
            <p className='market-cap'>${data[4].market_cap}</p>
            <p className="coin-price">${data[4].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[5].image} alt={data[5].name} />
            <p className="coin-name">{data[5].name}</p>
            <p className="coin-price">${data[5].current_price}</p>
            <p className='market-cap'>${data[5].market_cap}</p>
            <p className="coin-price">${data[5].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[6].image} alt={data[6].name} />
            <p className="coin-name">{data[6].name}</p>
            <p className="coin-price">${data[6].current_price}</p>
            <p className='market-cap'>${data[6].market_cap}</p>
            <p className="coin-price">${data[6].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[7].image} alt={data[7].name} />
            <p className="coin-name">{data[7].name}</p>
            <p className="coin-price">${data[7].current_price}</p>
            <p className='market-cap'>${data[7].market_cap}</p>
            <p className="coin-price">${data[7].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[8].image} alt={data[8].name} />
            <p className="coin-name">{data[8].name}</p>
            <p className="coin-price">${data[8].current_price}</p>
            <p className='market-cap'>${data[8].market_cap}</p>
            <p className="coin-price">${data[8].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
          <div>
            <img src={data[9].image} alt={data[9].name} />
            <p className="coin-name">{data[9].name}</p>
            <p className="coin-price">${data[9].current_price}</p>
            <p className='market-cap'>${data[9].market_cap}</p>
            <p className="coin-price">${data[9].price_change_percentage_24h}</p>
            <button className='favorite'>➕</button>
          </div>
    </main>
  );
}
