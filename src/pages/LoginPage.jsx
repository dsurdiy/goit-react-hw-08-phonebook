import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginForm } from 'components/LoginForm/LoginForm';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(authSelectors.getIsLogin);
  const error = useSelector(authSelectors.getAuthError);

  const onLogin = credentials => {
    dispatch(authOperations.login(credentials));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  if (error) {
    toast.error('Login error! Change email or password and try again.');
  }

  return (
    <main>
      <LoginForm onSubmit={onLogin} />
    </main>
  );
};
