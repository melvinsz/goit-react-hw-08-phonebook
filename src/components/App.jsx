import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RegisterForm } from './Register/Register';
import { LoginForm } from './Login/Login';
import Home from './Home/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterForm}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginForm} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Form} redirectTo="/login" />}
          >
            <Route index element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    )
  );
};

export default App;
