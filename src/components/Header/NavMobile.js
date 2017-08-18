import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../util/theme';
import Icon from '../Icon';


const Menu = styled.a`
  color: ${theme.color.primary};
  cursor: pointer;
  float: right;
  margin-top: 1.2em;

  &:hover {
    text-decoration: none;
  }
`;

/** Renders the navbar logo  */
function NavMobile({
  onClick,
}) {
  return (
    <Menu onClick={onClick} >
      <Icon icon={'menu'} size={36} />
    </Menu>
  );
}

NavMobile.PropTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NavMobile;
