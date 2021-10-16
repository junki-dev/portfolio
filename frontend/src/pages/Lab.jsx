import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Menu/Sidebar';

// Lab 메뉴 style
const LabContiner = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  color: #000;
`;

// Lab 영역 style
const LabSection = styled.div`
  padding: 5.8rem 8rem 4rem 8rem;
  width: 70%;
`;

// 제목 style
const Title = styled.span`
  display: inline-block;
  font-size: 6em;
  letter-spacing: -1px;
  font-family: NanumBarunpen;
  white-space: nowrap;
`;

// 설명 style
const Description = styled.span`
  display: inline-block;
  font-size: 2.3em;
  letter-spacing: -1px;
  font-family: NanumBarunpen;
  white-space: nowrap;
`;

const Lab = () => {
  return (
    <LabContiner>
      <Sidebar />
      <LabSection>
        <Title>
          Laboratory <br />
          &nbsp;&nbsp; Comming soon...
        </Title>
        <br />
        <Description>
          &nbsp;&nbsp;알고 있는 것을 더 섬세하고 세련되게, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;모르는 것은 경험을 통해 배우기 위한 곳입니다.
        </Description>
        <br />
      </LabSection>
    </LabContiner>
  );
};

export default Lab;
