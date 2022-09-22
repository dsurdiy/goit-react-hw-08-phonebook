import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';

import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>

        {/* <PublicRoute path="/">
        <HomePage />
      </PublicRoute>

      <PublicRoute path="/register" restricted>
        <RegisterPage />
      </PublicRoute>

      <PublicRoute path="/login" redirectTo="/contacts" restricted>
        <LoginPage />
      </PublicRoute>

      <PrivateRoute path="/contacts" redirectTo="/login">
        <ContactsPage />
      </PrivateRoute> */}

        <ToastContainer position="top-right" />
      </>
    )
  );
};
