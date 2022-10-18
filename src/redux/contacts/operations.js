import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


 axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idToRemove, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${idToRemove}`);
      return idToRemove;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
