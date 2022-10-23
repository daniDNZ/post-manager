import { renderHook, act } from '@testing-library/react';
import useUser, { IUserState } from './useUser';

describe('useUser hook', () => {
  const loginData: IUserState = {
    logged: false,
    values: {
      username: '',
      email: '',
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
    const email = 'admin@admin.com';
    act(() => {
      result.current.loginUser({username, email});
    })
    expect(result.current.user.logged).toBe(true);
    expect(result.current.user.values.username).toEqual(username);
    expect(result.current.user.values.email).toEqual(email);
  });

  test('should return not logged (logout)', () => {
    const { result } = renderHook(() => useUser());
    act(() => {
      result.current.logoutUser();
    })
    expect(result.current.user.logged).toBe(false);
  });
})