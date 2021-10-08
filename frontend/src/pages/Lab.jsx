import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Menu/Sidebar';

// Component style
const Section = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  color: #000;
`;

const Lab = () => {
  return (
    <Section>
      <Sidebar />
      <span>lab 페이지입니다.</span>
    </Section>
  );
};

export default Lab;
