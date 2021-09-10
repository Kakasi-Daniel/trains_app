import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
  const seats = useSelector((state) => state);
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          {location.pathname !== '/' && (
            <li>
              <Link to="/">Back to home</Link>
            </li>
          )}
          {seats.length !== 0 && location.pathname !== '/checkout' && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
