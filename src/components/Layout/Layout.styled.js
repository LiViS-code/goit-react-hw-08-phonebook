import styled from 'styled-components';
import { theme } from '../../constants/Theme';

const {
  spacing,
  colors: { primaryColor, backgroundColorForm, backgroundColor, boxShadow },
} = theme;

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 85%;
  /* max-width: 320px;
  min-width: 300px; */
  margin: 0 auto;
  padding: ${spacing(5)};
  font-size: 1em;
  border-radius: ${spacing(2)};
  color: ${primaryColor};
  background-color: ${backgroundColor};
  box-shadow: ${boxShadow};
`;

export const Header = styled.header`
  margin-bottom: ${spacing(4)};
  padding: ${spacing(4)} 0 0 ${spacing(4)};
  border-radius: ${spacing(1)};
  background-color: ${backgroundColorForm};
  box-shadow: ${boxShadow};
`;

export const Main = styled.div`
  margin-bottom: ${spacing(4)};
  padding-left: ${spacing(4)};
  padding-right: ${spacing(4)};
  min-height: calc(100vh - 175px);
`;

export const Footer = styled.footer`
  padding: ${spacing(2)};
  font-size: 0.8em;
  border-radius: ${spacing(1)};
  background-color: ${backgroundColorForm};
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${spacing(4)};
  font-size: 1.8em;
`;

export const Logo = styled.img`
  width: 50px;
  margin-right: ${spacing(2)};
`;
