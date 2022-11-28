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
          <div>
            <img src={data[0].image} alt={data[0].name} />
          </div>
          <div>
            <img src={data[1].image} alt={data[1].name} />
          </div>
          <div>
            <img src={data[2].image} alt={data[2].name} />
          </div>
          <div>
            <img src={data[3].image} alt={data[3].name} />  
          </div>
          <div>
            <img src={data[4].image} alt={data[4].name} />  
          </div>
          <div>
            <img src={data[5].image} alt={data[5].name} />
          </div>
          <div>
            <img src={data[6].image} alt={data[6].name} />
          </div>
          <div>
            <img src={data[7].image} alt={data[7].name} />
          </div>
          <div>
            <img src={data[8].image} alt={data[8].name} />
          </div>
          <div>
            <img src={data[9].image} alt={data[9].name} />
          </div>
          <div>
            <img src={data[10].image} alt={data[10].name} />
          </div>
          <div>
            <img src={data[11].image} alt={data[11].name} />
          </div>
          <div>
            <img src={data[12].image} alt={data[12].name} />
          </div>
          <div>
            <img src={data[13].image} alt={data[13].name} />
          </div>
    </footer>
  );
}