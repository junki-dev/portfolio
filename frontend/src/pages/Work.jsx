import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import BasicMenuTemplate from '../components/Menu/BasicMenuTemplate';
import Sidebar from '../components/Menu/Sidebar';

// 업무 영역 style
const WorkSection = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  color: #000;
`;

const Work = () => {
  /* 경력 메뉴 조회 */
  const [workMenu, setWorkMenu] = useState([]);

  const fetchWorkMenu = useCallback(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/bo/career`;
    axios
      .get(url)
      .then(({ data: { resultCode, resultMessage, data } }) => {
        if (resultCode !== `0`) {
          console.log(`메뉴 데이터 조회 실패: ${resultMessage}`);
          window.location.href = `/`;
        }

        data.map((newMenu) =>
          setWorkMenu((prevMenu) => [
            ...prevMenu,
            {
              id: newMenu.id,
              title: newMenu.title,
              suffix: newMenu.startDate,
              link: `${newMenu.id}`,
            },
          ])
        );
      })
      .catch(() => {
        return null;
      });
  }, [workMenu]);

  useEffect(() => {
    if (workMenu.length < 1) {
      fetchWorkMenu();
    }
  }, []);

  return (
    <WorkSection>
      <Sidebar />
      <BasicMenuTemplate lang="kor" menuList={workMenu} />
    </WorkSection>
  );
};

export default Work;
