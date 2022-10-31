import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { disableOffcanvas } from "../features/offcanvas/offcanvasSlice";
import { selectCurrentPost, updatePost } from "../features/posts/postsSlice";

export default function EditPostForm() {
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectCurrentPost);
  const [tempPost, setTempPost] = useState(
    post ? { ...post } : { id: 0, userId: 0, title: "", body: "" }
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTempPost((oldTempPost) => ({
      ...oldTempPost,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updatePost(tempPost));
    dispatch(disableOffcanvas());
  };

  useEffect(() => {
    if (post) setTempPost(post);
  }, [post]);
  return (
    <div className="edit-post">
      <span className="form__span edit-post__span">Post: {tempPost.id}</span>
      <span className="form__span edit-post__span">
        User: {tempPost.userId}
      </span>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          className="form__input edit-post__input"
          placeholder="Title"
          value={tempPost.title}
          onChange={handleChange}
        />
        <textarea
          name="body"
          id="body"
          cols={30}
          rows={8}
          className="form__input edit-post__input form__input--textarea"
          placeholder="Body"
          value={tempPost.body}
          onChange={handleChange}
        />
        <button type="submit" className="button button--offcanvas">
          edit
        </button>
      </form>
    </div>
  );
}
