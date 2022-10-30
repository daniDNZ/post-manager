export default function EditPostForm() {
  return (
    <div className="edit-post">
      <span className="form__span edit-post__span">Post: </span>
      <span className="form__span edit-post__span">User: </span>
      <form action="" className="form">
        <input
          type="text"
          name="title"
          id="title"
          className="form__input edit-post__input"
          placeholder="Title"
        />
        <textarea
          name="content"
          id="content"
          cols={30}
          rows={8}
          className="form__input edit-post__input form__input--textarea"
          placeholder="Content"
        />
        <button className="button button--offcanvas">edit</button>
      </form>
    </div>
  );
}
