import './App.css';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import login from './components/login';
import landing from './components/landing';
import React from 'react';
import * as ROUTES from './constants/routes';
import signup from './components/signup';
import signout from './components/signout';
function App() {
  return (
    <Router>
    <div>
      <Route exact path={ROUTES.SIGN_IN} component={login} />
      <Route exact path={ROUTES.LANDING} component={landing} />
      <Route exact path={ROUTES.SIGN_UP} component={signup} />
      <Route exact path={ROUTES.SIGN_OUT} component={signout} />

  </div>
  </Router>
  );
}

export default App;
