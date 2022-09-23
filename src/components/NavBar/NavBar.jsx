import { NavLink } from 'react-router-dom';
import { TiContacts } from 'react-icons/ti';
import { NavHeader, Logo } from './NavBar.styled';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';

export const NavBar = () => {
  const isLogin = useAuth();

  return (
    <NavHeader>
      <Logo to="/">
        Phonebook <TiContacts size={30} />
      </Logo>

      {isLogin ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <UserMenu />
        </>
      ) : (
        <AuthMenu />
      )}
    </NavHeader>
  );
};
