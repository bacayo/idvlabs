import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../../types/types';
import { getProductAsync } from '../services';

interface ProductStateInterface {
  isLoading: boolean;
  productError: undefined | string;
  product: Products;
  stock: number;
}

const initialState: ProductStateInterface = {
  isLoading: false,
  productError: undefined,
  product: {} as Products,
  stock: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProduct: state => {
      state.product = {} as Products;
    },
    decrementStock: state => {
      state.stock -= 1;
    },
    incrementStock: state => {
      state.stock += 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(getProductAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      getProductAsync.fulfilled,
      (state, action: PayloadAction<Products>) => {
        state.isLoading = false;
        state.product = action.payload;
        state.stock = action.payload.product_stock;
      },
    );
    builder.addCase(getProductAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.productError = action.error.message;
    });
  },
});

export default productSlice.reducer;

export const { resetProduct, decrementStock } = productSlice.actions;
