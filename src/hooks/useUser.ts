import { useReducer } from "react";
import IUserState from "../interfaces/IUserState";
import { authReducer, AuthActionKind } from "../reducers/authReducer";

export default function useUser() {
  const loggedUserJSON = localStorage.getItem('postManagerUserData');
  const initialState: IUserState = loggedUserJSON 
    ? JSON.parse(loggedUserJSON)
    : {
      logged: false,
      values: {
        username: ''
      }
    }

  const [user, dispatchUser] = useReducer(authReducer, initialState);

  const loginUser = ({ username, password }: { username: string; password: string }) => {

    // Hardcoded login
    if (username === 'admin' && password === 'admin') {
      dispatchUser({type: AuthActionKind.LOGIN, payload: {username}})
    }
  }

  const logoutUser = () => {
    dispatchUser({ type: AuthActionKind.LOGOUT, payload: { username: '' }});
  }

  return {
    user,
    loginUser,
    logoutUser
  }
}