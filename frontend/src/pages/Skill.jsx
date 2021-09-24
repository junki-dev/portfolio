import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BasicMenuTemplate from '../components/Menu/BasicMenuTemplate';
import Sidebar from '../components/Menu/Sidebar';

// const menuList = [
//   {
//     name: `Blockchain`,
//     suffix: `Hyperldger`,
//     link: `/skill/blockchain`,
//   },
//   {
//     name: `Back-end`,
//     suffix: `Spring, Node.js`,
//     link: `/skill/back-end`,
//   },
//   {
//     name: `Font-end`,
//     suffix: `Rect.js`,
//     link: `/skill/front-end`,
//   },
//   {
//     name: `Infra`,
//     suffix: `Rect.js`,
//     link: `/skill/infra`,
//   },
// ];

const Skill = () => {
  /* 기술 메뉴 조회 */
  const [skillMenu, setSkillMenu] = useState([]);

  const fetchSkillMenu = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/skill`;
    axios
      .get(url)
      .then(({ data: { resultCode, resultMessage, data } }) => {
        if (resultCode !== `0`) {
          console.log(`메뉴 데이터 조회 실패: ${resultMessage}`);
          window.location.href = `/`;
        }

        data.map(newMenu => {
          return setSkillMenu(prevMenu => [
            ...prevMenu,
            {
              id: String(newMenu.name).toLowerCase,
              title: newMenu.name,
              suffix: newMenu.techStack.map(skill => {
                return `${skill.name}`;
              }),
              link: `skill/${newMenu.name}`,
            },
          ]);
        });
      })
      .catch(() => {
        return null;
      });
  };

  useEffect(() => {
    if (skillMenu.length < 1) {
      fetchSkillMenu();
    }
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <BasicMenuTemplate menuList={skillMenu} />
    </div>
  );
};

export default Skill;
