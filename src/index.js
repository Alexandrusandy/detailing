import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Poza from './poza/Poza';
import Despre from './despre/despre';
import Servicii from './Servicii/Servicii';
import Preturiinterior from './Preturi/Preturiinterior';
import Galerie from './Galerie/Galerie';
import Contact from './Contact/Contact';

ReactDOM.render(
  <Router>
    <App >
    <Switch>
     <Route path='/Preturiinterior' component={Preturiinterior}/>
     <Route path='/Servicii' component={Servicii}/>
     <Route path='/Galerie' component={Galerie}/>
     <Route path='/Contact' component={Contact}/>
    <Poza /> 
    </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
