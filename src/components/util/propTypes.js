import PropTypes from 'prop-types';

export const meta = PropTypes.shape({
  error: PropTypes.string,
  touched: PropTypes.bool,
});

export const input = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
  validation: PropTypes.arrayOf(PropTypes.string),
});

export const option = PropTypes.shape({
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string,
});

export const options = PropTypes.arrayOf(option);

export const tooltip = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.node,
]);

