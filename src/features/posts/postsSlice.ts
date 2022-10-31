import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import apiFetch, { FetchMethods } from "../../functions/apiFetch";
import generatePostsQuery from "../../functions/generatePostsQuery";
import parseLinkHeaders from "../../functions/parseLinkHeaders";
import { fakeFetch } from "./postsAPI";

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
  currentPostId: number;
  currentPage: number;
  limit: number;
  q: string;
  order: 'asc' | 'desc';
  pages: IPages;
}

export type FilterPayload = 
  {
    q: string;
    order: 'asc' | 'desc';
  }

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      console.log(state.posts.url)
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

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async ({id}: {id: number}) => {
    const options = {
      url: `${process.env.REACT_APP_API_DOMAIN}posts/${id}`,
      method: FetchMethods.DELETE,
    };
      const res = await fakeFetch(options);

    return {res, postId: id};
  },
);

const initialState: IPostsState = {
  values: [],
  status: 'idle',
  url: `${process.env.REACT_APP_API_DOMAIN}posts?_page=1&_limit=10`,
  currentPostId: 0,
  currentPage: 1,
  limit: 10,
  q: '',
  order: 'asc',
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
      state.currentPage += 1;
      const query = generatePostsQuery(state);
      state.url = `${process.env.REACT_APP_API_DOMAIN}posts${query}`;
    },
    prevPage: (state) => {
      state.currentPage -= 1;
      const query = generatePostsQuery(state);
      state.url = `${process.env.REACT_APP_API_DOMAIN}posts${query}`;
    },
    otherPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      const query = generatePostsQuery(state);
      state.url = `${process.env.REACT_APP_API_DOMAIN}posts${query}`;
    },
    searchPosts: (state, action: PayloadAction<FilterPayload>) => {
      state.currentPage = 1;
      state.q = action.payload.q;
      state.order = action.payload.order;
      const query = generatePostsQuery(state);
      state.url = `${process.env.REACT_APP_API_DOMAIN}posts${query}`;
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
      })
      .addCase(deletePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'idle';
        state.values = state.values.filter((item) => item.id !== action.payload.postId);
      })
      .addCase(deletePost.rejected, (state) => {
        state.status = 'failed';
      });
  },
  
});

export const { nextPage, prevPage, otherPage, searchPosts } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.values;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsCurrentPage = (state: RootState) => state.posts.currentPage;
export const selectPostsLastPage = (state: RootState) => state.posts.pages.last;
export const selectPostsQ = (state: RootState) => state.posts.q;
export const selectPostsOrder = (state: RootState) => state.posts.order;

export default postsSlice.reducer;