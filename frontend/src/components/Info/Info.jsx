import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin-right: 3%;
`;

const Title = styled.span`
  letter-spacing: 0em;
  font-size: 1.5vw;
  font-family: EconomicBold;
`;

const Content = styled.span`
  font-size: 1vw;
  font-family: EconomicRegular;
`;

const Info = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <Content>{content}</Content>
      </div>
    </Container>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Info;
