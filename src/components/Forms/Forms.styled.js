import styled from 'styled-components';
import { theme } from '../../constants/Theme';

const {
  colors: {
    primaryColor,
    reverseColor,
    backgroundColorForm,
    outlineColor,
    borderDisabledColor,
    backgroundDisabledColor,
    disabledColor,
  },
  transition: { timing, timingFunction },
  spacing,
} = theme;

export const Form = styled.form`
  min-width: 200px;
  max-width: 400px;
  margin: 0 auto ${spacing(4)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${spacing(5)};
  border: 1px solid ${primaryColor};
  border-radius: ${spacing(2)};
  background-color: ${backgroundColorForm}; ;
`;

export const Label = styled.label`
  margin-bottom: ${spacing(1)};
`;

export const Input = styled.input`
  padding: ${spacing(2)} ${spacing(3)};
  margin-bottom: ${spacing(4)};
  border: none;
  border-radius: ${spacing(2)};
  transition: outline ${timing} ${timingFunction};

  &[name='number'] {
    margin-bottom: ${spacing(8)};
  }

  &:hover,
  &:focus {
    outline: 2px solid ${outlineColor};
  }
`;

export const Button = styled.button`
  padding: ${spacing(1)} ${spacing(2)};
  border: none;
  border-radius: ${spacing(2)};
  color: inherit;
  outline: 1px solid ${primaryColor};
  transition: color ${timing} ${timingFunction},
    background-color ${timing} ${timingFunction};

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${reverseColor};
    background-color: ${primaryColor};
  }

  &:disabled,
  &[disabled] {
    cursor: auto;
    border: 1px solid ${borderDisabledColor};
    background-color: ${backgroundDisabledColor};
    color: ${disabledColor};
  }
`;

export const ButtonList = styled.ul`
  display: flex;
  padding-left: 0;
  margin-top: 0;
  list-style: none;
  justify-content: center;
`;

export const ButtonListItem = styled.li`
  &:not(:last-child) {
    margin-right: ${spacing(4)};
  }
`;
