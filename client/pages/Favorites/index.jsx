import { useState, useEffect } from "react";
import { getUserFavoritesData } from "../../services/users.js";
import CoinsTable from "../../components/CoinsTable/index.jsx";
import styles from './style.module.css';
import Loader from "../../components/Loader/index.jsx";

export default function Favorites() {
    const [favoritesData, setFavoritesData] = useState([])
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

    if (loading) return <Loader />
  
    return (
      <div className={styles.favorites}>
        <div className={styles.coins}>
          <CoinsTable
            data={favoritesData}
            refetchData={refetchData}
          />
        </div>
      </div>
    )
  }