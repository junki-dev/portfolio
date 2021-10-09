import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderSection = styled.div`
  width: 100%;
  height: 10%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  display: inline-block;
  font-size: 6em;
  letter-spacing: -1px;
  font-family: NanumBarunpen;
  white-space: nowrap;

  :lang(kor) {
    font-size: 5rem;
    letter-spacing: -3px;
  }
`;

const SubTitle = styled.span`
  font-size: 2vw;
  font-family: NanumBarunpen;
`;

const SubContent = styled.span`
  font-size: 1vw;
  font-family: NanumBarunpen;
`;

const PageHeader = ({ title, subTitle, subContnet, lang }) => {
  return (
    <HeaderSection>
      <Title lang={lang || ``}>{title}</Title>
      <div>
        <SubTitle>{subTitle}</SubTitle>
        <br />
        <SubContent>{subContnet}</SubContent>
      </div>
    </HeaderSection>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  subContnet: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default PageHeader;
