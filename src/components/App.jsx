import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
