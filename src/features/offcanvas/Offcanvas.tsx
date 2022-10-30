import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import EditPostForm from "../../components/EditPostForm";
import FilterForm from "../../components/FilterForm";
import {
  disableOffcanvas,
  OffcanvasKind,
  selectOffcanvasStatus,
  selectOffcanvasType,
} from "./offcanvasSlice";

export default function Offcanvas() {
  const dispatch = useAppDispatch();
  const offcanvasType = useAppSelector(selectOffcanvasType);
  const offcanvasActive = useAppSelector(selectOffcanvasStatus);

  const formSelector = () => {
    switch (offcanvasType) {
      case OffcanvasKind.EDIT_FORM:
        return <EditPostForm />;
      case OffcanvasKind.FILTER_FORM:
      default:
        return <FilterForm />;
    }
  };

  const offcanvasContent = formSelector();
  const offcanvasDisplay = {
    display: offcanvasActive ? "flex" : "none",
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) body.style.overflow = offcanvasActive ? "hidden" : "auto";
  }, [offcanvasActive]);
  return (
    <div className="offcanvas" style={offcanvasDisplay}>
      <button
        className="offcanvas__close"
        onClick={() => dispatch(disableOffcanvas())}
      ></button>
      <div className="offcanvas__body">{offcanvasContent}</div>
    </div>
  );
}
