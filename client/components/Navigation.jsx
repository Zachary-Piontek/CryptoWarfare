import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Artillery</Link>
      <Link to="/recon">Recon</Link>
      <Link to="/favorites">Bunker</Link>
      <Link to="/nfts">NFT's</Link>
      <Link to="/auth">Enlist</Link>
    </nav>
  );
}