import styled from 'styled-components';
import FormControl from 'react-bootstrap/lib/FormControl';
import theme from '../util/theme';

// FIXME!!!!!!
// disabled background (still use bootstrap...) remove formcontrol?
/* eslint no-confusing-arrow: 0 */
const Input = styled(FormControl)`
  text-overflow: ellipsis;
  border-radius: 0;
  height: 36px;
  font-size: ${theme.font.md}px;
  background: ${props => props.disabled ? theme.color.grey.primary : theme.color.grey.white};
`;

export default Input;
