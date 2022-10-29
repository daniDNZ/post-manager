import Login from "./Login";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="./logo.svg"
        alt="PostManager"
        loading="lazy"
      ></img>
      <Login />
    </header>
  );
}
