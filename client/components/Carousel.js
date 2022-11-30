import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


const Carousel = () => {

  const fetchCoins = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await response.json()
    console.log(data)
  }

  fetchCoins()


  return ( 
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src="https://via.placeholder.com/600x400" className="sliderimg" alt="1" />
        <img src="https://via.placeholder.com/600x400" className="sliderimg" alt="2" />
        <img src="https://via.placeholder.com/600x400" className="sliderimg" alt="3" />
        

      </AliceCarousel>
    </div>
  )
}

export default Carousel