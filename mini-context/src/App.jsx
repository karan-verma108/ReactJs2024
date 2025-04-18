import { Login, Profile } from './components';
import { UserContextProvider } from './context';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
