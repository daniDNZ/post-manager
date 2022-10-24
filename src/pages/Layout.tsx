type Props = {
  children: JSX.Element;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <header className="header">
        <img className="header__logo" src="./logo.svg" alt="PostManager" loading="lazy"></img>
        <button className="header__user-button"></button>
      </header>
      { children }
      <footer className="footer">
        <span className="footer__text">
          Made with 🤍 by Dani Sanz
        </span>
      </footer>
    </>
  )
}