import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import Films from './Components/Films';
import People from './Components/People';
import Planets from './Components/Planets';
import Species from './Components/Species';
import Starships from './Components/Starships';

const App = () => (
  <div className="App">
    <h1 className="title">Star Wars</h1>
    <ul className="NavLink">
      <li><NavLink className="NavLink-items" to="/">Home</NavLink></li>
      <li><NavLink className="NavLink-items" to="/people">People</NavLink></li>
      <li><NavLink className="NavLink-items" to="/films">Films</NavLink></li>
      <li><NavLink className="NavLink-items" to="/planets">Planets</NavLink></li>
      <li><NavLink className="NavLink-items" to="/species">Species</NavLink></li>
      <li><NavLink className="NavLink-items" to="/starships">Starships</NavLink></li>
    </ul>
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/people" component={People} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/species" component={Species} />
        <Route exact path="/starships" component={Starships} />
        <Route render={() => <div>Page not found</div>} />
      </Switch>
    </section>
  </div>
);

export default App;
