import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
