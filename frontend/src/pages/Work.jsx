import React from 'react';
import SubMenu from '../components/Menu/SubMenuTemplate';
// import axios from 'axios';

import Sidebar from '../components/Menu/Sidebar';

const menuList = [
  {
    name: `유니세프 홈페이지 리뉴얼`,
    year: 2021,
  },
  {
    name: `현대오토에버 블록체인 네트워크 구축`,
    year: 2021,
  },
  {
    name: `현대카드 블록체인 운영`,
    year: 2020,
  },
  {
    name: `현대카드 블록체인 네트워크 구축`,
    year: 2019,
  },
  {
    name: `NH 블록체인 구축`,
    year: 2018,
  },
];

const Work = () => {
  return (
    <div className="home">
      <Sidebar />
      <SubMenu menuList={menuList} />
    </div>
  );
};

export default Work;
