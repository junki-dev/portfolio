import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HR from '../HR';

const Container = styled(ProSidebar)`
  padding: 4rem;
  width: 70%;
`;

const MenuContainer = styled(Menu)`
  width: 100%;
  padding-top: 0px !important;

  .pro-inner-item {
    height: 10vh;
  }

  .pro-item-content {
    height: 100%;
    font-size: 2.7em;
    font-family: BigShouldersBold;
    letter-spacing: -1px;
  }

  .prefix-wrapper {
    font-size: 1.2em;
    font-family: BigShouldersBold;
    letter-spacing: -1px;
  }

  .suffix-wrapper {
    font-size: 1.2em;
    font-family: BigShouldersBold;
    letter-spacing: -1px;
    text-align: end;
    white-space: nowrap;
    max-width: 15%;
    width: 15%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BasicMenuTemplate = ({ menuList }) => {
  return (
    <Container>
      <MenuContainer>
        {menuList.map((menu, index) => (
          <>
            <MenuItem prefix={`${index + 1}.`} suffix={menu.suffix}>
              {menu.title}
              <Link to={`${menu.link}`} />
            </MenuItem>
            <HR />
          </>
        ))}
      </MenuContainer>
    </Container>
  );
};

BasicMenuTemplate.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BasicMenuTemplate;
