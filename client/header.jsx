import Nav from './components/Navigation.jsx';
import { useUser } from './context/userContext.js';
import styles from './header.module.css';

export default function Header() {
  const { user } = useUser();

  return (
    <section className="header">
      <h1>CryptoWarfare</h1>
      {
        user && <p className={styles.userName}>{user.username}</p>
        }
      <Nav />
    </section>
  );
}
