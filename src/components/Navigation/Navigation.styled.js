import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../constants/Theme';

const {
  colors: { accentColor, primaryColor },
  transition: { timing, timingFunction },
  spacing,
} = theme;

export const Nav = styled.nav`
  padding: ${spacing(5)} 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: ${spacing(4)};

  &:not(:last-child) {
    margin-right: ${spacing(4)};
  }
`;

export const NavigationLink = styled(NavLink)`
  padding: ${spacing(2)};
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  border-radius: ${spacing(2)};
  transition: color ${timing} ${timingFunction},
    background-color ${timing} ${timingFunction};
  &:hover {
    outline: 2px solid ${primaryColor};
  }
  &:focus,
  &.active {
    color: ${accentColor};
    background-color: ${primaryColor};
  }
  &:hover,
  &:focus,
  &.active {
    outline-offset: ${spacing(0.5)};
  }
`;
