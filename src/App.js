import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import MakeRegistration from './Pages/MakeRegistration';
import Train from './Pages/Train';
import Checkout from './Pages/Checkout';
import { useEffect } from 'react';
import actions from './store/store';
import Navigation from './Navigation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('seats')) {
      const data = JSON.parse(localStorage.getItem('seats'));
      dispatch(actions.populateStore(data));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <MakeRegistration />
        </Route>
        <Route path="/trains/:trainID" exact>
          <Train />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/trains" exact>
          <Redirect to="/" />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
