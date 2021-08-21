import React from 'react';
import BasicMenuTemplate from '../components/Menu/BasicMenuTemplate';
// import axios from 'axios';

import Sidebar from '../components/Menu/Sidebar';

const menuList = [
  {
    name: `유니세프 홈페이지 리뉴얼`,
    suffix: 2021,
    link: `/work/unicef-renew`,
  },
  {
    name: `현대오토에버 블록체인 네트워크 구축`,
    suffix: 2021,
    link: `/work/unicef-renew`,
  },
  {
    name: `현대카드 블록체인 운영`,
    suffix: 2020,
    link: `/work/unicef-renew`,
  },
  {
    name: `현대카드 블록체인 네트워크 구축`,
    suffix: 2019,
    link: `/work/unicef-renew`,
  },
  {
    name: `NH 블록체인 구축`,
    suffix: 2018,
    link: `/work/unicef-renew`,
  },
];

const Work = () => {
  return (
    <div className="home">
      <Sidebar />
      <BasicMenuTemplate menuList={menuList} />
    </div>
  );
};

export default Work;
