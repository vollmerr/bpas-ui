export const newOnBlur = (onBlur, input) => (event, newValue, previousValue) => {
  if (onBlur) {
    onBlur(event, newValue, previousValue);
  }
  input.onBlur(event, newValue, previousValue);
}

export const newOnFocus = (onFocus , input) => (event) => {
  if (onFocus) {
    onFocus(event);
  }
  input.onFocus(event);
}

export const newOnChange = (onChange, input) => (event, newValue, previousValue) => {
  if (onChange) {
    onChange(event, newValue, previousValue);
  }
  input.onChange(event, newValue, previousValue);
}
