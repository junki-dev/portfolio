import React from 'react';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import styled from 'styled-components';
import githubLogo from '../assets/images/githubLogo.png';

import 'react-pro-sidebar/dist/css/styles.css';
import '../assets/Sidebar.css';

const ResumeContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  background: #000;
  position: relative;
`;

const ResumeA = styled.a`
  cursor: pointer;
  background-color: #000;
  width: 100%;
  height: 100%;
  line-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  span {
    text-align: center;
    color: #fff;
    display: block;
    padding-left: 35px;
    text-transform: uppercase;
    font: bold 18px/66px Arial;
    transform: scaleX(0.6);
    letter-spacing: 3px;
    transform-origin: center left;
    transition: color 0.3s ease;
    position: relative;
    z-index: 1;
  }
  em {
    position: absolute;
    height: 1px;
    background: #fff;
    width: 47%;
    top: 50%;
    transform: scaleX(0.25);
    transform-origin: center right;
    transition: all 0.3s ease;
    z-index: 1;
  }
  &:before,
  &:after {
    content: '';
    background: #fff;
    height: 50%;
    width: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  &:before {
    top: 0;
    left: 0;
    right: auto;
  }
  &:after {
    bottom: 0;
    right: 0;
    left: auto;
  }
  &:hover {
    &:before {
      width: 100%;
      right: 0;
      left: auto;
    }
    &:after {
      width: 100%;
      left: 0;
      right: auto;
    }
    span {
      color: #000;
    }
    em {
      background: #000;
      transform: scaleX(1);
    }
  }
`;

const TitleSidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        <p>Kim Junki</p>
      </SidebarHeader>
      <SidebarContent>
        <ResumeContainer>
          <ResumeA>
            <span>RESUME</span>
            <em />
          </ResumeA>
        </ResumeContainer>
      </SidebarContent>
      <SidebarFooter>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/junki-dev"
        >
          <img src={githubLogo} alt="junki github" />
        </a>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default TitleSidebar;
