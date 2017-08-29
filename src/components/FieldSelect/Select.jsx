import React from 'react';
import PropTypes from 'prop-types';

import { options } from '../util/propTypes';

import SelectStyled from './SelectStyled';
import Option from './Option';

/**
 * TODO TESTS
 * @param {array} options           - contains option objects
 * @param {bool} blankFirstOption   - determines if first option is blank
 * @return {JSX}
 */
/* eslint no-shadow: 0 */
const Select = ({ options, blankFirstOption, ...rest }) => (
  <SelectStyled componentClass={'select'} {...rest}>
    {blankFirstOption && <option />}
    {
      options.map(option => (
        <Option option={option} key={option.value} />
      ))
    }
  </SelectStyled>
);

Select.propTypes = {
  options: options.isRequired,
  blankFirstOption: PropTypes.bool,
};

Select.defaultProps = {
  blankFirstOption: true,
};

export default Select;
