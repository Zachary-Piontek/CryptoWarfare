import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/auth">Login</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/nfts">NFT's</Link>
    </nav>
  );
}