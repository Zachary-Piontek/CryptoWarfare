import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './recon.module.css';

export default function Recon() {
  const [events, setEvents] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.coinpaprika.com/v1/coins/btc-bitcoin/events')
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.coinpaprika.com/v1/coins/btc-bitcoin/twitter')
      .then((res) => {
        setTweets(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(events);
  console.log(tweets);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.recon}>
      <h1>Recon</h1>
      <div className={styles.events}>
        {events.map((event) => (
          <div key={event.id} className={styles.event}>
            <a href={event.link} className={styles.aLink}>{event.name}</a>
          </div>
        ))}
      </div>
      <div className={styles.tweets}>
        {tweets.map((tweet) => (
          <div key={tweet.id} className={styles.tweet}>
          <p>{tweet.user_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}