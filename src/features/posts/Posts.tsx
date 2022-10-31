import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Pagination from "./Pagination";
import Card from "./Post";
import { fetchPosts, selectPosts, selectPostsCurrentPage } from "./postsSlice";

export default function Posts() {
  const posts = useAppSelector(selectPosts);
  const currentPage = useAppSelector(selectPostsCurrentPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, currentPage]);

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
