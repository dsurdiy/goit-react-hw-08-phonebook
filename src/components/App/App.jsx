import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { ContactsPage } from 'pages/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
