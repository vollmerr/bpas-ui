import styled from 'styled-components';

import theme from '../util/theme';
import Label from '../Label';

const getLabelStatus = ({ disabled = false, checked = false }) => {
  if (checked) {
    return `
      background: ${disabled ? theme.color.grey.tertiary : theme.color.theme.primary};
      border-color: ${disabled ? theme.color.grey.primary : theme.color.theme.secondary};
      content: 'N';
    `;
  }

  if (disabled) {
    return `
      background: ${theme.color.grey.light};
      border-color: ${theme.color.grey.tertiary};
    `;
  }

  return `
    background: ${theme.color.grey.lighter};
    border-color: ${theme.color.grey.tertiary};
  `;
};

const RadioLabel = styled(Label) `
  &:before {
    border-radius: 100%;
    border: 1px solid;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    position: relative;
    margin-right: 1em;
    vertical-align: top;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    text-align: center;
    transition: all 250ms ease;
    color: ${theme.color.grey.white};
    font-family: 'CaGov';
    content: '';
    ${props => getLabelStatus(props)}
  }

  font-weight: 400;
  padding-left: 0;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export default RadioLabel;
