import { renderHook, act } from '@testing-library/react';
import IUserState from '../interfaces/IUserState';
import useUser from './useUser';

describe('useUser hook', () => {
  const loginData: IUserState = {
    logged: false,
    values: {
      username: ''
    }
  }
  localStorage.setItem('postManagerUserData', JSON.stringify(loginData));
  
  test('should return not logged', () => {
    const { result } = renderHook(() => useUser());
    expect(result.current.user.logged).toBe(false);
  });
  
  test('should return logged (login)', () => {
    const { result } = renderHook(() => useUser());
    const username = 'admin';
    const password = 'admin';
    act(() => {
      result.current.loginUser({username, password});
    })
    expect(result.current.user.logged).toBe(true);
    expect(result.current.user.values.username).toEqual(username);
  });

  test('should return not logged (logout)', () => {
    const { result } = renderHook(() => useUser());
    act(() => {
      result.current.logoutUser();
    })
    expect(result.current.user.logged).toBe(false);
  });
})