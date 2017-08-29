import React from 'react';

import RadioHidden from './RadioHidden';
import RadioLabel from './RadioLabel';

function Radio({
  name,
  value,
  option,
  disabled
}) {
  const checked = value === option.value;
  const isDisabled = disabled || option.disabled;
  const id = `${name}_${option.value}`;

  const hiddenProps = {
    id,
    name,
    checked,
    type: 'radio',
    value: option.value,
    disabled: isDisabled,
  };

  const labelProps = {
    label: option.label,
    name: id,
    checked,
    disabled: isDisabled,
  };

  return (
    <div>
      <RadioHidden {...hiddenProps} />
      <RadioLabel {...labelProps} />
    </div>
  );
}

export default Radio;
