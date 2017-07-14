import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './style.css';

const defaultLinks = [
  { text: 'Home', href: '/', icon: 'home' },
  { text: 'Help', href: '/help', icon: 'question-line' },
];

/** Renders the Utility Header */
function HeaderNavLink({
  links = defaultLinks,
}) {
  return (
    <ul className={'header-nav-links'}>
      {links.map((link, i) => (
        <li key={i} className={'header-nav-links__item'}>
          <a href={link.href}>
            <Icon icon={link.icon} className={'header-nav-links__icon'} />
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

HeaderNavLink.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default HeaderNavLink;
