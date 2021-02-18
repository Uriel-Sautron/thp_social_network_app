import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navbar from './Components/Navbar';
import './Sass/App.scss';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { store, persistor } from './Redux/store';
import { PrivateRoute, PublicRoute } from './Components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <PrivateRoute path="/profil" component={Profil} />
              <PublicRoute path="/register" component={Register} />
              <PublicRoute path="/login" component={Login} />
            </Switch>
          </main>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
