import { Params, useParams } from 'react-router';

export default function User(): React.JSX.Element {
  const { userId }: Readonly<Params<string>> = useParams(); //using useParams() hook to access url parameters (route parameters)

  return <h1>User : {userId}</h1>;
}
