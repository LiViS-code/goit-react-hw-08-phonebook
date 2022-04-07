import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from 'Pages/HomePage/HomePage';
import { logInThunk, signUpThunk } from 'redux/asyncThunks';

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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="login"
            element={<LoginPage onLoginUsr={onLoginUsr} />}
          ></Route>
          <Route
            path="register"
            element={<RegisterPage onRegisterUsr={onRegisterUsr} />}
          ></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
