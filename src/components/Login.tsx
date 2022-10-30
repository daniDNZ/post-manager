import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function Login() {
  const navigate = useNavigate();
  const { user, loginUser } = useUser();

  const initialState = {
    username: "",
    password: "",
  };
  const [inputs, setInputs] = useState(initialState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((oldInputs) => ({
      ...oldInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    loginUser(inputs);
    navigate("/");
  };

  const userLoginJSX = user.logged ? (
    <button className="header__user-button"></button>
  ) : (
    <div className="login-container">
      <form className="form login-form">
        <div className="form__input-group">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="form__input login-form__input--username"
            onChange={handleInput}
          />
          <i className="form__icon form__icon--username"></i>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form__input login-form__input--password"
            onChange={handleInput}
          />
          <i className="form__icon form__icon--password"></i>
        </div>
        <button
          type="button"
          className="button button--login"
          onClick={handleLogin}
        >
          login
        </button>
      </form>
    </div>
  );

  return userLoginJSX;
}
