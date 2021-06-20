import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../assets/MenuSidebar.css';
import { Link } from 'react-router-dom';

const MenuSidebar = () => {
  return (
    <ProSidebar className="sidebar-menu">
      <Menu>
        <MenuItem prefix="01." className="menu-item">
          <Link to="/about">ABOUT</Link>
        </MenuItem>
        <MenuItem prefix="02." className="menu-item">
          <Link to="/work">WORK</Link>
        </MenuItem>
        <MenuItem prefix="03." className="menu-item">
          <Link to="/skill">SKILL</Link>
        </MenuItem>
        <MenuItem prefix="04." className="menu-item">
          <Link to="/lab">LAB</Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default MenuSidebar;
