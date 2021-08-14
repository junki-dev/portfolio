import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HR from '../HR';

const Container = styled(ProSidebar)`
  padding: 4rem;
  width: 70%;
`;

const MenuContainer = styled(Menu)`
  width: 100%;

  .pro-inner-item {
    height: 10vh;
  }

  .pro-item-content {
    height: 100%;
    font-size: 3em;
    font-family: Cafe24SurroundAir;
    letter-spacing: -1px;
  }

  .prefix-wrapper {
    font-size: 1em;
    font-family: Cafe24SurroundAir;
    letter-spacing: -1px;
  }

  .suffix-wrapper {
    font-size: 1em;
    font-family: Cafe24SurroundAir;
    letter-spacing: -1px;
    margin-left: 0px;
  }
`;

const SubMenu = () => {
  return (
    <Container>
      <MenuContainer>
        <MenuItem prefix="01." suffix="2021">
          유니세프 홈페이지 리뉴얼
          <Link to="/work/unicef-renew" />
        </MenuItem>
        <HR />
        <MenuItem prefix="02." suffix="2021">
          현대오토에버 블록체인 네트워크 구축
          <Link to="/work/hauto-bc" />
        </MenuItem>
        <hr />
        <MenuItem prefix="03." suffix="2020">
          현대카드 블록체인 운영
          <Link to="/work/hcard-bc-sm" />
        </MenuItem>
        <hr />
        <MenuItem prefix="04." suffix="2019">
          현대카드 블록체인 네트워크 구축
          <Link to="/work/hcard-bc" />
        </MenuItem>
        <hr />
        <MenuItem prefix="05." suffix="2018">
          NH 블록체인 구축
          <Link to="/work/nh-p2p" />
        </MenuItem>
        <hr />
      </MenuContainer>
    </Container>
  );
};

export default SubMenu;
