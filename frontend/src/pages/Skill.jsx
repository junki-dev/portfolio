import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BasicMenuTemplate from '../components/Menu/BasicMenuTemplate';
import Sidebar from '../components/Menu/Sidebar';

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
          const name = newMenu.name.toLowerCase();
          return setSkillMenu(prevMenu => [
            ...prevMenu,
            {
              id: String(newMenu.name).toLowerCase,
              title: newMenu.name,
              suffix: newMenu.techStack.map(skill => {
                return `${skill.name}`;
              }),
              link: `skill/${name}`,
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
