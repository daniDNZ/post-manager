import { IPostsState } from "../features/posts/postsSlice";

export default function generatePostsQuery(postsState: IPostsState) {
  let query = `?_page=${postsState.currentPage}&_limit=${postsState.limit}&_sort=id&_order=${postsState.order}`;
  if (postsState.q.length > 0) {
    query += `&q=${postsState.q}`;
  }
  console.log(query)
  return query;
}