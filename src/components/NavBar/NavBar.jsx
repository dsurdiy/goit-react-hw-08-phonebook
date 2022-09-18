import { TiContacts } from 'react-icons/ti';
import { NavHeader, Logo } from './NavBar.styled';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';

export const NavBar = () => {
  return (
    <NavHeader>
      <Logo to="/">
        Phonebook <TiContacts size={30} />
      </Logo>
      <AuthMenu />
    </NavHeader>
  );
};
