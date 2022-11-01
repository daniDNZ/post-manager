import Login from "./Login";

export default function Header() {
  return (
    <header className="header">
      <img
        src={`${process.env.PUBLIC_URL}/img/svg/logo.svg`}
        alt="PostManager"
        loading="lazy"
        height="30px"
      ></img>
      <Login />
    </header>
  );
}
