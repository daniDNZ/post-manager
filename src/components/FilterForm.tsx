export default function FilterForm() {
  return (
    <div className="filter-posts">
      <form action="" className="filter-posts__form form">
        <div className="form__input-group">
          <input
            type="text"
            name="search"
            id="search"
            className="form__input filter-posts__input"
            placeholder="Search..."
          />
          <i className="form__icon form__icon--search"></i>
        </div>
        <span className="form__span form__span--center">by</span>
        <select
          name="selectFilter"
          id="selectFilter"
          className="form__input form__input--select filter-posts__input"
        >
          <option value="title">Title</option>
          <option value="content">Content</option>
          <option value="user">User</option>
          <option value="id">Post ID</option>
        </select>

        <button className="button button--filter-form">go</button>
      </form>
    </div>
  );
}
