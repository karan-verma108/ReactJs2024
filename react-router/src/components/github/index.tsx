import React, { useState, useEffect } from 'react';

export default function Github(): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData]: any = useState([]);

  const githubApiUrl: string = import.meta.env.VITE_GITHUB_API ?? '';
  const githubUserName: string = import.meta.env.VITE_GITHUB_USERNAME ?? '';

  useEffect(() => {
    fetch(`${githubApiUrl}/${githubUserName}`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log('err', err));
  }, []);

  if (userData?.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Welcome to Github page</h1>
      <div className='flex flex-col gap-3'>
        <p>Followers : {userData?.followers ?? 'N/A'} </p>
        <div className='flex gap-4 justify-center'>
          {userData?.name && <p>User : {userData?.name} </p>}
          {userData?.avatar_url && (
            <img
              src={userData?.avatar_url}
              alt='user avatar'
              width={150}
              height={150}
            />
          )}
        </div>
      </div>
    </div>
  );
}
