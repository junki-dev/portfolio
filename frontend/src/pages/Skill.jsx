import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import BasicMenuTemplate from '../components/Menu/BasicMenuTemplate';

// Component style
const Section = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  color: #000;
`;

const Skill = () => {
  /* 기술 메뉴 조회 */
  const [skillMenu, setSkillMenu] = useState([]);

  const fetchSkillMenu = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/bo/skill`;
    axios
      .get(url)
      .then(({ data: { resultCode, resultMessage, data } }) => {
        if (resultCode !== `0`) {
          console.log(`메뉴 데이터 조회 실패: ${resultMessage}`);
          window.location.href = `/`;
        }

        data.map((newMenu) => {
          const name = newMenu.name.toLowerCase();
          return setSkillMenu((prevMenu) => [
            ...prevMenu,
            {
              id: String(newMenu.name).toLowerCase,
              title: newMenu.name,
              suffix: newMenu.list,
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
    <Section>
      <BasicMenuTemplate menuList={skillMenu} />
    </Section>
  );
};

export default Skill;
