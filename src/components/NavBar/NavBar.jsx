import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TiContacts } from 'react-icons/ti';
import { NavHeader, Logo } from './NavBar.styled';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import authSelectors from 'redux/auth/auth-selectors';

export const NavBar = () => {
  const isLogin = useSelector(authSelectors.getIsLogin);

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
