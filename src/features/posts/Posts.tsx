import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Pagination from "./Pagination";
import Card from "./Post";
import {
  fetchPosts,
  selectPosts,
  selectPostsCurrentPage,
  selectPostsQ,
  selectPostsOrder,
} from "./postsSlice";

export default function Posts() {
  const posts = useAppSelector(selectPosts);
  const currentPage = useAppSelector(selectPostsCurrentPage);
  const q = useAppSelector(selectPostsQ);
  const order = useAppSelector(selectPostsOrder);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(order);
    dispatch(fetchPosts());
  }, [dispatch, currentPage, q, order]);

  return (
    <>
      <div className="cards-container">
        {posts.map((post) => {
          return <Card data={post} key={post.id} />;
        })}
      </div>
      <Pagination />
    </>
  );
}
