import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Menu/Sidebar';
import PageHeader from '../components/Header/PageHeader';
import HR from '../components/HR';
import Info from '../components/Info/Info';
import BasicContent from '../components/Content/BasicContent';

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

// 연락 내용 style
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
                <strong>
                  고공공! (고민하고&nbsp;&nbsp;공부하고&nbsp;&nbsp;공유하자!)
                </strong>
              </h4>
              Node.js와 Java를 주로 사용하고 간결한 문법의 Go 언어를 좋아합니다.
              <br />
              <br />
              프로젝트 중에는 가독성과 자동화 등의 운영을 고려한 개발을
              중요시하고, 새로 도입 가능한 기술을 찾고 학습하고 동료들과
              공유합니다. 그리고 코드리뷰를 통해 제가 고민한것들을 보여주고,
              다른 사람의 스타일과 노력을 경험하여 세련된 코드를 작성하기 위해
              노력합니다.
              <br />
              <br />
              저는 Backend 개발자로서 안정적이고, 효율성 높은 시스템 그리고
              장애가 발생해도 빠르게 대처 가능한 시스템으로 만들기 위해 노력하고
              이러한 노력들이 성과로 나타났을 때 굉장한 성취감을 느낍니다.
              그리고 Backend 개발자이지만 Frontend, Blockchain 등 다른 기술에
              관심을 갖고 경험해보고 싶은 욕심이 있습니다. 이런 다양한 기술에
              대한 경험이 시스템을 안정적이고 효율적으로 만드는데 굉장한 도움이
              되고 많은 선택지를 제공한다고 생각하기 때문입니다.
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
