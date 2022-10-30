import { useAppDispatch } from "../app/hooks";
import {
  changeForm,
  enableOffcanvas,
  OffcanvasKind,
} from "../features/offcanvas/offcanvasSlice";

type Props = {
  data: {
    title: string;
    userID: number;
    content: string;
  };
};

export default function Card({ data: { title, userID, content } }: Props) {
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
        <button className="card__btn card__btn--delete" />
      </div>
      <div className="card__title-wrapper">
        <h3 className="card__title">{title}</h3>
      </div>
      <div className="card__body">
        <hr className="card__separator" />
        <span className="card__user">User: {userID}</span>
        <p className="card__content">{content}</p>
      </div>
    </div>
  );
}
