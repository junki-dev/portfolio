import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../assets/MenuSidebar.css';

const MenuSidebar = () => {
  return (
    <ProSidebar className="sidebar-menu">
      <Menu>
        <MenuItem prefix="01." className="menu-item">
          ABOUT
        </MenuItem>
        <MenuItem prefix="02." className="menu-item">
          WORK
        </MenuItem>
        <MenuItem prefix="03." className="menu-item">
          SKILL
        </MenuItem>
        <MenuItem prefix="04." className="menu-item">
          LAB
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default MenuSidebar;
