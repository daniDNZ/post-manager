import { useAppDispatch } from "../app/hooks";
import {
  changeForm,
  enableOffcanvas,
  OffcanvasKind,
} from "../features/offcanvas/offcanvasSlice";

export default function FilterButton() {
  const dispatch = useAppDispatch();

  const handleFilterButton = () => {
    dispatch(changeForm(OffcanvasKind.FILTER_FORM));
    dispatch(enableOffcanvas());
  };

  return (
    <button className="button button--filter" onClick={handleFilterButton} />
  );
}
