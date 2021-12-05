import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import HR from '../../components/HR';
import PageHeader from '../../components/Header/PageHeader';
import BasicAccordionItem from '../../components/Accordion/BasicAccordionItem';

// Skill 페이지 컨테이너 style
const SkillContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  color: #000;
`;

// Skill 영역 style
const SkillSection = styled.div`
  padding: 7.5rem 8rem 4rem 8rem;
  width: 70%;
`;

// 아코디언 style
const AccordionContainer = styled.div`
  margin-top: 2em;
`;

// 기술명 style
const Title = styled.span`
  letter-spacing: 0em;
  font-size: 1.5vw;
  font-family: EconomicBold;
`;

const SkillDetailTemplate = () => {
  const { name } = useParams(); // parameter : 기술 이름
  const [pascalName, setPascalName] = useState('');
  const [skillData, setSkillData] = useState(); // 경력 데이터 state

  // 기술 데이터 로드
  const loadSkillData = useCallback(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/bo/skill/getSkillByName`;
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
        setPascalName(data.name);
        console.log(data.techStack);
        if (data.techStack) {
          setSkillData(data.techStack);
        }
      })
      .catch(() => {
        return null;
      });
  }, [skillData]);

  useEffect(() => {
    loadSkillData();
  }, []);

  return (
    <SkillContainer>
      <SkillSection>
        <PageHeader title={pascalName} />
        <HR />
        {!!skillData &&
          skillData.map((tech) => (
            <AccordionContainer key={tech.type}>
              {tech.type && <Title>{tech.type}</Title>}
              <BasicAccordionItem tech={tech} />
            </AccordionContainer>
          ))}
      </SkillSection>
    </SkillContainer>
  );
};

export default SkillDetailTemplate;
