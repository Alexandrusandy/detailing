import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import Preturiinterior from './Preturi/Preturiinterior';
import Galerie from './Galerie/Galerie';
import Contact from './Contact/Contact';

function App(){
  return(
    <div>
      <h2>Welcome to App Component...</h2>
      <ul>
        <li><Link to="/">Employees</Link></li>
        <li><Link to="/Preturiinterior">Preturiinterior</Link></li>
        <li><Link to="/Galerie">Galerie</Link></li>
        <li><Link to="/Contact">Contact</Link></li>

      </ul>
      <Switch>
        <Route exact path="/" component={Contact}></Route>
        <Route path="/Preturiinterior" component={Preturiinterior}></Route>
        <Route path="/Galerie" component={Galerie}></Route>
        <Route path="/Contact" component={Contact}></Route>
      </Switch>
      
    </div>
  )
}

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById("root"));