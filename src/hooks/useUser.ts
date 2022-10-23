import { useEffect, useState } from "react";

export interface userState {
  logged: boolean;
  values: {
    username: string;
    token: string;
  }
}

export default function useUser() {
  const initialState: userState = {
    logged: false,
    values: {
      username: '',
      token: ''
    }
  }
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('postManagerUserData');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }

  }, [])

  return {
    user
  }
}