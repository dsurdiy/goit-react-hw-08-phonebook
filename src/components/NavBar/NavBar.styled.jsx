import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 61px;
  border-bottom: 1px solid #2e2e2e;
`;

export const Logo = styled(Link)`
  display: flex;
  padding: 15px;
  align-items: center;
  color: #2e2e2e;
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  transition: color 250ms linear;

  &:hover,
  :focus {
    color: #0d6efd;
  }

  svg {
    margin-left: 5px;
  }
`;
