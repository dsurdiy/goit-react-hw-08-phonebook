import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { UserRoutes } from 'UserRoutes';
import { Layout } from 'components/Layout/Layout';

import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isGettingCurrentUser = useSelector(
    authSelectors.getIsGettingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !isGettingCurrentUser && (
      <>
        <Layout />
        <UserRoutes />

        <ToastContainer position="top-right" />
      </>
    )
  );
};
