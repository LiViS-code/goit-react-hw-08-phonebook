import axios from 'axios';
import { http } from './http-common';

export const signUp = credentials => {
  return http.post('/users/signup', credentials);
};

export const logIn = credentials => {
  return http.post('/users/login', credentials);
};

export const logOut = () => {
  return axios.post('/users/logout');
};

export const getUserCurrent = () => {
  return axios.get('/users/current');
};

export const getContacts = () => {
  return axios.get('/contacts');
};

export const addContact = data => {
  return axios.post('/contacts', data);
};

export const removeContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

export const patchContact = (id, name, number) => {
  return axios.patch(`/contacts/${id}`, { name, number });
};
