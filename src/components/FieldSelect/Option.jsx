import React from 'react';

import { option } from '../util/propTypes';

/**
 * TODO TESTS
 * @param {object} option   - contains option data
 * @return {JSX}
 */
const Option = ({ option: { label, ...rest } }) => (
  <option {...rest}>{label}</option>
);

Option.propTypes = {
  option: option.isRequired,
};

export default Option;
