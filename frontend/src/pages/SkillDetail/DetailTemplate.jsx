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
import 'react-accessible-accordion/dist/fancy-example.css';
import Sidebar from '../../components/Menu/Sidebar';
import HR from '../../components/HR';

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

const DetailTemplate = () => {
  const { name } = useParams(); // parameter : 기술 이름
  const [skillData, setSkillData] = useState(); // 경력 데이터 state

  // 기술 데이터 로드
  const loadSkillData = useCallback(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/skill/getSkillByName`;
    axios
      .get(url, {
        params: {
          name,
        },
      })
      .then(({ data: { resultCode, resultMessage, data } }) => {
        if (resultCode !== `0`) {
          console.log(`데이터 조회 실패: ${resultMessage}`);
          window.location.href = `/`;
        }
        setSkillData(data);
      })
      .catch(() => {
        return null;
      });
  }, [skillData]);

  useEffect(() => {
    loadSkillData();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <Body>
        <BodyTitle>{name}</BodyTitle>
        <HR />

        <Accordion>
          {!!skillData &&
            skillData.techStack.map((skill) => (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{skill.name}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
        </Accordion>

        {/* <InfoContainer>
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
              <DefaultModal title={trouble.title} />
              <HR />
            </>
          ))}
        </TechStack> */}
      </Body>
    </div>
  );
};

export default DetailTemplate;
