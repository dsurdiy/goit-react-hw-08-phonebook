import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(authSelectors.getIsLogin);
  const error = useSelector(authSelectors.getAuthError);

  const onRegister = credentials => {
    dispatch(authOperations.register(credentials));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  if (error) {
    toast.error('Auth error! Please, change credentials and try again.');
  }

  return (
    <main>
      <RegisterForm onSubmit={onRegister} />
    </main>
  );
};
