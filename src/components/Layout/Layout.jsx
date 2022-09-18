import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { NavBar } from 'components/NavBar/NavBar';

export const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
};
