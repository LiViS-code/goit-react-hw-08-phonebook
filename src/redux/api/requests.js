import { http } from './http-common';

export const signUp = credentials => {
  console.log(credentials);
  return http.post('/users/signup', credentials);
};

export const logIn = credentials => {
  return http.post('/users/login', credentials);
};

export const logOut = () => {
  return http.post('/users/logout');
};

export const getUserCurrent = () => {
  return http.get('/users/current');
};

export const getContacts = () => {
  return http.get('/contacts');
};

export const addContact = data => {
  return http.post('/contacts', data);
};

export const removeContact = id => {
  return http.delete(`/contacts/${id}`);
};

export const patchContact = id => {
  return http.patch(`/contacts/${id}`);
};
