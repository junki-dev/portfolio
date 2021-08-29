import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Sidebar from '../../components/Menu/Sidebar';
import HR from '../../components/HR';
import Info from '../../components/Info/Info';
import DefaultModal from '../../components/Modal/DefaultModal';

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
  count: `4`,
  stack: `Hyperledger`,
  endDate: `2021.08`,
  work: `back-end | front-end, api 개발 및 화면 개발`,
  description: `설명을 적겠습니다.`,
  troubles: [
    {
      title: `trouble1`,
    },
    {
      title: `trouble2`,
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
          <Info title="Projects" content={data.count} />
          <Info title="Tech Stack " content={data.stack} />
        </InfoContainer>
        <Introduction>
          <Title>Explanation</Title>
          <div>
            <IntroductionContent>{data.description}</IntroductionContent>
          </div>
        </Introduction>
        <TechStack>
          <Title>Trouble Shooting</Title>
          <HR />
          {data.troubles.map(trouble => (
            <>
              {/* <ContentTitle>{trouble.title}</ContentTitle> */}
              <DefaultModal title={trouble.title} />
              <HR />
            </>
          ))}
        </TechStack>
      </Body>
    </div>
  );
};

export default DetailTemplate;
