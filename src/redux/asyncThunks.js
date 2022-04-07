import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getContacts,
  addContact,
  removeContact,
  signUp,
  logIn,
  logOut,
} from './api/requests';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUpThunk = createAsyncThunk(
  '/users/signup',
  async credentials => {
    const { data } = await signUp(credentials);
    token.set(data.token);
    return data;
  }
);

export const logInThunk = createAsyncThunk(
  '/users/login',
  async credentials => {
    const { data } = await logIn(credentials);
    token.set(data.token);
    return data;
  }
);

export const logOutThunk = createAsyncThunk('/users/logout', async () => {
  const { data } = await logOut();
  token.unset();
  return data;
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
