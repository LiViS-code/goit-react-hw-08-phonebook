import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toastMsg from 'utils/toastMsg';
import {
  getContacts,
  addContact,
  removeContact,
  signUp,
  logIn,
  logOut,
  getUserCurrent,
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
  async (credentials, thunkAPI) => {
    try {
      const { data } = await signUp(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logInThunk = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await logIn(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toastMsg('Authorisation Error', 'warn');
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOutThunk = createAsyncThunk(
  '/users/logout',
  async (_, thunkAPI) => {
    try {
      await logOut();
      token.unset();
      return;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.authUser.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await getUserCurrent();
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

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
