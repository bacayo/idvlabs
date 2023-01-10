import { createSlice } from '@reduxjs/toolkit';
import { getAllProductsAsync } from '../services';

import { Products } from '../../types/types';

interface ProductStateInterface {
  isLoading: boolean;
  productsError: string | undefined;
  products: Products[];
}

const initialState: ProductStateInterface = {
  isLoading: false,
  productsError: undefined,
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllProductsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllProductsAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProductsAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.productsError = action.error.message;
    });
  },
});

export default productsSlice.reducer;
