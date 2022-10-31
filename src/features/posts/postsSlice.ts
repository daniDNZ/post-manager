import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import apiFetch, { FetchMethods } from "../../functions/apiFetch";
import parseLinkHeaders from "../../functions/parseLinkHeaders";

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
    const options = {
      url: state.posts.url,
      method: FetchMethods.GET,
    };
      const res = await apiFetch(options);
      const pages = res.linkHeaders
        ? parseLinkHeaders(res.linkHeaders)
        : {
          first: 0,
          next: 0,
          prev: 0,
          last: 0,
        }
    return { data: res.data, pages };
  },
);

export interface IPost {
  userId?: number,
  id: number,
  title?: string,
  body?: string
}

export interface IPages {
  first: number,
  next: number,
  prev: number,
  last: number,
};

export interface IPostsState {
  values: IPost[];
  status: 'idle' | 'loading' | 'failed';
  url: string;
  currentPage: number;
  limit: number;
  pages: IPages;
}

const initialState: IPostsState = {
  values: [],
  status: 'idle',
  url: `${process.env.REACT_APP_API_DOMAIN}posts?_page=2&_limit=10`,
  currentPage: 1,
  limit: 10,
  pages: {
    first: 1,
    next: 1,
    prev: 1,
    last: 1,
  }
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.url = `${process.env.REACT_APP_API_DOMAIN}posts?_page=${state.pages.next}&_limit=10`;
      state.currentPage += 1;
    },
    prevPage: (state) => {
      state.url = `${process.env.REACT_APP_API_DOMAIN}posts?_page=${state.pages.prev}&_limit=10`;
      state.currentPage -= 1;
    },
    otherPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.url = `${process.env.REACT_APP_API_DOMAIN}posts?_page=${action.payload}&_limit=10`;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.values = action.payload.data;
        state.pages = action.payload.pages;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
      });
  },
  
});

export const { nextPage, prevPage, otherPage } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.values;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsCurrentPage = (state: RootState) => state.posts.currentPage;
export const selectPostsLastPage = (state: RootState) => state.posts.pages.last;

export default postsSlice.reducer;