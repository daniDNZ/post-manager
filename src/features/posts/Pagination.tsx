import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  nextPage,
  prevPage,
  selectPostsCurrentPage,
  selectPostsLastPage,
} from "./postsSlice";

export default function Pagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectPostsCurrentPage);
  const lastPage = useAppSelector(selectPostsLastPage);

  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__button--prev"
        disabled={currentPage === 1}
        onClick={() => dispatch(prevPage())}
      ></button>
      <span>{currentPage}</span>
      <button
        className="pagination__button pagination__button--next"
        disabled={currentPage === lastPage}
        onClick={() => dispatch(nextPage())}
      ></button>
    </div>
  );
}
