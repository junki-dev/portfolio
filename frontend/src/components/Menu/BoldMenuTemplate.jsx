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

  .pro-inner-item {
    height: 10vh;
  }

  .pro-item-content {
    height: 100%;
    font-size: 3em;
    font-family: BigShouldersBold;
  }

  .suffix-wrapper {
    width: 30%;
    text-align: end;
    font-size: 1.3em;
    font-family: EconomicBold;
  }
`;

const BoldMenuTemplate = ({ menuList }) => {
  return (
    <Container>
      <MenuContainer>
        {menuList.map(menu => (
          <>
            <MenuItem suffix={menu.suffix}>
              {menu.name}
              <Link to={menu.link} />
            </MenuItem>
            <HR />
          </>
        ))}
      </MenuContainer>
    </Container>
  );
};

BoldMenuTemplate.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoldMenuTemplate;
