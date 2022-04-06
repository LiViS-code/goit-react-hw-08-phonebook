import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  removeContact,
  signUp,
  logIn,
  logOut,
} from './api/requests';

export const signUpThunk = createAsyncThunk(
  '/users/signup',
  async credentials => {
    const { data } = await signUp(credentials);
    return data;
  }
);

export const logInThunk = createAsyncThunk(
  '/users/login',
  async credentials => {
    const { data } = await logIn(credentials);
    return data;
  }
);

export const logOutThunk = createAsyncThunk('/users/signup', async () => {
  const result = await logOut();
  return result.data;
});

export const fetchContacts = createAsyncThunk(
  '/contacts/getContacts',
  async () => {
    const result = await getContacts();
    return result.data;
  }
);

export const addNewContact = createAsyncThunk(
  '/contacts/addNewContact',
  async contactData => {
    const result = await addContact(contactData);
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async id => {
    const result = await removeContact(id);
    return result.data;
  }
);
