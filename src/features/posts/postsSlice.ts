import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import apiFetch, { FetchMethods } from "../../functions/api-fetch";

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const options = {
      url: 'posts',
      method: FetchMethods.GET,
    };
    const posts: Array<IPost> = await apiFetch(options);

    return posts;
  },
);

export interface IPost {
  userId?: number,
  id: number,
  title?: string,
  body?: string
}

export interface IPostsState {
  values: IPost[];
  status: 'idle' | 'loading' | 'failed';
  page: number;
}

const initialState: IPostsState = {
  values: [],
  status: 'idle',
  page: 1
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.values = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
      });
  },
  
});

export const selectPosts = (state: RootState) => state.posts.values;
export const selectPostsStatus = (state: RootState) => state.posts.status;

export default postsSlice.reducer;