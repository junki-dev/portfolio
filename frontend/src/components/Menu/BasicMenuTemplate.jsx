import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HR from '../HR';

import 'react-pro-sidebar/dist/css/styles.css';

// 메뉴 영역 style
const MenuContainer = styled(ProSidebar)`
  padding: 6rem 8rem 4rem 8rem;
  width: 70%;
`;

// 메뉴 내부 영역 style
const MenuSection = styled(Menu)`
  width: 100%;
  padding-top: 0px !important;
  background-color: #ffffff;
  color: #000000;

  .pro-inner-item {
    height: 14vh;
  }

  .pro-item-content {
    height: 100%;
    font-size: 7em;
    font-family: Komda;

    :lang(kor) {
      font-size: 4.5em;
      font-family: NanumBarunpen;
      letter-spacing: -3px;
    }
  }

  .prefix-wrapper {
    font-size: 2em;
    font-family: Komda;
  }

  .suffix-wrapper {
    font-size: 3em;
    font-family: Komda;
    letter-spacing: -1px;
    text-align: end;
    white-space: nowrap;
    max-width: 15%;
    width: 15%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BasicMenuTemplate = ({ lang, menuList }) => {
  return (
    <MenuContainer>
      <MenuSection>
        {menuList.map((menu, index) => (
          <>
            <MenuItem lang={lang} prefix={`${index + 1}.`} suffix={menu.suffix}>
              {menu.title}
              <Link to={`${menu.link}`} />
            </MenuItem>
            <HR />
          </>
        ))}
      </MenuSection>
    </MenuContainer>
  );
};

export default BasicMenuTemplate;
