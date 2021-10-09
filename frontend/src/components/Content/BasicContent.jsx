import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HR from '../HR';

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

const BasicContent = ({ title, subTitle, content }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <ContentContainer>
          <SubTitle>{subTitle || ``}</SubTitle>
          <br />
          <SubContent>{content}</SubContent>
        </ContentContainer>
      </Container>
      <HR />
    </>
  );
};

BasicContent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string.isRequired,
};

BasicContent.defaultProps = {
  subTitle: ``,
};

export default BasicContent;
