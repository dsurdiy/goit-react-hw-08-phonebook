import { useSelector } from 'react-redux';
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

      {isLogin ? <UserMenu /> : <AuthMenu />}
    </NavHeader>
  );
};
