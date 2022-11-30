import './footer.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Footer() {

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
    <footer className="footer">
      {data.map(coin => {
        return ( 
          <div>
            <img src={coin.image} alt={coin.name} />             
          </div>
        )
      }
      )}
    </footer>
  )
}
