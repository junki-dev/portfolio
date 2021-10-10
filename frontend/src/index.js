import React from 'react';
import ReactDOM from 'react-dom';
// import Portfolio from './pages/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TypingEffect from './components/TypingEffect';
import About from './pages/About';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail/WorkDetailTemplate';
import SkillDetail from './pages/SkillDetail/SkillDetailTemplate';
import Skill from './pages/Skill';
import Lab from './pages/Lab';

const routes = (
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
);

ReactDOM.render(routes, document.getElementById('root'));
