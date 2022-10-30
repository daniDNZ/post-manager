import Login from "./Login";

export default function Header() {
  return (
    <header className="header">
      <img src="./logo.svg" alt="PostManager" loading="lazy"></img>
      <Login />
    </header>
  );
}
