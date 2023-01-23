import { useState, useEffect } from "react";
import { getUserFavoritesData } from "../../services/users.js";
import CoinsTable from "../../components/CoinsTable/index.jsx";
import styles from './style.module.css';
import Loader from "../../components/Loader/index.jsx";

export default function Favorites() {
    const [favoritesData, setFavoritesData] = useState([])
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      //fetch user favorites data
      getUserFavoritesData()
        .then(res => setFavoritesData(res))
        .then(() => setLoading(false))
  
    }, [])
  
    // fetch user favorites and update state
    const refetchData = async () => { 
      const res = await getUserFavoritesData()  
      setFavoritesData(res)  
    }

    // add up the total amount of coins in the favorites
    useEffect(() => {
      let total = 0
      favoritesData.forEach(coin => {
        total += coin.current_price
      })
      setAmount(total)
    }, [favoritesData])

    if (loading) return <Loader />
  
    return (
      <div className={styles.favorites}>
        <div className={styles.coins}>
          <CoinsTable
            data={favoritesData}
            refetchData={refetchData}
          />
        <div className={styles.total}>
          <p>Total: {amount}</p>
        </div>
        </div>
      </div>
    )
  }