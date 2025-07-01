import { useSelector } from 'react-redux';

export default function CountDisplay(): React.JSX.Element {
  const currentCount: number = useSelector(
    (state: any) => state.counter.currentCount
  );
  return <h1>the updated count is : {currentCount}</h1>;
}
