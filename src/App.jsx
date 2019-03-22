import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import Characters from './Components/Characters';
import Films from './Components/Films';
import Planets from './Components/Planets';
import Species from './Components/Species';
import Starships from './Components/Starships';
import Vehicles from './Components/Vehicles';
import Details from './Details/Details';

const App = () => (
  <div className="App">
    <header>
      <h1 className="title">Star Wars</h1>
      <NavLink className="NavLink-items-home" to="/">Home</NavLink>
    </header>
    <nav className="NavLink">
      <ul>
        <li><NavLink className="NavLink-items" to="/people">Characters</NavLink></li>
        <li><NavLink className="NavLink-items" to="/films">Films</NavLink></li>
        <li><NavLink className="NavLink-items" to="/planets">Planets</NavLink></li>
        <li><NavLink className="NavLink-items" to="/species">Species</NavLink></li>
        <li><NavLink className="NavLink-items" to="/starships">Starships</NavLink></li>
        <li><NavLink className="NavLink-items" to="/vehicles">Vehicles</NavLink></li>
      </ul>
    </nav>
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/people/:id" component={Details} />
        <Route exact path="/people" component={Characters} />
        <Route exact path="/films/:id" component={Details} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/planets/:id" component={Details} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/species/:id" component={Details} />
        <Route exact path="/species" component={Species} />
        <Route exact path="/starships/:id" component={Details} />
        <Route exact path="/starships" component={Starships} />
        <Route exact path="/vehicles/:id" component={Details} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route render={() => <div>Page not found</div>} />
      </Switch>
    </section>
    <footer>Footer</footer>
  </div>
);

export default App;
