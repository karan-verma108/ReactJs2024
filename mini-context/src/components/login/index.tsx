import React, { useState, useContext } from 'react';

import { UserContext } from '../../context';

export default function Login(): React.JSX.Element {
  const [email, setEmail]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');
  const [password, setPassword]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const { setUser }: any = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ email: email, password: password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        type='email'
        id='email'
        placeholder='enter email'
        className='border border-black p-2 rounded-lg text-lg'
        name='email'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        value={password}
        type='password'
        placeholder='enter password'
        id='password'
        className='border border-black p-2 rounded-lg text-lg'
        name='password'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button type='submit' className='bg-blue-300 text-white p-2 rounded-lg'>
        Submit
      </button>
    </form>
  );
}
