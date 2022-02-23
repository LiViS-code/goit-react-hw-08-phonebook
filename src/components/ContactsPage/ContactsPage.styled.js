import styled from 'styled-components';
import { theme } from '../../constants/Theme';

const { spacing } = theme;

export const ContactsTitle = styled.h2`
  margin-top: 0;
  margin-bottom: ${spacing(4)};
  font-size: 1.4em;
`;

export const Message = styled.p`
  text-align: center;
`;
