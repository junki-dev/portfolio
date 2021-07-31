import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TypingEffect from '../components/TypingEffect';
import About from './About';
import Work from './Work';
import WorkDetail from './WorkDetail/DetailTemplate';
import Skill from './Skill';
import Lab from './Lab';

import '../assets/Home.css';

const Portfolio = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <TypingEffect />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/work" exact render={() => <Work />} />
          <Route path="/work/:project" exact render={() => <WorkDetail />} />
          <Route path="/skill" exact render={() => <Skill />} />
          <Route path="/lab" exact render={() => <Lab />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Portfolio;
