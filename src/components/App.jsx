import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { currentUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Contacts = lazy(() => import('../pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  ) : (
    'Fetching user data...'
  );
}

export default App;
