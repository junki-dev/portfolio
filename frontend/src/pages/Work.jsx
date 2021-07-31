import React from 'react';
import WorkMenu from '../components/Menu/WorkMenu';
// import axios from 'axios';

import Sidebar from '../components/Menu/Sidebar';

const Work = () => {
  return (
    <div className="home">
      <Sidebar />
      <WorkMenu />
    </div>
  );
};

export default Work;
