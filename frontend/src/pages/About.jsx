import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';

import Sidebar from '../components/Menu/Sidebar';
import BodyHeader from '../components/Header/BodyHeader';
import HR from '../components/HR';
import Info from '../components/Info/Info';
import BasicContent from '../components/Content/BasicContent';

// body 영역 style
const Body = styled.div`
  margin: 5%;
  width: 60%;
`;

// 기본 정보 영역 style
const InfoContainer = styled.div`
  margin-top: 5%;
  display: flex;
`;

// 소개 영역 style
const Introduction = styled.div`
  margin-top: 5%;
`;

// 소개 제목 style
const Title = styled.span`
  letter-spacing: 0em;
  font-size: 1.5vw;
  font-family: EconomicBold;
`;

// 소개 내용 style
const IntroductionContent = styled.span`
  font-size: 1vw;
  font-family: EconomicRegular;
`;

// 경험 영역 style
const Experience = styled.div`
  margin-top: 10%;
`;

const About = () => {
  /** axois 예제 */
  // const [userName, setUserName] = useState();

  // const fetchUserName = async () => {
  //   console.log(`===========================`);
  //   const url = 'http://localhost:4500/';
  //   axios
  //     .get(url)
  //     .then(function (response) {
  //       setUserName(response.data.userName);
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(`실패 + ${error}`);
  //     });
  // };

  return (
    <div className="home">
      {/* <p>--------------------------</p>
      {userName}
      <input type="submit" onClick={fetchUserName} value="get" />
      <p>--------------------------</p> */}
      <Sidebar />
      <Body>
        <BodyHeader
          title="I AM KIM JUNKI"
          subTitle="Blockchain Developer"
          subContnet="Also Web, Backend, Frontend, Infro..."
        />
        <HR />
        <InfoContainer>
          <Info title="When" content="Starting in 2018.10.01" />
          <Info title="What" content="Infra / Backend" />
        </InfoContainer>
        <Introduction>
          <Title>Introduce</Title>
          <div>
            <IntroductionContent>자기소개 내용</IntroductionContent>
          </div>
        </Introduction>
        <Experience>
          <Title>Experience</Title>
          <HR />
          <BasicContent
            title="Computer Programming"
            subTitle="Student"
            content="4년간 컴퓨터 프로그래밍 기본과 이해를 배움"
          />
          <BasicContent
            title="Blockchain"
            subTitle="programmer(blockchain)"
            content="2년간 hyperledger 기반 blockchain network 구축과 운영을 수행"
          />
          <BasicContent
            title="Web Programming"
            subTitle="programmer(front-end / back-end)"
            content="1년간 React.js, Node.js, Spring, Oracle, MSSql 등을 사용한 웹 서비스 구축"
          />
        </Experience>
      </Body>
    </div>
  );
};

export default About;