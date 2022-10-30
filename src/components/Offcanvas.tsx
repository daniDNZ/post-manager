import { useEffect } from "react";
import EditPostForm from "./EditPostForm";
import FilterForm from "./FilterForm";

export default function Offcanvas() {
  // const offcanvasContent = <EditPostForm />;
  const offcanvasContent = <FilterForm />;
  useEffect(() => {
    const body = document.querySelector("body");

    if (body) body.style.overflow = "hidden";
  }, []);
  return (
    <div className="offcanvas">
      <button className="offcanvas__close"></button>
      <div className="offcanvas__body">{offcanvasContent}</div>
    </div>
  );
}
