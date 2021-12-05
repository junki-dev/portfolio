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
      <Route path="/" exact element={<TypingEffect />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/work" exact element={<Work />} />
      <Route path="/work/:id" exact element={<WorkDetail />} />
      <Route path="/skill" exact element={<Skill />} />
      <Route path="/skill/:name" exact element={<SkillDetail />} />
      <Route path="/lab" exact element={<Lab />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
