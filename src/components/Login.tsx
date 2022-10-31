import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function Login() {
  const navigate = useNavigate();
  const { user, loginUser, logoutUser } = useUser();

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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(inputs);
    navigate("/");
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const userLoginJSX = user.logged ? (
    <>
      <div className="header__user-button" tabIndex={1}>
        <button className="header__logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  ) : (
    <div className="login-container">
      <form className="form login-form" onSubmit={handleLogin}>
        <div className="form__input-group">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="admin"
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
            placeholder="admin"
            className="form__input login-form__input--password"
            onChange={handleInput}
          />
          <i className="form__icon form__icon--password"></i>
        </div>
        <button type="submit" className="button button--login">
          login
        </button>
      </form>
    </div>
  );

  return userLoginJSX;
}
