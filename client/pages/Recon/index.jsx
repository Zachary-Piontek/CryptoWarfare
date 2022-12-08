import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './recon.module.css';
import { BsNewspaper } from 'react-icons/bs';

export default function Recon() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.coinstats.app/public/v1/news?skip=0&limit=20')
      .then(({ data: { news } }) => { 
        setNews(news);  
        setLoading(false);  
      })
      .catch((err) => console.log(err)); 
  }, []);

  console.log(news);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.recon}>
      <h1 className={styles.header}>Reports</h1>
      <div className={styles.newsContainer}>
      <div className={styles.news}>
        {news.map((article) => (
          <div key={article.id} className={styles.article}>
            <img src={article.imgURL} className={styles.articleImage}/>
            <a href={article.link} className={styles.aLink}><p className={styles.title}>{article.title}</p></a>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
