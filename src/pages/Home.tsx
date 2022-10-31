import FilterButton from "../components/FilterButton";
import FilterForm from "../components/FilterForm";
import Posts from "../features/posts/Posts";
import Offcanvas from "../features/offcanvas/Offcanvas";

export default function Home() {
  return (
    <div className="home">
      <div className="home__filter-form">
        <FilterForm />
      </div>
      <Posts />
      <FilterButton />
      <Offcanvas />
    </div>
  );
}
