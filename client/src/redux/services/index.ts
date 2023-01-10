import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

const BASE_URL = Config.BASE_URL;
axios.defaults.baseURL = BASE_URL;

export const getAllProductsAsync = createAsyncThunk(
  'productsSlice/getAllProductsAsync',
  async () => {
    const response = await axios.get('products');
    return response.data;
  },
);

export const getProductAsync = createAsyncThunk(
  'productSLice/getProductAsync',
  async (id: number) => {
    const response = await axios.get(`products/${id}`);
    return response.data;
  },
);
