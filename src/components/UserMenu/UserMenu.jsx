import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const email = useSelector(authSelectors.getEmail);

  return (
    <div>
      <span>{email}</span>
      <button type="button">Logout</button>
    </div>
  );
};
