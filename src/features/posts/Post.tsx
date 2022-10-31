import { useAppDispatch } from "../../app/hooks";
import {
  changeForm,
  enableOffcanvas,
  OffcanvasKind,
} from "../offcanvas/offcanvasSlice";
import { deletePost, IPost } from "./postsSlice";

type Props = {
  data: IPost;
};

export default function Post({ data: { title, userId, id, body } }: Props) {
  const dispatch = useAppDispatch();

  const handleEditButton = () => {
    dispatch(changeForm(OffcanvasKind.EDIT_FORM));
    dispatch(enableOffcanvas());
  };
  return (
    <div className="card">
      <div className="card__header">
        <button
          className="card__btn card__btn--edit"
          onClick={handleEditButton}
        />
        <button
          className="card__btn card__btn--delete"
          onClick={() => dispatch(deletePost({ id }))}
        />
      </div>
      <div className="card__title-wrapper">
        <h3 className="card__title">{title}</h3>
      </div>
      <div className="card__body">
        <hr className="card__separator" />
        <span className="card__user">User: {userId}</span>
        <p className="card__content">{body}</p>
      </div>
    </div>
  );
}
