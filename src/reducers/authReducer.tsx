import IUserState from "../interfaces/IUserState";

enum AuthActionKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface IAuthAction {
  type: AuthActionKind;
  payload: { username: string };
}

const storeUser = (user: IUserState) => {
  localStorage.setItem("postManagerUserData", JSON.stringify(user));
};

const authReducer = (state: IUserState, action: IAuthAction) => {
  switch (action.type) {
    case AuthActionKind.LOGIN:
      const newStateLogin = {
        ...state,
        logged: true,
        values: {
          username: action.payload.username,
        },
      };
      storeUser(newStateLogin);
      return newStateLogin;
    case AuthActionKind.LOGOUT:
    default:
      const newStateLogout = {
        ...state,
        logged: false,
        values: {
          username: "",
        },
      };
      storeUser(newStateLogout);
      return newStateLogout;
  }
};

export { authReducer, AuthActionKind };
