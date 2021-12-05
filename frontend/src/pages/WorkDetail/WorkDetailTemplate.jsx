import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import PageHeader from '../../components/Header/PageHeader';
import HR from '../../components/HR';
import Info from '../../components/Info/Info';
import BasicContent from '../../components/Content/BasicContent';

// Work 상세 영역 style
const WorkDetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%
  margin: 0 auto;
  color: #000;
`;

// body 영역 style
const WorkDetailSection = styled.div`
  padding: 5.5rem 8rem 4rem 8rem;
  width: 70%;
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
  font-family: EconomicBold;
`;

// 소개 내용 style
const IntroductionContent = styled.div`
  font-size: 1vw;
  font-family: EconomicRegular;
`;

// 소개 내용 style
const ExperienceList = styled.ul`
  font-size: 1vw;
  font-family: EconomicRegular;
`;

// 기술 스택 영역 style
const SkillsSection = styled.div`
  margin-top: 10%;

  .span {
    letter-spacing: -1px;
    font-size: 1.5vw;
    font-family: SangSang;
  }
`;

// troubleshooting 영역 style
const TroubleSection = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;

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
    const url = `${process.env.REACT_APP_BACKEND_URL}/bo/career/getCareerById`;
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
    <WorkDetailContainer>
      <WorkDetailSection>
        <PageHeader title={workData && workData.name} lang="kor" />
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
          <Title>Work Experience</Title>
          <div>
            <ExperienceList>
              {workData &&
                workData.experience.map((data) => (
                  <li key={data.title}>
                    {data.title}
                    <ul>
                      {!!data.description &&
                        data.description.map((desc) => (
                          <li key={data.title}>{desc}</li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ExperienceList>
          </div>
        </CommonContainer>
        <SkillsSection>
          <Title>Skills</Title>
          <HR />
          {workData &&
            workData.skills.map((data) => (
              <BasicContent
                key={data.id}
                title={data.name}
                subTitle={data.summary}
                content={data.description}
              />
            ))}
        </SkillsSection>
        {workData && workData.troubleshooting.length > 0 && (
          <TroubleSection>
            <Title>Troubleshooting</Title>
            <HR />
            {workData.troubleshooting.map((trouble) => (
              <Accordion allowZeroExpanded key={trouble.title}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{trouble.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      dangerouslySetInnerHTML={{ __html: trouble.description }}
                    />
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </TroubleSection>
        )}
      </WorkDetailSection>
    </WorkDetailContainer>
  );
};

export default DetailTemplate;
