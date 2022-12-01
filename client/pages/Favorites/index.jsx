import { useState, useEffect } from "react";
import { getUserFavoritesData } from "../../services/users.js";
import CoinsTable from "../../components/CoinsTable/index.jsx";
import './style.scss';
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
      <div className='favorites'>
        <h2>Crypto Foxhole</h2>
  
        <div className="coins">
          <CoinsTable
            data={favoritesData}
            refetchData={refetchData}
          />
        </div>
      </div>
    )
  }