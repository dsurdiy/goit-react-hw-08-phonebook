import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [contactsOperations.deleteContact.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [contactsOperations.deleteContact.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export default contactsSlice.reducer;
