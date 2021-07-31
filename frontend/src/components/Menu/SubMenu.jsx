import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../assets/MenuSidebar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled(ProSidebar)`
  .sidebar-menu {
    width: 23%;
    height: 100vh;
    margin-left: 0px;
    min-width: 3%;
  }
  .sidebar-menu .pro-sidebar-inner {
    width: 100%;
    padding-top: 4vh;
    background-color: #fff;
    border: 1px solid #eee;
  }

  .sidebar-menu .prefix-wrapper {
    font-size: 2em;
    font-family: BigShouldersRegular;
  }

  .pro-inner-item {
    width: 100%;
    height: 23vh;
  }

  .pro-inner-item .pro-item-content {
    width: 100%;
    height: 100%;
    font-size: 8em;
    font-family: BigShouldersBold;
  }
`;

const SubMenu = () => {
  return (
    <SidebarContainer>
      <Menu>
        <MenuItem prefix="01.">
          ABOUT
          <Link to="/about" />
        </MenuItem>
        <MenuItem prefix="02.">
          WORK
          <Link to="/work" />
        </MenuItem>
        <MenuItem prefix="03.">
          SKILL
          <Link to="/skill" />
        </MenuItem>
        <MenuItem prefix="04.">
          LAB
          <Link to="/lab" />
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default SubMenu;
