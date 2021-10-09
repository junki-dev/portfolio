import React from 'react';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import styled from 'styled-components';

import GithubLogo from '../../assets/images/GitHub_Logo.png';
import ResumePdf from '../../assets/file/junki-kim_resume.pdf';

import 'react-pro-sidebar/dist/css/styles.css';

// 제목 사이드바 style
const SidebarSection = styled(ProSidebar)`
  width: 4.2%;
  height: 100vh;
  color: #000;
  margin-left: 0px;
  min-width: 3%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  font-family: NanumBarunpen;

  .pro-sidebar-inner {
    width: 100%;
    background-color: #fff;
  }

  .pro-sidebar-header {
    line-height: 30vh;
    height: 30vh;
    text-align: center;

    a {
      color: inherit;
      text-decoration: none;

      background: linear-gradient(
          to right,
          rgba(100, 200, 200, 1),
          rgba(100, 200, 200, 1)
        ),
        linear-gradient(
          to right,
          rgba(255, 0, 0, 1),
          rgba(255, 0, 180, 1),
          rgba(0, 100, 200, 1)
        );
      background-size: 100% 0.1em, 0 0.1em;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition: background-size 400ms;
    }

    a:hover,
    a:focus {
      background-size: 0 0.1em, 100% 0.1em;
    }
  }

  .pro-sidebar-content {
    line-height: 50vh;
    height: 50vh;
    text-align: center;
  }

  .pro-sidebar-footer {
    height: 20vh;

    img {
      margin-top: 9vh;
    }
  }
`;

// 이력서 영역 style
const ResumeSection = styled.div`
  margin: 0 auto;
  height: 100%;
  background: #000;
  position: relative;
`;

// 이력서 영역 interaction
const ResumeContent = styled.a`
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
    padding-left: 20px;
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
    <SidebarSection>
      <SidebarHeader>
        <a href="/">Kim Junki</a>
      </SidebarHeader>
      <SidebarContent>
        <ResumeSection>
          <ResumeContent href={ResumePdf} download="김준기_이력서">
            <span>RESUME</span>
            <em />
          </ResumeContent>
        </ResumeSection>
      </SidebarContent>
      <SidebarFooter>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/junki-dev"
        >
          <img width={80} src={GithubLogo} alt="junki github" />
        </a>
      </SidebarFooter>
    </SidebarSection>
  );
};

export default TitleSidebar;
