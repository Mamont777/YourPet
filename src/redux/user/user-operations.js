import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getUserCurrentNotices = createAsyncThunk(
  'auth/userCurrentNotices',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/users/current/notices');
      // console.log('dataCurrentNotices:', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserCurrentNotices = createAsyncThunk(
  'auth/deleteUserCurrentNotices',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `/api/users/current/notices/${noticeId}`
      );
      // console.log('dataCurrentNotices:', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserCurrentFavorite = createAsyncThunk(
  'notices/addUserCurrentFavorite',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `/api/users/current/favorites/${noticeId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserCurrentFavorite = createAsyncThunk(
  'notices/getUserCurrentFavorite',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get(`/api/users/current/favorites`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);