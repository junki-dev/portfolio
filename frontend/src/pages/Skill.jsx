import React from 'react';
import BoldMenuTemplate from '../components/Menu/BoldMenuTemplate';
// import axios from 'axios';

import Sidebar from '../components/Menu/Sidebar';

const menuList = [
  {
    name: `Blockchain`,
    suffix: `Hyperldger`,
    link: `/skill/blockchain`,
  },
  {
    name: `Back-end`,
    suffix: `Spring, Node.js`,
    link: `/skill/back-end`,
  },
  {
    name: `Font-end`,
    suffix: `Rect.js`,
    link: `/skill/front-end`,
  },
];

const Skill = () => {
  return (
    <div className="home">
      <Sidebar />
      <BoldMenuTemplate menuList={menuList} />
    </div>
  );
};

export default Skill;
