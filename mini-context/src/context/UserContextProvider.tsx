import React, { useState } from 'react';
import { UserContext } from './UserContext';
import { userInitialValue, UserType } from './UserContext';

export default function UserContextProvider({ children }): React.JSX.Element {
  const [user, setUser]: [
    UserType,
    React.Dispatch<React.SetStateAction<UserType>>
  ] = useState<UserType>(userInitialValue);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
