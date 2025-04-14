import { useLoaderData } from 'react-router';

export default function Github(): React.JSX.Element {
  const userData = useLoaderData();

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
