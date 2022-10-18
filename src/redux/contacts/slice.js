import { fetchContacts, addNewContact, deleteContact } from './operations';
import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

const contactsInitState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const requestActions = [fetchContacts, addNewContact, deleteContact];
const isPendingActions = isPending(...requestActions);
const isFulfilledActions = isFulfilled(...requestActions);
const isRejectedActions = isRejected(...requestActions);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: buider =>
    buider
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(c => c.id !== action.payload);
      })
      .addMatcher(isAnyOf(isFulfilledActions), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(isPendingActions), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(isRejectedActions), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter } = contactsSlice.actions;

export const contactsReduser = contactsSlice.reducer;
