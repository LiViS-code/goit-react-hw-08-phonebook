import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContact,
  fetchContacts,
  deleteContact,
  editContact,
} from '../asyncThunks';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], loading: false, filter: '' },

  reducers: {
    setFilter: {
      reducer: (state, { payload }) => {
        state.filter = payload;
      },
    },
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.loading = true;
    },

    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.loading = false;
    },

    [fetchContacts.rejected]: state => {
      state.loading = false;
    },

    [addNewContact.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
    },

    [deleteContact.pending]: state => {
      state.loading = true;
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      console.log(payload.id);
      const index = state.contacts.findIndex(user => user.id === payload.id);
      state.contacts.splice(index, 1);
      state.loading = false;
    },

    [editContact.pending]: state => {
      state.loading = true;
    },

    [editContact.fulfilled]: (state, { payload }) => {
      const index = state.contacts.findIndex(user => user.id === payload.id);
      state.contacts[index].name = payload.name;
      state.contacts[index].number = payload.number;
      state.loading = false;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
