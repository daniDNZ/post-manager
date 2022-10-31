import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { disableOffcanvas } from "../features/offcanvas/offcanvasSlice";
import { FilterPayload, searchPosts } from "../features/posts/postsSlice";

export default function FilterForm() {
  const dispatch = useAppDispatch();
  const initialState: FilterPayload = {
    q: "",
    order: "asc",
  };
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setInputs((oldInputs) => ({
      ...oldInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(disableOffcanvas());
  };

  useEffect(() => {
    dispatch(searchPosts(inputs));
  }, [inputs, dispatch]);
  return (
    <div className="filter-posts">
      <form className="filter-posts__form form" onSubmit={handleSubmit}>
        <div className="form__input-group">
          <input
            type="text"
            name="q"
            id="q"
            className="form__input filter-posts__input"
            placeholder="Search..."
            onChange={handleChange}
          />
          <i className="form__icon form__icon--search"></i>
        </div>
        <span className="form__span form__span--center">order</span>
        <select
          name="order"
          id="order"
          className="form__input form__input--select filter-posts__input"
          onChange={handleChange}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <button className="button button--filter-form">go</button>
      </form>
    </div>
  );
}
