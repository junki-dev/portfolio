import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';

// Menu 영역 style
const NavSection = styled(Navbar)`
  width: 25%;
  height: 100vh;
  margin-left: 0px;
  min-width: 3%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  border: 1px solid #eeeeee;

  .navbar-nav {
    flex-direction: column;
    height: 100%;
    padding-left: 0.1em;
    padding-top: 5vh;
    width; 100%;
    font-size: 13em;
    font-family: Komda;
    
    .nav-link {
      height: 20%;
    }

    .prefix {
      font-size: 200px; 
    }
  }
`;

// 메뉴 데이터
const menus = [
  {
    prefix: '01.',
    title: 'ABOUT',
    link: '/about',
  },
  {
    prefix: '02.',
    title: 'WORK',
    link: '/work',
  },
  {
    prefix: '03.',
    title: 'SKILL',
    link: '/skill',
  },
  {
    prefix: '04.',
    title: 'LAB',
    link: '/lab',
  },
];

const MenuSidebar = () => {
  return (
    <NavSection>
      <Nav>
        {menus.map((menu) => (
          <Nav.Link as={NavLink} to={menu.link} key={menu.title}>
            <span className="prefix">{menu.prefix}</span>
            {menu.title}
          </Nav.Link>
        ))}
      </Nav>
    </NavSection>
  );
};

export default MenuSidebar;
