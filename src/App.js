import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import PrivateRoute from './components/PrivateRoute';
import HomePage from 'Pages/HomePage/HomePage';
import { fetchCurrentUser, logInThunk, signUpThunk } from 'redux/asyncThunks';
import PublicRoute from 'components/PublicRoute';

export default function App() {
  const Layout = lazy(() => import('./components/Layout/Layout'));
  const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));
  const RegisterPage = lazy(() => import('Pages/RegisterPage/RegisterPage'));
  const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));

  const dispatch = useDispatch();

  const onLoginUsr = (email, password) => {
    dispatch(logInThunk({ email, password }));
  };

  const onRegisterUsr = (name, email, password) => {
    dispatch(signUpThunk({ name, email, password }));
  };

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage onLoginUsr={onLoginUsr} />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage onRegisterUsr={onRegisterUsr} />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
