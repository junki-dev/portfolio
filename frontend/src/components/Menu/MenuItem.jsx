import React from 'react';
import styled from 'styled-components';

// 메뉴 item 영역 style
const MenuItemSection = styled.div`
  width: 100%;
  color: #eee;
  font-family: BigShouldersBold;
`;

// 메뉴 prefix style
const MenuitemPrefix = styled.span`
  color: #eee;
  font-size: 3em;
  font-family: BigShouldersBold;
`;

// 메뉴 내용 style
const MenuitemContent = styled.span`
  //   height: 100%;
  color: #eee;
  font-size: 10em;
  font-family: BigShouldersBold;
`;

const MenuItem = ({ prefix, item }) => (
  <MenuItemSection>
    <MenuitemPrefix>{prefix}</MenuitemPrefix>
    <MenuitemContent>{item}</MenuitemContent>
  </MenuItemSection>
);

export default MenuItem;
