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

export const updateProductAsync = createAsyncThunk(
  'updateProductAsync',
  async (
    data: {
      id: number;
      title: string;
      price: string;
      description: string;
      image: string;
      category: string;
      product_stock: number;
    },
    thunkAPI,
  ) => {
    const response = await axios.put(`products/${data.id}/`, {
      id: data.id,
      title: data.title,
      price: data.price,
      description: data.description,
      image: data.image,
      category: data.category,
      product_stock: data.product_stock,
    });
    // dispatch products and single product
    thunkAPI.dispatch(getAllProductsAsync());
    thunkAPI.dispatch(getProductAsync(data.id));
    return response.data;
  },
);

//delete product
export const deleteProductAsync = createAsyncThunk(
  'deleteProductAsync',
  async (id: number, thunkAPI) => {
    const response = await axios.delete(`products/${id}/`);
    thunkAPI.dispatch(getAllProductsAsync());
    return response.data;
  },
);

// add product

export const addProductAsync = createAsyncThunk(
  'addProductAsync',
  async (
    data: {
      title: string;
      price: string;
      description: string;
      image: string;
      category: string;
      product_stock: number;
    },
    thunkAPI,
  ) => {
    const response = await axios.post('products', {
      title: data.title,
      price: data.price,
      description: data.description,
      image: data.image,
      category: data.category,
      product_stock: data.product_stock,
    });
    thunkAPI.dispatch(getAllProductsAsync());
    return response.data;
  },
);
