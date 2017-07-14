import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../public/img/Ca-Gov-Logo-Gold.svg';

import {
  Grid,
} from 'react-bootstrap';

import './style.css';

/** Renders the Utility Header */
function HeaderUtility({
  title,
}) {
  return (
    <div className={'header-utility'}>
      <Grid>
        <div className={'header-utility__wrapper'}>

          <div className={'header-utility__left'}>
            <div className={'header-utility__logo'}>
              <a href="http://www.ca.gov">
                <img src={logo} alt={'CA Gov Logo'} />
              </a>
            </div>

            <div className={'header-utility__title'}>
              {title}
            </div>
          </div>

          <div className={'header-utility__link'}>
            <a href="/help">Contact Us</a>
          </div>

        </div>
      </Grid>
    </div>
  );
}

HeaderUtility.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderUtility;
