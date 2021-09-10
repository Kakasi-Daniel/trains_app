import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MakeRegistration from './Pages/MakeRegistration';
import Train from './Pages/Train';
import Checkout from './Pages/Checkout';
import { useEffect } from 'react';
import actions from './store/store';
import Navigation from './Navigation';

function App() {
  const seats = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('seats')) {
      const data = JSON.parse(localStorage.getItem('seats'));
      dispatch(actions.populateStore(data));
    }
  }, []);

  return (
    <BrowserRouter>
     
      <Navigation/>
      <Switch>
        <Route path="/" exact>
          <MakeRegistration />
        </Route>
        <Route path="/trains/:trainID" exact>
          <Train />
        </Route>
        <Route path="/checkout" ex>
          <Checkout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
