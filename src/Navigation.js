import {Link,useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Navigation() {

    const seats = useSelector(state => state)
    const location = useLocation()

    return (
        <header>
        <nav>
          {location.pathname !== '/' && <Link to="/">Back to home</Link>}
          {(seats.length !== 0 && location.pathname !== '/checkout') && (
            <Link to="/checkout" replace>
              Checkout
            </Link>
          )}
        </nav>
      </header>
    )
}

export default Navigation
