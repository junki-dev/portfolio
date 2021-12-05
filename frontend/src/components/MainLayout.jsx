import React from 'react';
import Router from '../router/Router';
import Sidebar from './Menu/Sidebar';

const MainLayout = () => (
  <>
    <Sidebar />
    <Router />
  </>
);

export default MainLayout;
