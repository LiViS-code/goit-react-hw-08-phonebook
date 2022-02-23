// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HomePage from 'components/HomePage/HomePage';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';
// import { Container, Logo, Title, ContactsTitle, Message } from './App.styled';
// import toastMsg from './utils/toastMsg';
// import phonebook from './img/phonebook.png';
// import { addNewContact, fetchContacts, deleteContact } from 'redux/asyncThunks';
// import { setFilter } from 'redux/contactSlices';
// import { useEffect } from 'react';
// import { nanoid } from '@reduxjs/toolkit';

// import Loader from 'components/Loader/Loader';

export default function App() {
  const Layout = lazy(() => import('./components/Layout/Layout'));
  const LoginPage = lazy(() => import('components/LoginPage/LoginPage'));
  const RegisterPage = lazy(() =>
    import('components/RegisterPage/RegisterPage')
  );
  const ContactsPage = lazy(() =>
    import('components/ContactsPage/ContactsPage')
  );
  const LogOutPage = lazy(() => import('components/LogOutPage/LogOutPage'));

  // const dispatch = useDispatch();
  // const { contacts, loading, filter } = useSelector(
  //   state => state.phonebook,
  //   shallowEqual
  // );

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const onContactsGroup = contacts.length !== 0 ? true : false;
  // const onContactsFilter = contacts.length >= 2 ? true : false;

  // const onChangeState = (name, number) => {
  //   if (matchCheckName(name, contacts)) {
  //     toastMsg(name, 'warn');
  //     return 'not success';
  //   }

  // dispatch(addNewContact({ id: nanoid(), name, number }));

  // toastMsg(name, 'success');

  // return 'success';
  // };

  // const matchCheckName = (name, contacts) => {
  //   for (let i = 0; i < contacts.length; i += 1) {
  //     if (contacts[i].name === name) return true;
  //   }
  //   return false;
  // };

  // const onDelete = (id, name) => {
  //   dispatch(deleteContact(id));

  //   toastMsg(name, 'info');

  //   if (contacts.length <= 2) {
  //     onFilter('');
  //   }
  // };

  // const onFilter = word => {
  //   dispatch(setFilter(word));
  // };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="logout" element={<LogOutPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}