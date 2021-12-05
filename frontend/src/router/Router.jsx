import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';
import About from '../pages/About';
import Lab from '../pages/Lab';
import Skill from '../pages/Skill';
import SkillDetail from '../pages/SkillDetail/SkillDetailTemplate';
import Work from '../pages/Work';
import WorkDetail from '../pages/WorkDetail/WorkDetailTemplate';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact render={() => <TypingEffect />} />
      <Route path="/about" exact render={() => <About />} />
      <Route path="/work" exact render={() => <Work />} />
      <Route path="/work/:id" exact render={() => <WorkDetail />} />
      <Route path="/skill" exact render={() => <Skill />} />
      <Route path="/skill/:name" exact render={() => <SkillDetail />} />
      <Route path="/lab" exact render={() => <Lab />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
