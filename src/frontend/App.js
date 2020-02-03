import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AllFilms from './components/film-components/AllFilms';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path='/' component={AllFilms} />
          <Route path='/not-found' component={NotFound} />
          <Route exact={true} path='/:filmId' component={Info} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
