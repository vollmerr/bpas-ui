import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

/** Renders a group of form fields */
function Fields({
  fields,
  width,
}) {
  const displayVisible = (name) => {
    const { visible, ...field } = fields[name];

    if (visible) {
      return <Field key={name} field={field} width={width} />
    }

    return null;
  }

  return (
    <div>
      {Object.keys(fields).map((name) => (
        displayVisible(name)
      ))}
    </div>
  );
}

Fields.propTypes = {
  fields: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      error: PropTypes.string,
      label: PropTypes.string,
      tooltip: PropTypes.string,
      icon: PropTypes.bool,
    })
  ).isRequired,
  width: PropTypes.objectOf(PropTypes.number),
};

export default Fields;
