import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  letter-spacing: 0em;
  font-size: 5vw;
  font-family: EconomicBold;
`;

const SubTitle = styled.span`
  font-size: 2vw;
  font-family: EconomicRegular;
`;

const SubContent = styled.span`
  font-size: 1vw;
  font-family: EconomicBold;
`;

const BodyHeader = ({ title, subTitle, subContnet }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <div>
        <SubTitle>{subTitle}</SubTitle>
        <br />
        <SubContent>{subContnet}</SubContent>
      </div>
    </HeaderContainer>
  );
};

BodyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  subContnet: PropTypes.string.isRequired,
};

export default BodyHeader;
