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
  patchContact,
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
      toastMsg(error, 'error');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logInThunk = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const result = await logIn(credentials);
      token.set(result.data.token);
      return result.data;
    } catch (error) {
      toastMsg(error, 'error');
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
      toastMsg(error, 'error');
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
      toastMsg(error, 'error');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const fetchContacts = createAsyncThunk(
  '/contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await getContacts();
      return data;
    } catch (error) {
      toastMsg(error, 'error');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addNewContact = createAsyncThunk(
  '/contacts/addNewContact',
  async (contactData, thunkAPI) => {
    try {
      const { data } = await addContact(contactData);
      return data;
    } catch (error) {
      toastMsg(error, 'error');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await removeContact(contactId);
      return data;
    } catch (error) {
      toastMsg(error, 'error');
      return thunkAPI.rejectWithValue();
    }
  }
);

export const editContact = createAsyncThunk(
  '/contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await patchContact(id, name, number);
      return data;
    } catch (error) {
      toastMsg(error, 'error');
      return thunkAPI.rejectWithValue();
    }
  }
);
