import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/auth">Auth</Link>
    </nav>
  );
}