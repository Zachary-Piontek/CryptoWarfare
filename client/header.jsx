import Nav from './components/Navigation.jsx';
import { useUser } from './context/userContext.js';
import styles from './header.module.css';
import { signOut } from './services/users.js';


export default function Header() {
  const { user } = useUser();

  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <header className={styles.header}>
    <h1 className={styles.appName}>CryptoWarfare</h1>
      {user?.id ? (
        <button className={styles.signOutButton} onClick={handleSignOut}>
          Sign Out
        </button>
      ) : (
        <div className={styles.signOutButton} />
      )}
      {user && <p className={styles.userName}>{user.username}</p>}
      <Nav />
    </header>
  );
}