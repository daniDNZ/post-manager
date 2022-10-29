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
    <div className="login__form-container">
      <form className="login-form">
        <input
          type="text"
          name="username"
          id="username"
          className="login-form__username"
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="login-form__password"
          onChange={handleInput}
        />
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
