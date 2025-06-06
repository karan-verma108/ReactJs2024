import { useEffect, useState } from 'react';

import { ThemeProvider } from './contexts/theme';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <Card />
    </ThemeProvider>
  );
}

export default App;
