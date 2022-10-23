import { useState } from "react";

export interface IUserState {
  logged: boolean;
  values: {
    username: string;
    email: string;
  }
}

export default function useUser() {
  const loggedUserJSON = localStorage.getItem('postManagerUserData');
  const initialState: IUserState = loggedUserJSON 
    ? JSON.parse(loggedUserJSON)
    : {
      logged: false,
      values: {
        username: '',
        email: ''
      }
    }

  const [user, setUser] = useState(initialState);

  const loginUser = ({ username, email }: { username: string; email: string }) => {
    const loggedUser: IUserState = {
      logged: true,
      values: {
        username,
        email
      }
    }
    localStorage.setItem('postManagerUserData', JSON.stringify(loggedUser));
    setUser(loggedUser);
  }

  const logoutUser = () => {
    localStorage.removeItem('postManagerUserData');
    setUser({
      logged: false,
      values: {
        username: '',
        email: ''
      }
    })
  }

  return {
    user,
    loginUser,
    logoutUser
  }
}