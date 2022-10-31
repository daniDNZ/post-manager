import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Card from "./Post";
import { fetchPosts, selectPosts } from "./postsSlice";

export default function Posts() {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="cards-container">
      {posts.map((post) => {
        return <Card data={post} key={post.id} />;
      })}
    </div>
  );
}
