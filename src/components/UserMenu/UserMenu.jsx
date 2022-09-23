import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);

  const onLogout = () => dispatch(authOperations.logout());

  return (
    <div>
      <span>{email}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
