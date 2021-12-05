import React from 'react';
import styled from 'styled-components';

import PageHeader from '../components/Header/PageHeader';
import HR from '../components/HR';
import Info from '../components/Info/Info';
import BasicContent from '../components/Content/BasicContent';
import Sidebar from '../components/Menu/Sidebar';

// About 페이지 컨테이너 style
const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  color: #000;
`;

// About 페이지 영역 style
const AboutSection = styled.div`
  padding: 7rem 8rem 4rem 8rem;
  width: 70%;
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

// 공통 영역 style
const CommonSection = styled.div`
  margin-top: 10%;
`;

// 연락 내용 styleㄷ
const ContactContent = styled.p`
  font-size: 1vw;
  font-family: EconomicBold;
`;

const About = () => {
  return (
    <AboutContainer>
      <Sidebar />
      <AboutSection>
        <PageHeader
          title="I AM KIM JUNKI"
          subTitle="Backend Developer"
          subContnet="Also Blockchain, Frontend, Infro..."
        />
        <HR />
        <InfoContainer>
          <Info title="When" content="Starting in 2018.10.01" />
          <Info title="What" content="Backend / Blockchain" />
        </InfoContainer>
        <Introduction>
          <Title>Introduce</Title>
          <div>
            <IntroductionContent>
              <br />
              <h4>
                <strong>학습하고 도전하자</strong>
              </h4>
              저는 Backend와 Blockchain 개발을 주로 하며 Frontend 개발을
              재미있어합니다.
              <br />
              <br />
              <strong>Backend</strong> 개발로 간결하고 개발이 용이한 Node.js를
              주로 사용하고 Nest.js, Apollo 등을 도입해 Node.js를 더 잘 사용하기
              위한 꾸준한 학습과 도전을 합니다. <br />
              <strong>Blockchain</strong>의 투명성과 안정성 그리고 탈중앙화라는
              특성에 매력을 느껴 Blockchain 전문 기업에 근무를 하고 있습니다.
              Hyperledger Fabric을 사용한 시스템 구축과 운영 경험이 있습니다.
              구축 시에는 블록 생성주기, Endorsement policy 설정 들을 최적화
              시켜 성능을 높이고, Shell Script 개발로 배포 자동화를 통해 개발 및
              운영효율을 높이기 위한 노력을 합니다.
              <br />
              <strong>Frontend</strong>는 React.js를 사용해 개발합니다. 프로젝트
              중에 Frontend 개발을 할 수 있는 기회가 생기면 망설임 없이 도전해서
              프로젝트를 수행하며, 사용자와 직접 맞닿아 있기에 더 재미있습니다.
            </IntroductionContent>
          </div>
        </Introduction>
        <CommonSection>
          <Title>Experience</Title>
          <HR />
          <BasicContent
            title="Computer Programming"
            subTitle="Student"
            content="4년간 컴퓨터 프로그래밍 기초를 익혔습니다."
          />
          <BasicContent
            title="Backend"
            subTitle="Web Programming"
            content="Java, Node.js 를 사용한 Backend 개발을 했습니다. "
          />
          <BasicContent
            title="Blockchain"
            subTitle="private blockchain"
            content="Hyperledger 기반 blockchain system 구축과 운영을 수행했습니다."
          />
          <BasicContent
            title="Frontend"
            subTitle="Web Programming"
            content="React.js를 사용한 Frontend 개발을 했습니다."
          />
        </CommonSection>
        <CommonSection>
          <Title>Contact</Title>
          <HR />
          <ContactContent> 메일 | kjgcde@gamil.com</ContactContent>
          <ContactContent> 전화 | 010.2326.7711</ContactContent>
        </CommonSection>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;
