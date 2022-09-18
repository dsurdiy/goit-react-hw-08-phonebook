import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  color: #2e2e2e;
  font-size: 18px;
  font-weight: 500;
  transition: color 300ms linear;

  &.active {
    color: #0d6efd;
  }

  &:hover,
  :focus {
    color: #0d6efd;
  }
`;
