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
    font-family: Cafe24SurroundAir;
    letter-spacing: -1px;
  }

  .prefix-wrapper {
    font-size: 1em;
    font-family: Cafe24SurroundAir;
    letter-spacing: -1px;
  }

  .suffix-wrapper {
    font-size: 1em;
    font-family: Cafe24SurroundAir;
    letter-spacing: -1px;
    margin-left: 0px;
  }
`;

const SubMenu = ({ menuList }) => {
  return (
    <Container>
      <MenuContainer>
        {menuList.map((menu, index) => (
          <>
            <MenuItem prefix={`${index + 1}.`} suffix={menu.year}>
              {menu.name}
              <Link to="/work/unicef-renew" />
            </MenuItem>
            <HR />
          </>
        ))}
      </MenuContainer>
    </Container>
  );
};

SubMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SubMenu;
