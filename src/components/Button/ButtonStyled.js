import styled from 'styled-components';

const ButtonStyled = styled.button`
  transition: all 0.5s;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.42857143;
  border-radius: 3px;
  user-select: none;
  color: #000;
  background-color: ${props => props.theme[props.styleType]};
  border-color: #000;
`;

export default ButtonStyled;
