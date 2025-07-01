import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Blog</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;