import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';
import About from './About';
import Work from './Work';
import WorkDetail from './WorkDetail/DetailTemplate';
import SkillDetail from './SkillDetail/DetailTemplate';
import Skill from './Skill';
import Lab from './Lab';

const Portfolio = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <TypingEffect />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/work" exact render={() => <Work />} />
          <Route path="/work/:id" exact render={() => <WorkDetail />} />
          <Route path="/skill" exact render={() => <Skill />} />
          <Route path="/skill/:name" exact render={() => <SkillDetail />} />
          <Route path="/lab" exact render={() => <Lab />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Portfolio;
