import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import offcanvasReducer from '../features/offcanvas/offcanvasSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    offcanvas: offcanvasReducer,
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
