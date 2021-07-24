import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../assets/MenuSidebar.css';
import { Link } from 'react-router-dom';

const MenuSidebar = () => {
  return (
    <ProSidebar className="sidebar-menu">
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
    </ProSidebar>
  );
};

export default MenuSidebar;
