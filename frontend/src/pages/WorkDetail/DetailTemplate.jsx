import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Menu/Sidebar';
import BodyHeader from '../../components/Header/BodyHeader';
import HR from '../../components/HR';
import Info from '../../components/Info/Info';
import BasicContent from '../../components/Content/BasicContent';

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

// 공통 영역 style
const CommonContainer = styled.div`
  margin-top: 5%;
`;

// 소개 제목 영역
const Title = styled.span`
  letter-spacing: -1px;
  font-size: 1.5vw;
  font-family: SangSang;
`;

// 소개 내용 style
const IntroductionContent = styled.div`
  font-size: 1vw;
  font-family: EconomicRegular;
`;

// 소개 내용 style
const PerformanceList = styled.ul`
  font-size: 1vw;
  font-family: EconomicRegular;
`;

// 기술 스택 영역 style
const Skills = styled.div`
  margin-top: 10%;

  .span {
    letter-spacing: -1px;
    font-size: 1.5vw;
    font-family: SangSang;
  }
`;

const DetailTemplate = () => {
  const { id } = useParams(); // parameter : 프로젝트 id
  const [workData, setWorkData] = useState(); // 경력 데이터 state

  // 경력 데이터 로드
  const loadWorkData = useCallback(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/career/getCareerById`;
    axios
      .get(url, {
        params: {
          id,
        },
      })
      .then(({ data: { resultCode, resultMessage, data } }) => {
        if (resultCode !== `0`) {
          console.log(`데이터 조회 실패: ${resultMessage}`);
          window.location.href = `/`;
        }
        setWorkData(data);
      })
      .catch(() => {
        return null;
      });
  }, [workData]);

  useEffect(() => {
    loadWorkData();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <Body>
        <BodyHeader title={workData && workData.name} />
        <HR />
        <InfoContainer>
          <Info title="Role" content={workData && workData.role} />
          <Info title="What" content={workData && workData.work} />
          <Info
            title="When"
            content={`${workData && workData.startDate} - ${
              workData && workData.endDate
            }`}
          />
        </InfoContainer>
        <CommonContainer>
          <Title>Introduce</Title>
          <div>
            <IntroductionContent>
              {workData && workData.description}
            </IntroductionContent>
          </div>
        </CommonContainer>
        <CommonContainer>
          <Title>Performance</Title>
          <div>
            <PerformanceList>
              {workData && workData.perform.map(data => <li>{data}</li>)}
            </PerformanceList>
          </div>
        </CommonContainer>
        <Skills>
          <Title>Skills</Title>
          <HR />
          {workData &&
            workData.skills.map(data => (
              <BasicContent
                key={data.id}
                title={data.name}
                subTitle={data.summary}
                content={data.description}
              />
            ))}
        </Skills>
      </Body>
    </div>
  );
};

export default DetailTemplate;
