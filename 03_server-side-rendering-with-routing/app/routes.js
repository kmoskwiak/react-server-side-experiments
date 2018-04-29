import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

const App = (props) => {
  return (
    <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;