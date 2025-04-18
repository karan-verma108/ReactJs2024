import { createContext } from 'react';

export interface UserType {
  user: any;
  setUser: any;
}

export const userInitialValue: UserType = {
  user: '',
  setUser: '',
};

export const UserContext = createContext(userInitialValue);
