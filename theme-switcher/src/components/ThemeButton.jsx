import { useState } from 'react';

import useTheme from '../contexts/theme';

export default function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      darkTheme();
    } else {
      lightTheme();
    }
    setCheckboxValue(e.target.checked);
  };
  return (
    <input
      type='checkbox'
      value={checkboxValue}
      onChange={handleChange}
      checked={themeMode === 'dark'}
    />
  );
}
