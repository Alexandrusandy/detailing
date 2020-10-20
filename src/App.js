import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Particles from 'react-particles-js';

import Navigation from './Navbar/Navbar';
import Poza from './poza/Poza';
import Despre from './despre/despre';
import Servicii from './Servicii/Servicii';
import Preturiinterior from './Preturi/Preturiinterior';
import Galerie from './Galerie/Galerie';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
/*import Mapps from './Contact/Map';
*/
const particlesOptions = {
  particles: {
    number: {
      value: 60,
          density: {
        enable: true,
        value_area: 500
      }
    }
  }
}
              

function App() {

  return (

<BrowserRouter>
    <Particles className='particles'
          params={particlesOptions}
        />
    <div className="App"> 
    <Navigation />
    <Switch>
     <Route path='/Preturiinterior' component={Preturiinterior}/>
     <Route path='/Servicii' component={Servicii}/>
     <Route path='/Galerie' component={Galerie}/>
     <Route path='/Contact' component={Contact}/>
    <Poza /> 
    </Switch>
      <Despre/>
      {/*<Mapps/>*/}
      <Servicii/>
      <Footer/>
      
        </div>

 </BrowserRouter>
  );
}

export default App;
