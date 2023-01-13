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
  },
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  // blacklist: ['filter'],
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persisteContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
