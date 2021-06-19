import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TypingEffect from '../components/TypingEffect';
import About from './About';

const Portfolio = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <TypingEffect />} />
          <Route path="/about" exact render={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Portfolio;
