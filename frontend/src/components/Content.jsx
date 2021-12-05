import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 15%;
  align-items: center;
  display: flex;
`;

const Title = styled.span`
  width: 40%;
  letter-spacing: 0em;
  font-size: 2vw;
  font-family: EconomicBold;
`;

const ContentContainer = styled.div`
  width: 60%;
`;

const SubTitle = styled.span`
  font-size: 1vw;
  font-family: EconomicBold;
`;

const SubContent = styled.span`
  font-size: 1vw;
  font-family: EconomicRegular;
`;

const Content = ({ title, subTitle, content }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <ContentContainer>
          <SubTitle>{subTitle}</SubTitle>
          <br />
          <SubContent>{content}</SubContent>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Content;
