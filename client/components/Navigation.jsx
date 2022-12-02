import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/news">Recon</Link>
      <Link to="/favorites">Bunker</Link>
      <Link to="/nfts">NFT's</Link>
      <Link to="/auth">Enlist</Link>
    </nav>
  );
}