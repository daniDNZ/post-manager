import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function Welcome() {
  const { user } = useUser();

  if (user.logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="welcome">
      <span className="welcome__text">WELCOME!</span>
      <div className="welcome__logo-container">
        <img
          src="./img/svg/logo.svg"
          className="welcome__logo"
          alt="Post Manager"
        />
      </div>
    </div>
  );
}
