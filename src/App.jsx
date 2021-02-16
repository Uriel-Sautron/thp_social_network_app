import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './Components/Nav';
import './Sass/App.scss';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import store from './Redux/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </main>
      </Provider>
    </Router>
  );
}

export default App;
