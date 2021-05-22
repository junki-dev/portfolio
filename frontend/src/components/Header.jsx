import React from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { FaList, FaRegHeart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';

import 'react-pro-sidebar/dist/css/styles.css';
import '../assets/Header.css';

const Header = () => {
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar>
          <SidebarHeader>
            <div className="logotext">
              <p>Logo</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FaList />}>CAREER</MenuItem>
              <MenuItem icon={<FaRegHeart />}>SKILLS</MenuItem>
              <MenuItem icon={<RiPencilLine />}>LAB</MenuItem>
              <MenuItem icon={<BiCog />}>ABOUT</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
