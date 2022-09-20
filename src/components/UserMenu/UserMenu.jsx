import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);

  return (
    <div>
      <span>{email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </button>
    </div>
  );
};
