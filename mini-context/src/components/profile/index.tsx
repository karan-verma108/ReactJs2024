import React, { useContext } from 'react';

import { UserContext } from '../../context';

interface DataType {
  email: string;
  password: string;
}

export default function Profile(): React.JSX.Element {
  const { user }: { user: DataType } = useContext(UserContext);
  const { email }: { email: string } = user;

  return (
    <div>
      <h2>Profile page</h2>
      {email?.length > 0 ? <p>Welcome, {email}</p> : 'No User Found'}
    </div>
  );
}
