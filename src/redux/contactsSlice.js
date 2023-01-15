import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 0, name: 'Alex', number: '444 - 44 - 44' },
      { id: 1, name: 'Alexxx', number: '433 - 44 - 44' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    getFilterContsacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const { addContact, deleteContact, getFilterContsacts } =
  contactsSlice.actions;

export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.contacts;

export const persisteContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
