import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Menu/Sidebar';
import HR from '../../components/HR';
import Info from '../../components/Info/Info';
import BasicContent from '../../components/Content/BasicContent';

// body 영역 style
const Body = styled.div`
  margin: 5%;
  width: 60%;
`;

// body 제목 style
const BodyTitle = styled.span`
  display: inline-block;
  font-size: 4vw;
  font-family: BigShouldersBold;
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
  letter-spacing: -1px;
  font-size: 1.5vw;
  font-family: BigShouldersBold;
`;

// 소개 내용 style
const IntroductionContent = styled.span`
  font-size: 1vw;
  font-family: EconomicRegular;
`;

// 경험 영역 style
const TechStack = styled.div`
  margin-top: 10%;
`;

const data = {
  name: `Blockchain`,
  since: `2018`,
  count: `4`,
  stack: `Hyperledger`,
  endDate: `2021.08`,
  work: `back-end | front-end, api 개발 및 화면 개발`,
  description: `설명을 적겠습니다.`,
  techStack: [
    {
      skill: `skill`,
      title: `title`,
      description: `description`,
    },
    {
      skill: `skill2`,
      title: `title2`,
      description: `description2`,
    },
  ],
};

const DetailTemplate = () => {
  // const { project } = useParams();
  // console.log(project);
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
        <BodyTitle>{data.name}</BodyTitle>
        <HR />
        <InfoContainer>
          <Info title="Since" content={data.since} />
          <Info title="Projects" content={data.count} />
          <Info title="Tech Stack " content={data.stack} />
        </InfoContainer>
        <Introduction>
          <Title>Introduce</Title>
          <div>
            <IntroductionContent>{data.description}</IntroductionContent>
          </div>
        </Introduction>
        <TechStack>
          <Title>Tech Stack</Title>
          <HR />
          {data.techStack.map(skill => (
            <BasicContent
              title={skill.skill}
              subTitle={skill.title}
              content={skill.description}
            />
          ))}
        </TechStack>
      </Body>
    </div>
  );
};

export default DetailTemplate;
